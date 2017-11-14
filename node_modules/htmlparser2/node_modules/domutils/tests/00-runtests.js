var fs = require("fs"),
	assert = require("assert");

var runCount = 0,
	testCount = 0;

function compare(expected, result){
	if(typeof expected !== typeof result){
		throw Error("types didn't match");
	}
	if(typeof expected !== "object" || expected === null){
		if(expected !== result){
			throw Error("result doesn't equal expected");
		}
		return;
	}

	for(var prop in expected){
		if(!(prop in result)) throw Error("result didn't contain property " + prop);
		compare(expected[prop], result[prop]);
	}
}

function runTests(test){
	//read files, load them, run them
	fs.readdirSync(__dirname + test.dir
	).map(function(file){
		if(file[0] === ".") return false;
		if(file.substr(-5) === ".json") return JSON.parse(
			fs.readFileSync(__dirname + test.dir + file)
		);
		return require(__dirname + test.dir + file);
	}).forEach(function(file){
		if(!file) return;
		var second = false;
		
		runCount++;
		
		console.log("Testing:", file.name);
		
		test.test(file, function(err, dom){
			assert.ifError(err);
			compare(file.expected, dom);
						
			if(second){
				runCount--;
				testCount++;
			}
			else second = true;
		});
	});
	console.log("->", test.dir.slice(1, -1), "started");
}

//run all tests
[
 "./02-dom_utils.js"
].map(require).forEach(runTests);

//log the results
(function check(){
	if(runCount !== 0) return process.nextTick(check);
	console.log("Total tests:", testCount);
}());