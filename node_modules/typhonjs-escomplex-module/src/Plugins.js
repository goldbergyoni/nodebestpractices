import PluginMetricsModule from 'escomplex-plugin-metrics-module/src/PluginMetricsModule';
import PluginSyntaxBabylon from 'escomplex-plugin-syntax-babylon/src/PluginSyntaxBabylon';

import ModuleReport        from 'typhonjs-escomplex-commons/src/module/report/ModuleReport';

import PluginManager       from 'typhonjs-plugin-manager/src/PluginManager';

/**
 * Provides a wrapper around PluginManager for ESComplexModule. Several convenience methods for the plugin callbacks
 * properly manage and or create initial data that are processed by the plugins.
 *
 * The default plugins loaded include:
 * @see https://www.npmjs.com/package/escomplex-plugin-metrics-module
 * @see https://www.npmjs.com/package/escomplex-plugin-syntax-babylon
 */
export default class Plugins
{
   /**
    * Initializes Plugins.
    *
    * @param {object}   options - module options including user plugins to load including:
    * ```
    * (boolean)         loadDefaultPlugins - When false ESComplexModule will not load any default plugins.
    * (Array<Object>)   plugins - A list of ESComplexModule plugins that have already been instantiated.
    * ```
    */
   constructor(options = {})
   {
      /**
       * Provides a generic plugin manager for dispatching events to module plugins.
       * @type {PluginManager}
       * @private
       */
      this._pluginManager = new PluginManager();

      if (typeof options.loadDefaultPlugins === 'boolean' && !options.loadDefaultPlugins) { /* nop */ }
      else
      {
         this._pluginManager.addPlugin(new PluginSyntaxBabylon());
         this._pluginManager.addPlugin(new PluginMetricsModule());
      }
   }

   /**
    * Initializes the default `settings` object hash and then invokes the `onConfigure` plugin callback for all loaded
    * plugins.
    *
    * @param {object}   options - (Optional) module processing options.
    *
    * @returns {object}
    */
   onConfigure(options)
   {
      const settings = {};
      const event = this._pluginManager.invoke('onConfigure', { options, settings }, true);
      return event !== null ? event.data.settings : settings;
   }

   /**
    * Invokes the `onEnterNode` plugin callback during AST traversal when a node is entered.
    *
    * @param {ModuleReport}   report - The ModuleReport being processed.
    * @param {object}         node - The node being entered.
    * @param {object}         parent - The parent node of the node being entered.
    *
    * @returns {Array<string>|null} - A directive indicating children keys to be skipped or if null all keys entirely.
    */
   onEnterNode(report, node, parent)
   {
      const event = this._pluginManager.invoke('onEnterNode', { report, node, parent }, false);
      return event !== null ? event.data.ignoreKeys : [];
   }

   /**
    * Invokes the `onExitNode` plugin callback during AST traversal when a node is exited.
    *
    * @param {ModuleReport}   report - The ModuleReport being processed.
    * @param {object}         node - The node being entered.
    * @param {object}         parent - The parent node of the node being entered.
    */
   onExitNode(report, node, parent)
   {
      this._pluginManager.invoke('onExitNode', { report, node, parent }, false);
   }

   /**
    * Initializes the trait `syntaxes` object hash and then invokes the `onLoadSyntax` plugin callback for all loaded
    * plugins.
    *
    * @param {object}   settings - Settings for module processing.
    *
    * @returns {object} - Loaded trait `syntaxes` for AST nodes.
    */
   onLoadSyntax(settings)
   {
      const syntaxes = {};
      const event = this._pluginManager.invoke('onLoadSyntax', { settings, syntaxes }, true);
      return event !== null ? event.data.syntaxes : syntaxes;
   }

   /**
    * Initializes the default `report` object hash and then invokes the `onModuleStart` plugin callback for all loaded
    * plugins.
    *
    * @param {object}   ast - Settings for module processing.
    * @param {object}   syntaxes - All loaded trait syntaxes for AST nodes.
    * @param {object}   settings - Settings for module processing.
    *
    * @returns {ModuleReport} - The ModuleReport being processed.
    */
   onModuleStart(ast, syntaxes, settings)
   {
      const report = new ModuleReport(ast.loc.start.line, ast.loc.end.line, settings);
      this._pluginManager.invoke('onModuleStart', { ast, report, syntaxes, settings }, false);
      return report;
   }

   /**
    * Invokes the `onModuleEnd` plugin callback for all loaded plugins such they might finish calculating results.
    *
    * @param {ModuleReport}   report - The ModuleReport being processed.
    *
    * @returns {ModuleReport} - The ModuleReport being processed.
    */
   onModuleEnd(report)
   {
      this._pluginManager.invoke('onModuleEnd', { report }, false);
      return report;
   }
}
