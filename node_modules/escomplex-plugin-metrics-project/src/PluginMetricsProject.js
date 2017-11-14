import MathUtil      from 'typhonjs-escomplex-commons/src/utils/MathUtil';
import ObjectUtil    from 'typhonjs-escomplex-commons/src/utils/ObjectUtil';

/**
 * Provides default project metrics gathering and calculation.
 *
 * @see https://en.wikipedia.org/wiki/Adjacency_matrix
 * @see https://en.wikipedia.org/wiki/Distance_matrix
 * @see https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm
 */
export default class PluginMetricsProject
{
   // ESComplexProject plugin callbacks -----------------------------------------------------------------------------

   /**
    * Loads any default settings that are not already provided by any user options.
    *
    * @param {object}   ev - escomplex plugin event data.
    *
    * The following options are:
    * ```
    * (boolean)   newmi - Boolean indicating whether the maintainability index should be rebased on a scale from
    *                     0 to 100; defaults to false.
    * ```
    */
   onConfigure(ev)
   {
      ev.data.settings.noCoreSize = typeof ev.data.options.noCoreSize === 'boolean' ?
       ev.data.options.noCoreSize : false;
   }

   /**
    * Performs final calculations based on collected project report data.
    *
    * @param {object}   ev - escomplex plugin event data.
    */
   onProjectEnd(ev)
   {
      const pathModule = ev.data.pathModule;
      const projectReport = ev.data.projectReport;

      const adjacencyMatrix = this._calculateAdjacencyMatrix(pathModule, projectReport);

      if (!this.settings.noCoreSize)
      {
         const visibilityMatrix = this._calculateVisibilityMatrix(projectReport, adjacencyMatrix);
         this._calculateCoreSize(projectReport, visibilityMatrix);
      }

      this._calculateAverages(projectReport);
   }

   /**
    * Stores settings.
    *
    * @param {object}   ev - escomplex plugin event data.
    */
   onProjectStart(ev)
   {
      /**
       * Stores the settings for all ESComplexProject plugins.
       * @type {object}
       */
      this.settings = ev.data.settings;
   }

   // Project metrics calculation -----------------------------------------------------------------------------------

   /**
    * Calculates an adjacency matrix for all modules based on ES Module and CommonJS dependencies also storing a
    * compacted while returning the matrix for further calculation. Each row index corresponds to the same module index.
    * Each row entry corresponds to a module index. These relationships dictate the dependencies between all
    * module ModuleReports given the source paths.
    *
    * @param {object}   pathModule - A module that conforms to the Node path API.
    * @param {object}   projectReport - The ProjectResult being processed.
    *
    * @returns {Array<Array<number>>}
    * @private
    */
   _calculateAdjacencyMatrix(pathModule, projectReport)
   {
      const modules = projectReport.modules;
      const length = modules.length;

      const adjacencyMatrix = MathUtil.create2DArray(length, 0);

      let density = 0;

      for (let x = 0; x < length; x++)
      {
         for (let y = 0; y < length; y++)
         {
            adjacencyMatrix[x][y] = x !== y && this._doesDependencyExist(pathModule, modules[x], modules[y]) ? 1 : 0;

            if (adjacencyMatrix[x][y] === 1) { density += 1; }
         }
      }

      projectReport.adjacencyList = MathUtil.compactMatrix(adjacencyMatrix);

      projectReport.firstOrderDensity = MathUtil.getPercent(density, length * length);

      return adjacencyMatrix;
   }

   /**
    * Calculates average ModuleReport metrics that are applicable to ProjectResult.
    *
    * @param {object}   projectReport - The ProjectResult being processed.
    *
    * @private
    */
   _calculateAverages(projectReport)
   {
      const divisor = projectReport.modules.length === 0 ? 1 : projectReport.modules.length;

      const moduleAverage = projectReport.moduleAverage;
      const moduleAverageKeys = ObjectUtil.getAccessorList(moduleAverage);

      // Defer to ModuleReport to sum all relevant module metrics applicable to ProjectResult.
      projectReport.modules.forEach((module) =>
      {
         moduleAverageKeys.forEach((averageKey) =>
         {
            const targetValue = ObjectUtil.safeAccess(module, averageKey, 0);
            ObjectUtil.safeSet(moduleAverage, averageKey, targetValue, 'add');
         });
      });

      moduleAverageKeys.forEach((averageKey) =>
      {
         ObjectUtil.safeSet(moduleAverage, averageKey, divisor, 'div');
      });
   }

   /**
    * Calculates core size which is the percentage of modules / files that are both widely depended on and themselves
    * depend on other modules. Lower is better.
    *
    * @param {object}               projectReport - The ProjectResult being processed.
    * @param {Array<Array<number>>} visibilityMatrix - The calculated visibilityMatrix.
    *
    * @private
    */
   _calculateCoreSize(projectReport, visibilityMatrix)
   {
      if (projectReport.firstOrderDensity === 0)
      {
         projectReport.coreSize = 0;
         return;
      }

      const length = visibilityMatrix.length;

      const fanIn = new Array(length);
      const fanOut = new Array(length);
      let coreSize = 0;

      for (let rowIndex = 0; rowIndex < length; rowIndex++)
      {
         fanIn[rowIndex] = visibilityMatrix[rowIndex].reduce((sum, value, valueIndex) =>
         {
            fanOut[valueIndex] = rowIndex === 0 ? value : fanOut[valueIndex] + value;
            return sum + value;
         }, 0);
      }

      // Boundary values can also be chosen by looking for discontinuity in the
      // distribution of values, but to keep it simple the median is used.
      const boundaries =
      {
         fanIn: MathUtil.getMedian(fanIn.slice()),
         fanOut: MathUtil.getMedian(fanOut.slice())
      };

      for (let rowIndex = 0; rowIndex < length; rowIndex++)
      {
         if (fanIn[rowIndex] >= boundaries.fanIn && fanOut[rowIndex] >= boundaries.fanOut) { coreSize += 1; }
      }

      projectReport.coreSize = MathUtil.getPercent(coreSize, length);
   }

