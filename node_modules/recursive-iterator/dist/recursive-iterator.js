/*
 recursive-iterator v2.0.1
 https://github.com/nervgh/recursive-iterator
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["RecursiveIterator"] = factory();
	else
		root["RecursiveIterator"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	
	var _toConsumableArray = function (arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } };
	
	var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var _lang = __webpack_require__(1);
	
	var isObject = _lang.isObject;
	var getKeys = _lang.getKeys;
	
	
	
	// PRIVATE PROPERTIES
	var BYPASS_MODE = "__bypassMode";
	var IGNORE_CIRCULAR = "__ignoreCircular";
	var MAX_DEEP = "__maxDeep";
	var CACHE = "__cache";
	var QUEUE = "__queue";
	var STATE = "__state";
	
	
	var EMPTY_STATE = {};
	
	
	var RecursiveIterator = (function () {
	    /**
	     * @param {Object|Array} root
	     * @param {Number} [bypassMode=0]
	     * @param {Boolean} [ignoreCircular=false]
	     * @param {Number} [maxDeep=100]
	     */
	    function RecursiveIterator(root) {
	        var bypassMode = arguments[1] === undefined ? 0 : arguments[1];
	        var ignoreCircular = arguments[2] === undefined ? false : arguments[2];
	        var maxDeep = arguments[3] === undefined ? 100 : arguments[3];
	        _classCallCheck(this, RecursiveIterator);
	
	        this[BYPASS_MODE] = bypassMode;
	        this[IGNORE_CIRCULAR] = ignoreCircular;
	        this[MAX_DEEP] = maxDeep;
	        this[CACHE] = [];
	        this[QUEUE] = [];
	        this[STATE] = this.getState(undefined, root);
	        this.__makeIterable();
	    }
	
	    _prototypeProperties(RecursiveIterator, null, {
	        next: {
	            /**
	             * @returns {Object}
	             */
	            value: function next() {
	                var _ref = this[STATE] || EMPTY_STATE;
	                var node = _ref.node;
	                var path = _ref.path;
	                var deep = _ref.deep;
	
	
	                if (this[MAX_DEEP] > deep) {
	                    if (this.isNode(node)) {
	                        if (this.isCircular(node)) {
	                            if (this[IGNORE_CIRCULAR]) {} else {
	                                throw new Error("Circular reference");
	                            }
	                        } else {
	                            if (this.onStepInto(this[STATE])) {
	                                var _QUEUE;
	                                var descriptors = this.getStatesOfChildNodes(node, path, deep);
	                                var method = this[BYPASS_MODE] ? "push" : "unshift";
	                                (_QUEUE = this[QUEUE])[method].apply(_QUEUE, _toConsumableArray(descriptors));
	                                this[CACHE].push(node);
	                            }
	                        }
	                    }
	                }
	
	                var value = this[QUEUE].shift();
	                var done = !value;
	
	                this[STATE] = value;
	
	                if (done) this.destroy();
	
	                return { value: value, done: done };
	            },
	            writable: true,
	            configurable: true
	        },
	        destroy: {
	            /**
	             *
	             */
	            value: function destroy() {
	                this[QUEUE].length = 0;
	                this[CACHE].length = 0;
	                this[STATE] = null;
	            },
	            writable: true,
	            configurable: true
	        },
	        isNode: {
	            /**
	             * @param {*} any
	             * @returns {Boolean}
	             */
	            value: function isNode(any) {
	                return isObject(any);
	            },
	            writable: true,
	            configurable: true
	        },
	        isLeaf: {
	            /**
	             * @param {*} any
	             * @returns {Boolean}
	             */
	            value: function isLeaf(any) {
	                return !this.isNode(any);
	            },
	            writable: true,
	            configurable: true
	        },
	        isCircular: {
	            /**
	             * @param {*} any
	             * @returns {Boolean}
	             */
	            value: function isCircular(any) {
	                return this[CACHE].indexOf(any) !== -1;
	            },
	            writable: true,
	            configurable: true
	        },
	        getStatesOfChildNodes: {
	            /**
	             * Returns states of child nodes
	             * @param {Object} node
	             * @param {Array} path
	             * @param {Number} deep
	             * @returns {Array<Object>}
	             */
	            value: function getStatesOfChildNodes(node, path, deep) {
	                var _this = this;
	                return getKeys(node).map(function (key) {
	                    return _this.getState(node, node[key], key, path.concat(key), deep + 1);
	                });
	            },
	            writable: true,
	            configurable: true
	        },
	        getState: {
	            /**
	             * Returns state of node. Calls for each node
	             * @param {Object} [parent]
	             * @param {*} [node]
	             * @param {String} [key]
	             * @param {Array} [path]
	             * @param {Number} [deep]
	             * @returns {Object}
	             */
	            value: function getState(parent, node, key) {
	                var path = arguments[3] === undefined ? [] : arguments[3];
	                var deep = arguments[4] === undefined ? 0 : arguments[4];
	                return { parent: parent, node: node, key: key, path: path, deep: deep };
	            },
	            writable: true,
	            configurable: true
	        },
	        onStepInto: {
	            /**
	             * Callback
	             * @param {Object} state
	             * @returns {Boolean}
	             */
	            value: function onStepInto(state) {
	                return true;
	            },
	            writable: true,
	            configurable: true
	        },
	        __makeIterable: {
	            /**
	             * Only for es6
	             * @private
	             */
	            value: function __makeIterable() {
	                var _this = this;
	                try {
	                    this[Symbol.iterator] = function () {
	                        return _this;
	                    };
	                } catch (e) {}
	            },
	            writable: true,
	            configurable: true
	        }
	    });
	
	    return RecursiveIterator;
	})();
	
	module.exports = RecursiveIterator;
	// skip

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * @param {*} any
	 * @returns {Boolean}
	 */
	exports.isObject = isObject;
	/**
	 * @param {*} any
	 * @returns {Boolean}
	 */
	exports.isArrayLike = isArrayLike;
	/**
	 * @param {*} any
	 * @returns {Boolean}
	 */
	exports.isNumber = isNumber;
	/**
	 * @param {Object|Array} object
	 * @returns {Array<String>}
	 */
	exports.getKeys = getKeys;
	function isObject(any) {
	  return any !== null && typeof any === "object";
	}
	/**
	 * @param {*} any
	 * @returns {Boolean}
	 */
	var isArray = exports.isArray = Array.isArray;
	function isArrayLike(any) {
	  if (!isObject(any)) {
	    return false;
	  }if (!("length" in any)) {
	    return false;
	  }var length = any.length;
	  if (!isNumber(length)) {
	    return false;
	  }if (length > 0) {
	    return length - 1 in any;
	  } else {
	    for (var key in any) {
	      return false;
	    }
	  }
	}function isNumber(any) {
	  return typeof any === "number";
	}function getKeys(object) {
	  var keys_ = Object.keys(object);
	  if (isArray(object)) {} else if (isArrayLike(object)) {
	    var index = keys_.indexOf("length");
	    if (index > -1) {
	      keys_.splice(index, 1);
	    }
	    // skip sort
	  } else {
	    // sort
	    keys_ = keys_.sort();
	  }
	  return keys_;
	}
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	// skip sort

/***/ }
/******/ ])
});
;
//# sourceMappingURL=recursive-iterator.js.map