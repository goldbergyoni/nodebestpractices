/* A couple of utility methods */

function each(obj, iter) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) iter(key, obj[key]);
  }
}

function nextString(str) {
  return 'S' + (parseInt(str.substr(1), 36) + 1).toString(36);
}

/* End utility methods */

function Translator(api, options) {
  var origLength = JSON.stringify(api, null, 2).length;
  var debugInfo = {flattened: {}, pruned: {}};
  var shapeName = 'S0';
  var shapeNameMap = {};
  var visitedShapes = {};

  function logResults() {
    console.log('** Generated', api.metadata.endpointPrefix + '-' +
      api.metadata.apiVersion +'.min.json' +
      (process.env.DEBUG ? ':' : ''));

    if (process.env.DEBUG) {
      var pruned = Object.keys(debugInfo.pruned);
      var flattened = Object.keys(debugInfo.flattened);
      var newLength = JSON.stringify(api, null, 2).length;
      console.log('- Pruned Shapes:', pruned.length);
      console.log('- Flattened Shapes:', flattened.length);
      console.log('- Remaining Shapes:', Object.keys(api.shapes).length);
      console.log('- Original Size:', origLength / 1024.0, 'kb');
      console.log('- Minified Size:', newLength / 1024.0, 'kb');
      console.log('- Size Saving:', (origLength - newLength) / 1024.0, 'kb');
      console.log('');
    }
  }

  function deleteTraits(obj) {
    if (!options.documentation) {
      delete obj.documentation;
      delete obj.documentationUrl;
      delete obj.errors;
      delete obj.min;
      delete obj.max;
      delete obj.pattern;
      delete obj['enum'];
      delete obj.box;
    }
  }

  function trackShapeDeclaration(ref) {
    if (ref.shape && !shapeNameMap[ref.shape]) {
      // found a shape declaration we have not yet visited.
      // assign a new generated name in the shapeNameMap & visit it
      var oldShapeName = ref.shape;
      ref.shape = shapeName = nextString(shapeName);

      visitedShapes[shapeName] = api.shapes[oldShapeName];
      shapeNameMap[oldShapeName] = {name: shapeName, refs: [ref]};

      traverseShapeRef(api.shapes[oldShapeName]);
    } else if (ref.shape && shapeNameMap[ref.shape]) {
      // we visited this shape before. keep track of this ref and rename
      // the referenced declaration to the generated name
      var map = shapeNameMap[ref.shape];
      map.refs.push(ref);
      ref.shape = map.name;        
    }
  }

  function pruneShapes() {
    // prune shapes visited only once or only have type specifiers
    each(shapeNameMap, function(name, map) {
      if (Object.keys(visitedShapes[map.name]).join() === 'type' &&
          ['structure','map','list'].indexOf(visitedShapes[map.name].type) < 0) {
        // flatten out the shape (only a scalar type property is on the shape)
        for (var i = 0; i < map.refs.length; i++) {
          var ref = map.refs[i];
          debugInfo.flattened[name] = true;
          delete ref.shape;
          ref.type = visitedShapes[map.name].type;

          // string type is default, don't need to specify this
          if (ref.type === 'string') delete ref.type;
        }

        // we flattened all refs, we can prune the shape too
        delete visitedShapes[map.name];
        debugInfo.pruned[name] = true;
      } else if (map.refs.length === 1) { // only visited once
        // merge shape data onto ref
        var shape = visitedShapes[map.name];

        for (var i = 0; i < map.refs.length; i++) {
          delete map.refs[i].shape;
          for (var prop in shape) {
            if (shape.hasOwnProperty(prop)) map.refs[i][prop] = shape[prop];
          }
        }

        // delete the visited shape
        delete visitedShapes[map.name];
        debugInfo.pruned[name] = true;
      }
    });
  }

  function traverseShapeRef(ref) {
    if (!ref) return;

    deleteTraits(ref);

    traverseShapeRef(ref.key); // for maps
    traverseShapeRef(ref.value); // for maps
    traverseShapeRef(ref.member); // for lists

    // for structures
    each(ref.members || {}, function(key, value) { traverseShapeRef(value); });

    // resolve shape declarations
    trackShapeDeclaration(ref);
  }

  function traverseOperation(op) {
    deleteTraits(op);

    delete op.name;
    if (op.http) {
      if (op.http.method === 'POST') delete op.http.method;
      if (op.http.requestUri === '/') delete op.http.requestUri;
      if (Object.keys(op.http).length === 0) delete op.http;
    }

    traverseShapeRef(op.input);
    traverseShapeRef(op.output);    
  }

  function traverseApi() {
    deleteTraits(api);
    each(api.operations, function(name, op) { traverseOperation(op); });
    api.shapes = visitedShapes;
  }

  traverseApi();
  pruneShapes();
  logResults();
  return api;
}

module.exports = Translator;
