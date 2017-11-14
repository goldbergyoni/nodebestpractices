import path             from 'path';

import ESComplexModule  from 'typhonjs-escomplex-module/src/ESComplexModule';
import ESComplexProject from 'typhonjs-escomplex-project/src/ESComplexProject';

import Parser           from './Parser';

/**
 * Next generation code complexity reporting for Javascript abstract syntax trees (AST). ESComplex exposes all methods
 * available via ESComplexModule & ESComplexProject modules which process AST. Several methods available below accept
 * source code which is translated via Babylon w/ all plugins enabled allowing any ES6/ES7/edge JS to be parsed.
 * Asynchronous versions with the `Async` suffix of all methods are available as well.
 *
 * @see https://www.npmjs.com/package/typhonjs-escomplex-module
 * @see https://www.npmjs.com/package/typhonjs-escomplex-project
 * @see https://www.npmjs.com/package/babylon
 */
export default class ESComplex
{
   /**
    * Initializes ESComplex.
    *
    * @param {object}   options - module and project options including user plugins to load including:
    * ```
    * (object)             module - Provides an object hash of the following options for the module runtime:
    *    (boolean)         loadDefaultPlugins - When false ESComplexProject will not load any default plugins.
    *    (Array<Object>)   plugins - A list of ESComplexModule plugins that have already been instantiated.
    *
    * (object)             project - Provides an object hash of the following options for the project runtime:
    *    (boolean)         loadDefaultPlugins - When false ESComplexProject will not load any default plugins.
    *    (Array<Object>)   plugins - A list of ESComplexProject plugins that have already been instantiated.
    * ```
    */
   constructor(options = {})
   {
      /* istanbul ignore if */
      if (typeof options !== 'object') { throw new TypeError(`ctor error: 'options' is not an 'object'.`); }

      /**
       * An instance of ESComplexModule.
       * @type {ESComplexModule}
       * @private
       */
      this._escomplexModule = new ESComplexModule(options.module);

      /**
       * An instance of ESComplexProject.
       * @type {ESComplexProject}
       * @private
       */
      this._escomplexProject = new ESComplexProject(path, options);
   }

   /**
    * Parses the given source code then processes the generated AST and calculates metrics via plugins.
    *
    * @param {string}   source - Javascript source code.
    * @param {object}   options - (Optional) module analyze options.
    * @param {object}   parserOptions - (Optional) overrides default babylon parser options.
    *
    * @returns {object} - A single module report.
    */
   analyzeModule(source, options = {}, parserOptions = undefined)
   {
      /* istanbul ignore if */
      if (typeof source !== 'string') { throw new TypeError(`analyze error: 'source' is not a 'string'.`); }

      return this._escomplexModule.analyze(Parser.parse(source, parserOptions), options);
   }

   /**
    * Processes the given ast and calculates metrics via plugins.
    *
    * @param {object|Array}   ast - Javascript AST.
    * @param {object}         options - (Optional) module analyze options.
    *
    * @returns {object} - A single module report.
    */
   analyzeModuleAST(ast, options = {})
   {
      return this._escomplexModule.analyze(ast, options);
   }

   /**
    * Processes the given sources and calculates project metrics via plugins.
    *
    * @param {Array<object>}  sources - Array of object hashes containing `code` and `srcPath` entries with optional
    *                                   entries include `filePath` and `srcPathAlias`.
    *
    * @param {object}         options - (Optional) project processing options.
    *
    * @param {object}         parserOptions - (Optional) overrides default babylon parser options.
    *
    * @returns {{reports: Array<{}>}} - An object hash with a `reports` entry that is an Array of module results.
    */
   analyzeProject(sources, options = {}, parserOptions = undefined)
   {
      // Parse sources and map entries to include `ast` entry from `code`.
      const modules = sources.map((source) =>
      {
         try
         {
            return {
               ast: Parser.parse(source.code, parserOptions),
               filePath: source.filePath,
               srcPath: source.srcPath,
               srcPathAlias: source.srcPathAlias
            };
         }
         catch (error)
         {
            /* istanbul ignore if */
            if (options.ignoreErrors) { return null; }

            /* istanbul ignore next */
            error.message = `${source.path}: ${error.message}`;

            /* istanbul ignore next */
            throw error;
         }
      })
      .filter((source) => !!source);

      return this._escomplexProject.analyze(modules, options);
   }

   /**
    * Processes the given modules and calculates project metrics via plugins.
    *
    * @param {Array<object>}  modules - Array of object hashes containing `ast` and `srcPath` entries with optional
    *                                   entries include `filePath` and `srcPathAlias`.
    *
    * @param {object}         options - (Optional) project processing options.
    *
    * @returns {{reports: Array<{}>}} - An object hash with a `reports` entry that is an Array of module results.
    */
   analyzeProjectAST(modules, options = {})
   {
      return this._escomplexProject.analyze(modules, options);
   }

