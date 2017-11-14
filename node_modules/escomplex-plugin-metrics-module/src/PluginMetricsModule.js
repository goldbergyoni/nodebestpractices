import HalsteadArray from 'typhonjs-escomplex-commons/src/module/traits/HalsteadArray';
import TraitUtil     from 'typhonjs-escomplex-commons/src/module/traits/TraitUtil';

import ObjectUtil    from 'typhonjs-escomplex-commons/src/utils/ObjectUtil';

/**
 * Provides a typhonjs-escomplex-module / ESComplexModule plugin which gathers and calculates all default metrics.
 *
 * @see https://www.npmjs.com/package/typhonjs-escomplex-commons
 * @see https://www.npmjs.com/package/typhonjs-escomplex-module
 */
export default class PluginMetricsModule
{
   // ESComplexModule plugin callbacks ------------------------------------------------------------------------------

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
      ev.data.settings.newmi = typeof ev.data.options.newmi === 'boolean' ? ev.data.options.newmi : false;
   }

   /**
    * During AST traversal when a node is entered it is processed immediately if the node type corresponds to a
    * loaded trait syntax. Any new report scopes are handled in `onEnterNode`.
    *
    * @param {object}   ev - escomplex plugin event data.
    */
   onEnterNode(ev)
   {
      const report = ev.data.report;
      const node = ev.data.node;
      const parent = ev.data.parent;
      const syntax = this.syntaxes[node.type];

      // Process node syntax.
      if (syntax !== null && typeof syntax === 'object')
      {
         for (const key in syntax)
         {
            switch (syntax[key].metric)
            {
               case 'cyclomatic':
                  report.incrementCyclomatic(syntax[key].valueOf(node, parent));
                  break;

               case 'dependencies':
                  report.addDependencies(syntax[key].valueOf(node, parent));
                  break;

               case 'lloc':
                  report.incrementLogicalSloc(syntax[key].valueOf(node, parent));
                  break;
            }

            // Process operands / operators HalsteadArray entries
            if (syntax[key] instanceof HalsteadArray)
            {
               report.processHalsteadItems(syntax[key].metric, syntax[key].valueOf(node, parent));
            }
         }

         // Handle creating new scope if applicable.
         if (syntax.newScope)
         {
            switch (syntax.newScope.valueOf(node, parent))
            {
               case 'class':
                  report.createScope('class', TraitUtil.safeName(node.id), node.loc.start.line, node.loc.end.line);
                  break;

               case 'method':
                  report.createScope('method', TraitUtil.safeComputedName(node, parent), node.loc.start.line,
                   node.loc.end.line, node.params.length);
                  break;
            }
         }

         // Return any child keys to ignore in AST walking or an empty array.
         ev.data.ignoreKeys = syntax.ignoreKeys ? syntax.ignoreKeys.valueOf(node, parent) : [];
      }
   }

   /**
    * During AST traversal when a node is exited it is processed immediately if the node type corresponds to a
    * loaded trait syntax. If a node has a new report scope it is popped in `onExitNode`.
    *
    * @param {object}   ev - escomplex plugin event data.
    */
   onExitNode(ev)
   {
      const report = ev.data.report;
      const node = ev.data.node;
      const parent = ev.data.parent;
      const syntax = this.syntaxes[node.type];

      if (syntax !== null && typeof syntax === 'object' && syntax.newScope)
      {
         switch (syntax.newScope.valueOf(node, parent))
         {
            case 'class':
               report.popScope('class');
               break;

            case 'method':
               report.popScope('method');
               break;
         }
      }
   }

   /**
    * Performs final calculations based on collected report data.
    *
    * @param {object}   ev - escomplex plugin event data.
    */
   onModuleEnd(ev)
   {
      this._calculateMetrics(ev.data.report);
   }

   /**
    * Stores settings and syntaxes, initializes local variables and creates the initial aggregate report.
    *
    * @param {object}   ev - escomplex plugin event data.
    */
   onModuleStart(ev)
   {
      /**
       * Stores the settings for all ESComplexModule plugins.
       * @type {object}
       */
      this.settings = ev.data.settings;

      /**
       * Stores the trait syntaxes loaded by other ESComplexModule plugins.
       * @type {object}
       */
      this.syntaxes = ev.data.syntaxes;
   }

   // Module metrics calculation ------------------------------------------------------------------------------------

   /**
    * Calculates cyclomatic density - Proposed as a modification to cyclomatic complexity by Geoffrey K. Gill and
    * Chris F. Kemerer in 1991, this metric simply re-expresses it as a percentage of the logical lines of code. Lower
    * is better.
    *
    * @param {MethodReport}   report - A MethodReport to perform calculations on.
    *
    * @private
    */
   _calculateCyclomaticDensity(report)
   {
      report.cyclomaticDensity = report.sloc.logical === 0 ? 0 : (report.cyclomatic / report.sloc.logical) * 100;
   }

   /**
    * Calculates Halstead metrics. In 1977, Maurice Halstead developed a set of metrics which are calculated based on
    * the number of distinct operators, the number of distinct operands, the total number of operators and the total
    * number of operands in each function. This site picks out three Halstead measures in particular: difficulty,
    * volume and effort.
    *
    * @param {HalsteadData}   halstead - A HalsteadData instance to perform calculations on.
    *
    * @see https://en.wikipedia.org/wiki/Halstead_complexity_measures
    *
    * @private
    */
   _calculateHalsteadMetrics(halstead)
   {
      halstead.length = halstead.operators.total + halstead.operands.total;

      /* istanbul ignore if */
      if (halstead.length === 0)
      {
         halstead.reset();
      }
      else
      {
         halstead.vocabulary = halstead.operators.distinct + halstead.operands.distinct;
         halstead.difficulty = (halstead.operators.distinct / 2)
          * (halstead.operands.distinct === 0 ? 1 : halstead.operands.total / halstead.operands.distinct);
         halstead.volume = halstead.length * (Math.log(halstead.vocabulary) / Math.log(2));
         halstead.effort = halstead.difficulty * halstead.volume;
         halstead.bugs = halstead.volume / 3000;
         halstead.time = halstead.effort / 18;
      }
   }

   /**
    * Designed in 1991 by Paul Oman and Jack Hagemeister at the University of Idaho, this metric is calculated at the
    * whole program or module level from averages of the other 3 metrics, using the following formula:
    * ```
    * 171 -
    * (3.42 * ln(mean effort)) -
    * (0.23 * ln(mean cyclomatic complexity)) -
    * (16.2 * ln(mean logical LOC))
    * ```
    * Values are on a logarithmic scale ranging from negative infinity up to 171, with greater numbers indicating a
    * higher level of maintainability. In their original paper, Oman and Hagemeister identified 65 as the threshold
    * value below which a program should be considered difficult to maintain.
    *
    * @param {ClassReport|ModuleReport}   report - A ClassReport or ModuleReport to perform calculations on.
    * @param {number}               averageCyclomatic - Average cyclomatic metric across a ClassReport / ModuleReport.
    * @param {number}               averageEffort - Average Halstead effort across a ClassReport / ModuleReport.
    * @param {number}               averageLoc - Average SLOC metric across a ClassReport / ModuleReport.
    *
    * @private
    */
   _calculateMaintainabilityIndex(report, averageCyclomatic, averageEffort, averageLoc)
   {
      /* istanbul ignore if */
      if (averageCyclomatic === 0) { throw new Error('Encountered function with cyclomatic complexity zero!'); }

      report.maintainability =
       171
       - (3.42 * Math.log(averageEffort))
       - (0.23 * Math.log(averageCyclomatic))
       - (16.2 * Math.log(averageLoc));

      /* istanbul ignore if */
      if (report.maintainability > 171) { report.maintainability = 171; }

      /* istanbul ignore if */
      if (this.settings.newmi) { report.maintainability = Math.max(0, (report.maintainability * 100) / 171); }
   }

   /**
    * Coordinates calculating all metrics. All module and class methods are traversed. If there are no module or class
    * methods respectively the aggregate MethodReport is used for calculations.
    *
    * @param {ModuleReport}   report - The ModuleReport being processed.
    *
    * @private
    */
   _calculateMetrics(report)
   {
      let moduleMethodCount = report.methods.length;
      const moduleMethodAverages = report.methodAverage;
      const moduleMethodAverageKeys = ObjectUtil.getAccessorList(moduleMethodAverages);

      // Handle module methods.
      report.methods.forEach((methodReport) =>
      {
         moduleMethodAverageKeys.forEach((averageKey) =>
         {
            this._calculateCyclomaticDensity(methodReport);
            this._calculateHalsteadMetrics(methodReport.halstead);

            const targetValue = ObjectUtil.safeAccess(methodReport, averageKey, 0);
            ObjectUtil.safeSet(moduleMethodAverages, averageKey, targetValue, 'add');
         });
      });

      // Handle module class reports.
      report.classes.forEach((classReport) =>
      {
         const classMethodAverages = classReport.methodAverage;

         let classMethodCount = classReport.methods.length;
         moduleMethodCount += classMethodCount;

         // Process all class methods.
         classReport.methods.forEach((methodReport) =>
         {
            this._calculateCyclomaticDensity(methodReport);
            this._calculateHalsteadMetrics(methodReport.halstead);

            moduleMethodAverageKeys.forEach((averageKey) =>
            {
               const targetValue = ObjectUtil.safeAccess(methodReport, averageKey, 0);

               ObjectUtil.safeSet(moduleMethodAverages, averageKey, targetValue, 'add');
               ObjectUtil.safeSet(classMethodAverages, averageKey, targetValue, 'add');
            });
         });

         this._calculateCyclomaticDensity(classReport.aggregateMethodReport);
         this._calculateHalsteadMetrics(classReport.aggregateMethodReport.halstead);

         // If there are no class methods use the class aggregate MethodReport.
         if (classMethodCount === 0)
         {
            // Sane handling of classes that contain no methods.
            moduleMethodAverageKeys.forEach((averageKey) =>
            {
               const targetValue = ObjectUtil.safeAccess(classReport.aggregateMethodReport, averageKey, 0);

               ObjectUtil.safeSet(classMethodAverages, averageKey, targetValue, 'add');
            });

            classMethodCount = 1;
         }

         moduleMethodAverageKeys.forEach((averageKey) =>
         {
            ObjectUtil.safeSet(classMethodAverages, averageKey, classMethodCount, 'div');
         });

         this._calculateMaintainabilityIndex(classReport, classMethodAverages.cyclomatic,
          classMethodAverages.halstead.effort, classMethodAverages.sloc.logical);
      });

      this._calculateCyclomaticDensity(report.aggregateMethodReport);
      this._calculateHalsteadMetrics(report.aggregateMethodReport.halstead);

      // If there are no module methods use the module aggregate MethodReport.
      if (moduleMethodCount === 0)
      {
         // Sane handling of classes that contain no methods.
         moduleMethodAverageKeys.forEach((averageKey) =>
         {
            const targetValue = ObjectUtil.safeAccess(report.aggregateMethodReport, averageKey, 0);

            ObjectUtil.safeSet(moduleMethodAverages, averageKey, targetValue, 'add');
         });

         // Sane handling of modules that contain no methods.
         moduleMethodCount = 1;
      }

      moduleMethodAverageKeys.forEach((averageKey) =>
      {
         ObjectUtil.safeSet(moduleMethodAverages, averageKey, moduleMethodCount, 'div');
      });

      this._calculateMaintainabilityIndex(report, moduleMethodAverages.cyclomatic,
       moduleMethodAverages.halstead.effort, moduleMethodAverages.sloc.logical);
   }
}
