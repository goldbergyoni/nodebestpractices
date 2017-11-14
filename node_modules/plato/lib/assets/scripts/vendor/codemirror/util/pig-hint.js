(function () {
  function forEach(arr, f) {
    for (var i = 0, e = arr.length; i < e; ++i) f(arr[i]);
  }
  
  function arrayContains(arr, item) {
    if (!Array.prototype.indexOf) {
      var i = arr.length;
      while (i--) {
        if (arr[i] === item) {
          return true;
        }
      }
      return false;
    }
    return arr.indexOf(item) != -1;
  }

  function scriptHint(editor, _keywords, getToken) {
    // Find the token at the cursor
    var cur = editor.getCursor(), token = getToken(editor, cur), tprop = token;
    // If it's not a 'word-style' token, ignore the token.

    if (!/^[\w$_]*$/.test(token.string)) {
        token = tprop = {start: cur.ch, end: cur.ch, string: "", state: token.state,
                         className: token.string == ":" ? "pig-type" : null};
    }
      
    if (!context) var context = [];
    context.push(tprop);
    
    var completionList = getCompletions(token, context); 
    completionList = completionList.sort();
    //prevent autocomplete for last word, instead show dropdown with one word
    if(completionList.length == 1) {
      completionList.push(" ");
    }

    return {list: completionList,
              from: {line: cur.line, ch: token.start},
              to: {line: cur.line, ch: token.end}};
  }
  
  CodeMirror.pigHint = function(editor) {
    return scriptHint(editor, pigKeywordsU, function (e, cur) {return e.getTokenAt(cur);});
  };
 
  var pigKeywords = "VOID IMPORT RETURNS DEFINE LOAD FILTER FOREACH ORDER CUBE DISTINCT COGROUP "
  + "JOIN CROSS UNION SPLIT INTO IF OTHERWISE ALL AS BY USING INNER OUTER ONSCHEMA PARALLEL "
  + "PARTITION GROUP AND OR NOT GENERATE FLATTEN ASC DESC IS STREAM THROUGH STORE MAPREDUCE "
  + "SHIP CACHE INPUT OUTPUT STDERROR STDIN STDOUT LIMIT SAMPLE LEFT RIGHT FULL EQ GT LT GTE LTE " 
  + "NEQ MATCHES TRUE FALSE";
  var pigKeywordsU = pigKeywords.split(" ");
  var pigKeywordsL = pigKeywords.toLowerCase().split(" ");
  
  var pigTypes = "BOOLEAN INT LONG FLOAT DOUBLE CHARARRAY BYTEARRAY BAG TUPLE MAP";
  var pigTypesU = pigTypes.split(" ");
  var pigTypesL = pigTypes.toLowerCase().split(" ");
  
  var pigBuiltins = "ABS ACOS ARITY ASIN ATAN AVG BAGSIZE BINSTORAGE BLOOM BUILDBLOOM CBRT CEIL " 
  + "CONCAT COR COS COSH COUNT COUNT_STAR COV CONSTANTSIZE CUBEDIMENSIONS DIFF DISTINCT DOUBLEABS "
  + "DOUBLEAVG DOUBLEBASE DOUBLEMAX DOUBLEMIN DOUBLEROUND DOUBLESUM EXP FLOOR FLOATABS FLOATAVG "
  + "FLOATMAX FLOATMIN FLOATROUND FLOATSUM GENERICINVOKER INDEXOF INTABS INTAVG INTMAX INTMIN "
  + "INTSUM INVOKEFORDOUBLE INVOKEFORFLOAT INVOKEFORINT INVOKEFORLONG INVOKEFORSTRING INVOKER "
  + "ISEMPTY JSONLOADER JSONMETADATA JSONSTORAGE LAST_INDEX_OF LCFIRST LOG LOG10 LOWER LONGABS "
  + "LONGAVG LONGMAX LONGMIN LONGSUM MAX MIN MAPSIZE MONITOREDUDF NONDETERMINISTIC OUTPUTSCHEMA  "
  + "PIGSTORAGE PIGSTREAMING RANDOM REGEX_EXTRACT REGEX_EXTRACT_ALL REPLACE ROUND SIN SINH SIZE "
  + "SQRT STRSPLIT SUBSTRING SUM STRINGCONCAT STRINGMAX STRINGMIN STRINGSIZE TAN TANH TOBAG "
  + "TOKENIZE TOMAP TOP TOTUPLE TRIM TEXTLOADER TUPLESIZE UCFIRST UPPER UTF8STORAGECONVERTER";  
  var pigBuiltinsU = pigBuiltins.split(" ").join("() ").split(" ");  
  var pigBuiltinsL = pigBuiltins.toLowerCase().split(" ").join("() ").split(" ");   
  var pigBuiltinsC = ("BagSize BinStorage Bloom BuildBloom ConstantSize CubeDimensions DoubleAbs "
  + "DoubleAvg DoubleBase DoubleMax DoubleMin DoubleRound DoubleSum FloatAbs FloatAvg FloatMax "
  + "FloatMin FloatRound FloatSum GenericInvoker IntAbs IntAvg IntMax IntMin IntSum "
  + "InvokeForDouble InvokeForFloat InvokeForInt InvokeForLong InvokeForString Invoker "
  + "IsEmpty JsonLoader JsonMetadata JsonStorage LongAbs LongAvg LongMax LongMin LongSum MapSize "
  + "MonitoredUDF Nondeterministic OutputSchema PigStorage PigStreaming StringConcat StringMax "
  + "StringMin StringSize TextLoader TupleSize Utf8StorageConverter").split(" ").join("() ").split(" ");
                    
  function getCompletions(token, context) {
    var found = [], start = token.string;
    function maybeAdd(str) {
      if (str.indexOf(start) == 0 && !arrayContains(found, str)) found.push(str);
    }
    
    function gatherCompletions(obj) {
      if(obj == ":") {
        forEach(pigTypesL, maybeAdd);
      }
      else {
        forEach(pigBuiltinsU, maybeAdd);
        forEach(pigBuiltinsL, maybeAdd);
        forEach(pigBuiltinsC, maybeAdd);
        forEach(pigTypesU, maybeAdd);
        forEach(pigTypesL, maybeAdd);
        forEach(pigKeywordsU, maybeAdd);
        forEach(pigKeywordsL, maybeAdd);
      }
    }

    if (context) {
      // If this is a property, see if it belongs to some object we can
      // find in the current environment.
      var obj = context.pop(), base;

      if (obj.type == "variable") 
          base = obj.string;
      else if(obj.type == "variable-3")
          base = ":" + obj.string;
        
      while (base != null && context.length)
        base = base[context.pop().string];
      if (base != null) gatherCompletions(base);
    }
    return found;
  }
})();
