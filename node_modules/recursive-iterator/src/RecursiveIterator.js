'use strict';


import {isObject,getKeys} from './lang';


// PRIVATE PROPERTIES
const BYPASS_MODE = '__bypassMode';
const IGNORE_CIRCULAR = '__ignoreCircular';
const MAX_DEEP = '__maxDeep';
const CACHE = '__cache';
const QUEUE = '__queue';
const STATE = '__state';


const EMPTY_STATE = {};


export default class RecursiveIterator {
    /**
     * @param {Object|Array} root
     * @param {Number} [bypassMode=0]
     * @param {Boolean} [ignoreCircular=false]
     * @param {Number} [maxDeep=100]
     */
    constructor(root, bypassMode = 0, ignoreCircular = false, maxDeep = 100) {
        this[BYPASS_MODE] = bypassMode;
        this[IGNORE_CIRCULAR] = ignoreCircular;
        this[MAX_DEEP] = maxDeep;
        this[CACHE] = [];
        this[QUEUE] = [];
        this[STATE] = this.getState(undefined, root);
        this.__makeIterable();
    }
    /**
     * @returns {Object}
     */
    next() {
        var {node, path, deep} = this[STATE] || EMPTY_STATE;

        if (this[MAX_DEEP] > deep) {
            if (this.isNode(node)) {
                if (this.isCircular(node)) {
                    if (this[IGNORE_CIRCULAR]) {
                        // skip
                    } else {
                        throw new Error('Circular reference');
                    }
                } else {
                    if (this.onStepInto(this[STATE])) {
                        let descriptors = this.getStatesOfChildNodes(node, path, deep);
                        let method = this[BYPASS_MODE] ? 'push' : 'unshift';
                        this[QUEUE][method](...descriptors);
                        this[CACHE].push(node);
                    }
                }
            }
        }

        var value = this[QUEUE].shift();
        var done = !value;

        this[STATE] = value;

        if (done) this.destroy();

        return {value, done};
    }
    /**
     *
     */
    destroy() {
        this[QUEUE].length = 0;
        this[CACHE].length = 0;
        this[STATE] = null;
    }
    /**
     * @param {*} any
     * @returns {Boolean}
     */
    isNode(any) {
        return isObject(any);
    }
    /**
     * @param {*} any
     * @returns {Boolean}
     */
    isLeaf(any) {
        return !this.isNode(any);
    }
    /**
     * @param {*} any
     * @returns {Boolean}
     */
    isCircular(any) {
        return this[CACHE].indexOf(any) !== -1
    }
    /**
     * Returns states of child nodes
     * @param {Object} node
     * @param {Array} path
     * @param {Number} deep
     * @returns {Array<Object>}
     */
    getStatesOfChildNodes(node, path, deep) {
        return getKeys(node).map(key =>
            this.getState(node, node[key], key, path.concat(key), deep + 1)
        );
    }
    /**
     * Returns state of node. Calls for each node
     * @param {Object} [parent]
     * @param {*} [node]
     * @param {String} [key]
     * @param {Array} [path]
     * @param {Number} [deep]
     * @returns {Object}
     */
    getState(parent, node, key, path = [], deep = 0) {
        return {parent, node, key, path, deep};
    }
    /**
     * Callback
     * @param {Object} state
     * @returns {Boolean}
     */
    onStepInto(state) {
        return true;
    }
    /**
     * Only for es6
     * @private
     */
    __makeIterable() {
        try {
            this[Symbol.iterator] = () => this;
        } catch(e) {}
    }
}
