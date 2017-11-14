'use strict';

// Dependencies.
var RecursiveIterator = require('recursive-iterator');
var excludedSwaggerProperties = [
  'apis',
];

/**
 * Checks if tag is already contained withing target.
 * The tag is an object of type http://swagger.io/specification/#tagObject
 * The target, is the part of the swagger specification that holds all tags.
 * @function
 * @param {object} target - Swagger object place to include the tags data.
 * @param {object} tag - Swagger tag object to be included.
 * @returns {boolean} Does tag is already present in target
 */
function _tagDuplicated(target, tag) {
  // Check input is workable.
  if (target && target.length && tag) {
    for (var i = 0; i < target.length; i = i + 1) {
      var targetTag = target[i];
      // The name of the tag to include already exists in the taget.
      // Therefore, it's not necessary to be added again.
      if (targetTag.name === tag.name) {
        return true;
      }
    }
  }

  // This will indicate that `tag` is not present in `target`.
  return false;
}

/**
 * Adds the tags property to a swagger object.
 * @function
 * @param {object} conf - Flexible configuration.
 */
function _attachTags(conf) {
  var tag = conf.tag;
  var swaggerObject = conf.swaggerObject;
  var propertyName = conf.propertyName;

  // Correct deprecated property.
  if (propertyName === 'tag') {
    propertyName = 'tags';
  }

  if (Array.isArray(tag)) {
    for (var i = 0; i < tag.length; i = i + 1) {
      if (!_tagDuplicated(swaggerObject[propertyName], tag[i])) {
        swaggerObject[propertyName].push(tag[i]);
      }
    }
  } else {
    if (!_tagDuplicated(swaggerObject[propertyName], tag)) {
      swaggerObject[propertyName].push(tag);
    }
  }
}

/**
 * Merges two objects
 * @function
 * @param {object} obj1 - Object 1
 * @param {object} obj2 - Object 2
 * @returns {object} Merged Object
 */
function _objectMerge(obj1, obj2) {
  var obj3 = {};
  for (var attr in obj1) {
    if (obj1.hasOwnProperty(attr)) {
      obj3[attr] = obj1[attr];
    }
  }
  for (var name in obj2) {
    if (obj2.hasOwnProperty(name)) {
      obj3[name] = obj2[name];
    }
  }
  return obj3;
}

/**
 * Adds necessary swagger schema object properties.
 * @see https://goo.gl/Eoagtl
 * @function
 * @param {object} swaggerObject - The object to receive properties.
 * @returns {object} swaggerObject - The updated object.
 */
function swaggerizeObj(swaggerObject) {
  // Remove excluded keys from swagger output object
  excludedSwaggerProperties.forEach(function(key) {
    if (swaggerObject.hasOwnProperty(key)) {
      delete swaggerObject[key];
    }
  });

  swaggerObject.swagger = '2.0';
  swaggerObject.paths = swaggerObject.paths || {};
  swaggerObject.definitions = swaggerObject.definitions || {};
  swaggerObject.responses = swaggerObject.responses || {};
  swaggerObject.parameters = swaggerObject.parameters || {};
  swaggerObject.securityDefinitions = swaggerObject.securityDefinitions || {};
  swaggerObject.tags = swaggerObject.tags || [];
  return swaggerObject;
}

/**
 * List of deprecated or wrong swagger schema properties in singular.
 * @function
 * @returns {array} The list of deprecated property names.
 */
function _getSwaggerSchemaWrongProperties() {
  return [
    'consume',
    'produce',
    'path',
    'tag',
    'definition',
    'securityDefinition',
    'scheme',
    'response',
    'parameter',
  ];
}

/**
 * Makes a deprecated property plural if necessary.
 * @function
 * @param {string} propertyName - The swagger property name to check.
 * @returns {string} The updated propertyName if neccessary.
 */