   /**
    * Stores a compacted form of the visibility matrix. Each row index corresponds to the same module index.
    * Each row entry corresponds to a module index. These relationships dictate the reverse visibility between all
    * module ModuleReports which may indirectly impact the given module / file. The full matrix is returned for further
    * calculation.
    *
    * Implementation of Floyd Warshall algorithm for calculating visibility matrix in O(n^3) instead of O(n^4) with
    * successive raising of powers.
    *
    * @param {object}               projectReport - The ProjectResult being processed.
    * @param {Array<Array<number>>} adjacencyMatrix - The calculated adjacencyMatrix.
    *
    * @return {Array<Array<number>>}
    * @private
    */
   _calculateVisibilityMatrix(projectReport, adjacencyMatrix)
   {
      let changeCost = 0;

      const length = adjacencyMatrix.length;
      const visibilityMatrix = MathUtil.create2DArray(length, 0);

      // Convert adjacency matrix to a distance matrix suitable for the Floyd Warshall algorithm.
      // if i !== j and adjacency matrix value is 0 set distance to Infinity.
      for (let x = 0; x < length; x++)
      {
         for (let y = 0; y < length; y++) { visibilityMatrix[x][y] = x === y ? 1 : adjacencyMatrix[x][y] || Infinity; }
      }

      // Floyd Warshall core algorithm
      for (let k = 0; k < length; k++)
      {
         for (let x = 0; x < length; x++)
         {
            for (let y = 0; y < length; y++)
            {
               if (visibilityMatrix[x][y] > visibilityMatrix[x][k] + visibilityMatrix[k][y])
               {
                  visibilityMatrix[x][y] = visibilityMatrix[x][k] + visibilityMatrix[k][y];
               }
            }
         }
      }

      // Convert back from a distance matrix to adjacency matrix while also calculating change cost.
      for (let x = 0; x < length; x++)
      {
         for (let y = 0; y < length; y++)
         {
            if (visibilityMatrix[x][y] < Infinity)
            {
               changeCost++;

               if (x !== y) { visibilityMatrix[x][y] = 1; }
            }
            else
            {
               visibilityMatrix[x][y] = 0;
            }
         }
      }

      projectReport.visibilityList = MathUtil.compactMatrix(visibilityMatrix);

      projectReport.changeCost = MathUtil.getPercent(changeCost, length * length);

      return visibilityMatrix;
   }

   /**
    * Determines if there is at least one dependency that matches `toModuleReport.srcPath` from all the dependencies
    * stored in `fromModuleReport`.
    *
    * @param {object}         pathModule - A module that conforms to the Node path API.
    * @param {ModuleReport}   fromModuleReport - A ModuleReport to match to the srcPath of `toModuleReport`.
    * @param {ModuleReport}   toModuleReport - A ModuleReport providing the `srcPath` to match.
    *
    * @returns {boolean}
    * @private
    */
   _doesDependencyExist(pathModule, fromModuleReport, toModuleReport)
   {
      let matchedDependency = false;
      let fromModuleReport_dirname = pathModule.dirname(fromModuleReport.srcPath);

      // First test for srcPathAlias which is the case when an NPM or JSPM module has a main entry and is mapped to a
      // given name or alias.
      for (let cntr = 0; cntr < fromModuleReport.dependencies.length; cntr++)
      {
         const depPath = fromModuleReport.dependencies[cntr].path;

         if (typeof toModuleReport.srcPathAlias === 'string' && depPath === toModuleReport.srcPathAlias)
         {
            matchedDependency = true;
            break;
         }
      }

      // Exit early if alias match was found above.
      if (matchedDependency) { return true; }

      // Now test for srcPath matches.
      for (let cntr = 0; cntr < fromModuleReport.dependencies.length; cntr++)
      {
         let depPath = fromModuleReport.dependencies[cntr].path;

         // If there is no extension provided in the dependency then add the extension of the `to srcPath`.
         if (pathModule.extname(depPath) === '') { depPath += pathModule.extname(toModuleReport.srcPath); }

         // Best case match scenario when dependency matches toModuleReportPath.srcPath.
         if (depPath === toModuleReport.srcPath)
         {
            matchedDependency = true;
            break;
         }

         // Make sure that fromModuleReport dirname has the path separator prepended. This is necessary to make sure
         // pathModule (Node.js path) treats `fromModuleReport_dirname` as the absolute root.
         if (!fromModuleReport_dirname.startsWith(pathModule.sep))
         {
            fromModuleReport_dirname = `${pathModule.sep}${fromModuleReport_dirname}`;
         }

         if (pathModule.resolve(fromModuleReport_dirname, depPath) === toModuleReport.srcPath)
         {
            matchedDependency = true;
            break;
         }

         let toModuleReport_modpath = toModuleReport.srcPath;

         // Remove any local directory (`.`) leading character from `toModuleReport_modpath`.
         if (toModuleReport_modpath.startsWith('.'))
         {
            toModuleReport_modpath = toModuleReport_modpath.replace(/^\./, '');
         }

         // Ensure `toModuleReport_modpath` starts with the path separator.
         if (!toModuleReport_modpath.startsWith(pathModule.sep))
         {
            toModuleReport_modpath = `${pathModule.sep}${toModuleReport_modpath}`;
         }

         if (pathModule.resolve(fromModuleReport_dirname, depPath) === toModuleReport_modpath)
         {
            matchedDependency = true;
            break;
         }
      }

      return matchedDependency;
   }
}