   /**
    * Provides a convenience method to parse the given source code and return the babylon AST.
    *
    * @param {string}   source - Javascript source code.
    * @param {object}   parserOptions - (Optional) overrides default babylon parser options.
    *
    * @returns {object} - babylon generated AST.
    */
   parse(source, parserOptions = undefined)
   {
      return Parser.parse(source, parserOptions);
   }

   /**
    * Processes existing project results and calculates metrics via plugins.
    *
    * @param {object}   results - An object hash with a `reports` entry that is an Array of module results.
    * @param {object}   options - (Optional) project processing options.
    *
    * @returns {{reports: Array<{}>}} - An object hash with a `reports` entry that is an Array of module results.
    */
   processProject(results, options = {})
   {
      return this._escomplexProject.process(results, options);
   }

   // Asynchronous Promise based methods ----------------------------------------------------------------------------

   /**
    * Wraps in a Promise parsing of the given source code then processes the generated AST and calculates metrics via
    * plugins.
    *
    * @param {string}   source - Javascript source code.
    * @param {object}   options - (Optional) module analyze options.
    * @param {object}   parserOptions - (Optional) overrides default babylon parser options.
    *
    * @returns {object} - A single module report.
    */
   analyzeModuleAsync(source, options = {}, parserOptions = undefined)
   {
      return new Promise((resolve, reject) =>
      {
         try { resolve(this.analyzeModule(source, options, parserOptions)); }
         catch (err) { /* istanbul ignore next */ reject(err); }
      });
   }

   /**
    * Wraps in a Promise processing the given ast and calculates metrics via plugins.
    *
    * @param {object|Array}   ast - Javascript AST.
    * @param {object}         options - (Optional) module analyze options.
    *
    * @returns {Promise<object>} - A single module report.
    */
   analyzeModuleASTAsync(ast, options = {})
   {
      return new Promise((resolve, reject) =>
      {
         try { resolve(this.analyzeModuleAST(ast, options)); }
         catch (err) { /* istanbul ignore next */ reject(err); }
      });
   }

   /**
    * Wraps in a Promise processing the given sources and calculates project metrics via plugins.
    *
    * @param {Array<object>}  sources - Array of object hashes containing `code` and `path` entries.
    * @param {object}         options - (Optional) project processing options.
    * @param {object}         parserOptions - (Optional) overrides default babylon parser options.
    *
    * @returns {Promise<{reports: Array<{}>}>} - An object hash with a `reports` entry that is an Array of module
    *                                            results.
    */
   analyzeProjectAsync(sources, options = {}, parserOptions = undefined)
   {
      return new Promise((resolve, reject) =>
      {
         try { resolve(this.analyzeProject(sources, options, parserOptions)); }
         catch (err) { /* istanbul ignore next */ reject(err); }
      });
   }

   /**
    * Wraps in a Promise processing the given modules and calculates project metrics via plugins.
    *
    * @param {Array}    modules - Array of object hashes containing `ast` and `path` entries.
    * @param {object}   options - (Optional) project processing options.
    *
    * @returns {Promise<{reports: Array<{}>}>} - An object hash with a `reports` entry that is an Array of module
    *                                            results.
    */
   analyzeProjectASTAsync(modules, options = {})
   {
      return new Promise((resolve, reject) =>
      {
         try { resolve(this.analyzeProjectAST(modules, options)); }
         catch (err) { /* istanbul ignore next */ reject(err); }
      });
   }

   /**
    * Wraps in a Promise a convenience method to parse the given source code and return the babylon AST.
    *
    * @param {string}   source - Javascript source code.
    * @param {object}   parserOptions - (Optional) overrides default babylon parser options.
    *
    * @returns {Promise<object>} - babylon generated AST.
    */
   parseAsync(source, parserOptions = undefined)
   {
      return new Promise((resolve, reject) =>
      {
         try { resolve(this.parse(source, parserOptions)); }
         catch (err) { /* istanbul ignore next */ reject(err); }
      });
   }

   /**
    * Wraps in a Promise processing existing project results and calculates metrics via plugins.
    *
    * @param {object}   results - An object hash with a `reports` entry that is an Array of module results.
    * @param {object}   options - (Optional) project processing options.
    *
    * @returns {Promise<{reports: Array<{}>}>} - An object hash with a `reports` entry that is an Array of module
    *                                            results.
    */
   processProjectAsync(results, options = {})
   {
      return new Promise((resolve, reject) =>
      {
         try { resolve(this.processProject(results, options)); }
         catch (err) { /* istanbul ignore next */ reject(err); }
      });
   }
}