function _correctSwaggerKey(propertyName) {
  var wrong = _getSwaggerSchemaWrongProperties();
  if (wrong.indexOf(propertyName) > 0) {
    // Returns the corrected property name.
    return propertyName + 's';
  }
  return propertyName;
}

/**
 * Handles swagger propertyName in pathObject context for swaggerObject.
 * @function
 * @param {object} swaggerObject - The swagger object to update.
 * @param {object} pathObject - The input context of an item for swaggerObject.
 * @param {string} propertyName - The property to handle.
 */
function _organizeSwaggerProperties(swaggerObject, pathObject, propertyName) {
  var simpleProperties = [
    'consume',
    'consumes',
    'produce',
    'produces',
    'path',
    'paths',
    'schema',
    'schemas',
    'securityDefinition',
    'securityDefinitions',
    'response',
    'responses',
    'parameter',
    'parameters',
    'definition',
    'definitions',
  ];

  // Common properties.
  if (simpleProperties.indexOf(propertyName) !== -1) {
    var keyName = _correctSwaggerKey(propertyName);
    var definitionNames = Object
      .getOwnPropertyNames(pathObject[propertyName]);
    for (var k = 0; k < definitionNames.length; k = k + 1) {
      var definitionName = definitionNames[k];
      swaggerObject[keyName][definitionName] =
        pathObject[propertyName][definitionName];
    }
  // Tags.
  } else if (propertyName === 'tag' || propertyName === 'tags') {
    var tag = pathObject[propertyName];
    _attachTags({
      tag: tag,
      swaggerObject: swaggerObject,
      propertyName: propertyName,
    });
  // Paths.
  } else {
    swaggerObject.paths[propertyName] = _objectMerge(
      swaggerObject.paths[propertyName], pathObject[propertyName]
    );
  }
}

/**
 * Adds the data in to the swagger object.
 * @function
 * @param {object} swaggerObject - Swagger object which will be written to
 * @param {object[]} data - objects of parsed swagger data from yml or jsDoc
 *                          comments
 */
function addDataToSwaggerObject(swaggerObject, data) {
  if (!swaggerObject || !data) {
    throw new Error('swaggerObject and data are required!');
  }

  for (var i = 0; i < data.length; i = i + 1) {
    var pathObject = data[i];
    var propertyNames = Object.getOwnPropertyNames(pathObject);
    // Iterating the properties of the a given pathObject.
    for (var j = 0; j < propertyNames.length; j = j + 1) {
      var propertyName = propertyNames[j];
      // Do what's necessary to organize the end specification.
      _organizeSwaggerProperties(swaggerObject, pathObject, propertyName);
    }
  }
}

/**
 * Aggregates a list of wrong properties in problems.
 * Searches in object based on a list of wrongSet.
 * @param {Array|object} list - a list to iterate
 * @param {Array} wrongSet - a list of wrong properties
 * @param {Array} problems - aggregate list of found problems
 */
function seekWrong(list, wrongSet, problems) {
  var iterator = new RecursiveIterator(list, 0, false);
  for (var item = iterator.next(); !item.done; item = iterator.next()) {
    var isDirectChildOfProperties =
      item.value.path[item.value.path.length - 2] === 'properties';

    if (wrongSet.indexOf(item.value.key) > 0 && !isDirectChildOfProperties) {
      problems.push(item.value.key);
    }
  }
}

/**
 * Returns a list of problematic tags if any.
 * @function
 * @param {Array} sources - a list of objects to iterate and check
 * @returns {Array} problems - a list of problems encountered
 */
function findDeprecated(sources) {
  var wrong = _getSwaggerSchemaWrongProperties();
  // accumulate problems encountered
  var problems = [];
  sources.forEach(function(source) {
    // Iterate through `source`, search for `wrong`, accumulate in `problems`.
    seekWrong(source, wrong, problems);
  });
  return problems;
}

module.exports = {
  addDataToSwaggerObject: addDataToSwaggerObject,
  swaggerizeObj: swaggerizeObj,
  findDeprecated: findDeprecated,
};
