/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = {
    //--------------------------------------------------------------------------
    // Syntax
    //--------------------------------------------------------------------------

    "defaultParameters": {
        alias: ["syntax"],
        name: "Default parameters",
        node: "6.0.0",
    },
    "restParameters": {
        alias: ["syntax"],
        name: "Rest parameters",
        node: "6.0.0",
    },
    "spreadOperators": {
        alias: ["syntax"],
        name: "Spread operators",
        node: "5.0.0",
    },
    "objectLiteralExtensions": {
        alias: ["syntax"],
        name: "Object literal extensions",
        node: "4.0.0",
    },
    "objectPropertyShorthandOfGetSet": {
        alias: ["syntax", "objectLiteralExtensions"],
        name: "Property shorthand of 'get' and 'set'",
        node: "6.0.0",
    },
    "forOf": {
        alias: ["syntax"],
        name: "'for..of' loops",
        node: "0.12.0",
    },
    "binaryNumberLiterals": {
        alias: ["syntax"],
        name: "Binary number literals",
        node: "4.0.0",
    },
    "octalNumberLiterals": {
        alias: ["syntax"],
        name: "Octal number literals",
        node: "4.0.0",
    },
    "templateStrings": {
        alias: ["syntax"],
        name: "Template strings",
        node: "4.0.0",
    },
    "regexpY": {
        alias: ["syntax"],
        name: "RegExp 'y' flags",
        node: "6.0.0",
    },
    "regexpU": {
        alias: ["syntax"],
        name: "RegExp 'u' flags",
        node: "6.0.0",
    },
    "destructuring": {
        alias: ["syntax"],
        name: "Destructuring",
        node: "6.0.0",
    },
    "unicodeCodePointEscapes": {
        alias: ["syntax"],
        name: "Unicode code point escapes",
        node: "4.0.0",
    },
    "new.target": {
        alias: ["syntax"],
        name: "'new.target'",
        node: "5.0.0",
    },
    "const": {
        alias: ["syntax"],
        name: "'const' declarations",
        node: {
            sloppy: "6.0.0",
            strict: "4.0.0",
        },
    },
    "let": {
        alias: ["syntax"],
        name: "'let' declarations",
        node: {
            sloppy: "6.0.0",
            strict: "4.0.0",
        },
    },
    "blockScopedFunctions": {
        alias: ["syntax"],
        name: "Block-scoped functions",
        node: {
            sloppy: "6.0.0",
            strict: "4.0.0",
        },
    },
    "arrowFunctions": {
        alias: ["syntax"],
        name: "Arrow functions",
        node: "4.0.0",
    },
    "generatorFunctions": {
        alias: ["syntax"],
        name: "Generator functions",
        node: "4.0.0",
    },
    "classes": {
        alias: ["syntax"],
        name: "Classes",
        node: {
            sloppy: "6.0.0",
            strict: "4.0.0",
        },
    },
    "modules": {
        alias: ["syntax"],
        name: "Import and export declarations",
        node: null,
    },
    "exponentialOperators": {
        alias: ["syntax"],
        name: "Exponential operators (**)",
        node: "7.0.0",
    },
    "asyncAwait": {
        alias: ["syntax"],
        name: "Async functions",
        node: "7.6.0",
    },
    "trailingCommasInFunctions": {
        // trailingCommasInFunctionSyntax is for backward compatibility.
        alias: ["syntax", "trailingCommasInFunctionSyntax"],
        name: "Trailing commas in functions",
        node: "8.0.0",
    },

    //--------------------------------------------------------------------------
    // Runtime
    //--------------------------------------------------------------------------

    "Int8Array": {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Int8Array'",
        singular: true,
        node: "0.12.0",
    },
    "Uint8Array": {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Uint8Array'",
        singular: true,
        node: "0.12.0",
    },
    "Uint8ClampedArray": {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Uint8ClampedArray'",
        singular: true,
        node: "0.12.0",
    },
    "Int16Array": {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Int16Array'",
        singular: true,
        node: "0.12.0",
    },
    "Uint16Array": {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Uint16Array'",
        singular: true,
        node: "0.12.0",
    },
    "Int32Array": {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Int32Array'",
        singular: true,
        node: "0.12.0",
    },
    "Uint32Array": {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Uint32Array'",
        singular: true,
        node: "0.12.0",
    },
    "Float32Array": {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Float32Array'",
        singular: true,
        node: "0.12.0",
    },
    "Float64Array": {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Float64Array'",
        singular: true,
        node: "0.12.0",
    },
    "DataView": {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'DataView'",
        singular: true,
        node: "0.12.0",
    },
    "Map": {
        alias: ["runtime", "globalObjects"],
        name: "'Map'",
        singular: true,
        node: "0.12.0",
    },
    "Set": {
        alias: ["runtime", "globalObjects"],
        name: "'Set'",
        singular: true,
        node: "0.12.0",
    },
    "WeakMap": {
        alias: ["runtime", "globalObjects"],
        name: "'WeakMap'",
        singular: true,
        node: "0.12.0",
    },
    "WeakSet": {
        alias: ["runtime", "globalObjects"],
        name: "'WeakSet'",
        singular: true,
        node: "0.12.0",
    },
    "Proxy": {
        alias: ["runtime", "globalObjects"],
        name: "'Proxy'",
        singular: true,
        node: "6.0.0",
    },
    "Reflect": {
        alias: ["runtime", "globalObjects"],
        name: "'Reflect'",
        singular: true,
        node: "6.0.0",
    },
    "Promise": {
        alias: ["runtime", "globalObjects"],
        name: "'Promise'",
        singular: true,
        node: "0.12.0",
    },
    "Symbol": {
        alias: ["runtime", "globalObjects"],
        name: "'Symbol'",
        singular: true,
        node: "0.12.0",
    },
    "SharedArrayBuffer": {
        alias: ["runtime", "globalObjects"],
        name: "'SharedArrayBuffer'",
        singular: true,
        node: null,
    },
    "Atomics": {
        alias: ["runtime", "globalObjects"],
        name: "'Atomics'",
        singular: true,
        node: null,
    },

    "Object.assign": {
        alias: ["runtime", "staticMethods", "Object.*"],
        name: "'Object.assign'",
        singular: true,
        node: "4.0.0",
    },
    "Object.is": {
        alias: ["runtime", "staticMethods", "Object.*"],
        name: "'Object.is'",
        singular: true,
        node: "0.12.0",
    },
    "Object.getOwnPropertySymbols": {
        alias: ["runtime", "staticMethods", "Object.*"],
        name: "'Object.getOwnPropertySymbols'",
        singular: true,
        node: "0.12.0",
    },
    "Object.setPrototypeOf": {
        alias: ["runtime", "staticMethods", "Object.*"],
        name: "'Object.setPrototypeOf'",
        singular: true,
        node: "0.12.0",
    },
    "Object.values": {
        alias: ["runtime", "staticMethods", "Object.*"],
        name: "'Object.values'",
        singular: true,
        node: "7.0.0",
    },
    "Object.entries": {
        alias: ["runtime", "staticMethods", "Object.*"],
        name: "'Object.entries'",
        singular: true,
        node: "7.0.0",
    },
    "Object.getOwnPropertyDescriptors": {
        alias: ["runtime", "staticMethods", "Object.*"],
        name: "'Object.getOwnPropertyDescriptors'",
        singular: true,
        node: "7.0.0",
    },

    "String.raw": {
        alias: ["runtime", "staticMethods", "String.*"],
        name: "'String.raw'",
        singular: true,
        node: "4.0.0",
    },
    "String.fromCodePoint": {
        alias: ["runtime", "staticMethods", "String.*"],
        name: "'String.fromCodePoint'",
        singular: true,
        node: "4.0.0",
    },

    "Array.from": {
        alias: ["runtime", "staticMethods", "Array.*"],
        name: "'Array.from'",
        singular: true,
        node: "4.0.0",
    },
    "Array.of": {
        alias: ["runtime", "staticMethods", "Array.*"],
        name: "'Array.of'",
        singular: true,
        node: "4.0.0",
    },

    "Number.isFinite": {
        alias: ["runtime", "staticMethods", "Number.*"],
        name: "'Number.isFinite'",
        singular: true,
        node: "0.10.0",
    },
    "Number.isInteger": {
        alias: ["runtime", "staticMethods", "Number.*"],
        name: "'Number.isInteger'",
        singular: true,
        node: "0.12.0",
    },
    "Number.isSafeInteger": {
        alias: ["runtime", "staticMethods", "Number.*"],
        name: "'Number.isSafeInteger'",
        singular: true,
        node: "0.12.0",
    },
    "Number.isNaN": {
        alias: ["runtime", "staticMethods", "Number.*"],
        name: "'Number.isNaN'",
        singular: true,
        node: "0.10.0",
    },
    "Number.EPSILON": {
        alias: ["runtime", "staticMethods", "Number.*"],
        name: "'Number.EPSILON'",
        singular: true,
        node: "0.12.0",
    },
    "Number.MIN_SAFE_INTEGER": {
        alias: ["runtime", "staticMethods", "Number.*"],
        name: "'Number.MIN_SAFE_INTEGER'",
        singular: true,
        node: "0.12.0",
    },
    "Number.MAX_SAFE_INTEGER": {
        alias: ["runtime", "staticMethods", "Number.*"],
        name: "'Number.MAX_SAFE_INTEGER'",
        singular: true,
        node: "0.12.0",
    },

    "Math.clz32": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.clz32'",
        singular: true,
        node: "0.12.0",
    },
    "Math.imul": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.imul'",
        singular: true,
        node: "0.12.0",
    },
    "Math.sign": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.sign'",
        singular: true,
        node: "0.12.0",
    },
    "Math.log10": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.log10'",
        singular: true,
        node: "0.12.0",
    },
    "Math.log2": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.log2'",
        singular: true,
        node: "0.12.0",
    },
    "Math.log1p": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.log1p'",
        singular: true,
        node: "0.12.0",
    },
    "Math.expm1": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.expm1'",
        singular: true,
        node: "0.12.0",
    },
    "Math.cosh": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.cosh'",
        singular: true,
        node: "0.12.0",
    },
    "Math.sinh": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.sinh'",
        singular: true,
        node: "0.12.0",
    },
    "Math.tanh": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.tanh'",
        singular: true,
        node: "0.12.0",
    },
    "Math.acosh": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.acosh'",
        singular: true,
        node: "0.12.0",
    },
    "Math.asinh": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.asinh'",
        singular: true,
        node: "0.12.0",
    },
    "Math.atanh": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.atanh'",
        singular: true,
        node: "0.12.0",
    },
    "Math.trunc": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.trunc'",
        singular: true,
        node: "0.12.0",
    },
    "Math.fround": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.fround'",
        singular: true,
        node: "0.12.0",
    },
    "Math.cbrt": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.cbrt'",
        singular: true,
        node: "0.12.0",
    },
    "Math.hypot": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.hypot'",
        singular: true,
        node: "0.12.0",
    },

    "Symbol.hasInstance": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.hasInstance'",
        singular: true,
        node: null,
    },
    "Symbol.isConcatSpreadablec": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.isConcatSpreadablec'",
        singular: true,
        node: "6.0.0",
    },
    "Symbol.iterator": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.iterator'",
        singular: true,
        node: "0.12.0",
    },
    "Symbol.species": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.species'",
        singular: true,
        node: null,
    },
    "Symbol.replace": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.replace'",
        singular: true,
        node: "6.0.0",
    },
    "Symbol.search": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.search'",
        singular: true,
        node: "6.0.0",
    },
    "Symbol.split": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.split'",
        singular: true,
        node: "6.0.0",
    },
    "Symbol.match": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.match'",
        singular: true,
        node: "6.0.0",
    },
    "Symbol.toPrimitive": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.toPrimitive'",
        singular: true,
        node: "6.0.0",
    },
    "Symbol.toStringTag": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.toStringTag'",
        singular: true,
        node: "6.0.0",
    },
    "Symbol.unscopables": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.unscopables'",
        singular: true,
        node: "4.0.0",
    },

    "Atomics.add": {
        alias: ["runtime", "staticMethods", "Atomics.*"],
        name: "'Atomics.add'",
        singular: true,
        node: null,
    },
    "Atomics.and": {
        alias: ["runtime", "staticMethods", "Atomics.*"],
        name: "'Atomics.and'",
        singular: true,
        node: null,
    },
    "Atomics.compareExchange": {
        alias: ["runtime", "staticMethods", "Atomics.*"],
        name: "'Atomics.compareExchange'",
        singular: true,
        node: null,
    },
    "Atomics.exchange": {
        alias: ["runtime", "staticMethods", "Atomics.*"],
        name: "'Atomics.exchange'",
        singular: true,
        node: null,
    },
    "Atomics.wait": {
        alias: ["runtime", "staticMethods", "Atomics.*"],
        name: "'Atomics.wait'",
        singular: true,
        node: null,
    },
    "Atomics.wake": {
        alias: ["runtime", "staticMethods", "Atomics.*"],
        name: "'Atomics.wake'",
        singular: true,
        node: null,
    },
    "Atomics.isLockFree": {
        alias: ["runtime", "staticMethods", "Atomics.*"],
        name: "'Atomics.isLockFree'",
        singular: true,
        node: null,
    },
    "Atomics.load": {
        alias: ["runtime", "staticMethods", "Atomics.*"],
        name: "'Atomics.load'",
        singular: true,
        node: null,
    },
    "Atomics.or": {
        alias: ["runtime", "staticMethods", "Atomics.*"],
        name: "'Atomics.or'",
        singular: true,
        node: null,
    },
    "Atomics.store": {
        alias: ["runtime", "staticMethods", "Atomics.*"],
        name: "'Atomics.store'",
        singular: true,
        node: null,
    },
    "Atomics.sub": {
        alias: ["runtime", "staticMethods", "Atomics.*"],
        name: "'Atomics.sub'",
        singular: true,
        node: null,
    },
    "Atomics.xor": {
        alias: ["runtime", "staticMethods", "Atomics.*"],
        name: "'Atomics.xor'",
        singular: true,
        node: null,
    },

    "extendsArray": {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'Array'",
        singular: true,
        node: "6.0.0",
    },
    "extendsRegExp": {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'RegExp'",
        singular: true,
        node: "5.0.0",
    },
    "extendsFunction": {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'Function'",
        singular: true,
        node: "6.0.0",
    },
    "extendsPromise": {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'Promise'",
        singular: true,
        node: "5.0.0",
    },
    "extendsBoolean": {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'Boolean'",
        singular: true,
        node: "4.0.0",
    },
    "extendsNumber": {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'Number'",
        singular: true,
        node: "4.0.0",
    },
    "extendsString": {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'String'",
        singular: true,
        node: "4.0.0",
    },
    "extendsMap": {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'Map'",
        singular: true,
        node: "4.0.0",
    },
    "extendsSet": {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'Set'",
        singular: true,
        node: "4.0.0",
    },
    "extendsNull": {
        alias: ["runtime", "extends"],
        name: "'extends null'",
        singular: true,
        node: null,
    },
}
