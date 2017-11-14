/**
 * Sunlight
 *    Intelligent syntax highlighting
 *
 * http://sunlightjs.com/
 *
 * by Tommy Montgomery <http://tmont.com>
 * Licensed under WTFPL <http://sam.zoy.org/wtfpl/>
 */
(function(window, document, undefined){

	var 
		//http://webreflection.blogspot.com/2009/01/32-bytes-to-know-if-your-browser-is-ie.html
		//we have to sniff this because IE requires \r
		isIe = !+"\v1", 
		EOL = isIe ? "\r" : "\n",
		EMPTY = function() { return null; },
		HIGHLIGHTED_NODE_COUNT = 0,
		DEFAULT_LANGUAGE = "plaintext",
		DEFAULT_CLASS_PREFIX = "sunlight-",
		
		//global sunlight variables
		defaultAnalyzer,
		getComputedStyle,
		globalOptions = {
			tabWidth: 4,
			classPrefix: DEFAULT_CLASS_PREFIX,
			showWhitespace: false,
			maxHeight: false
		},
		languages = {},
		languageDefaults = {},
		events = {
			beforeHighlightNode: [],
			beforeHighlight: [],
			beforeTokenize: [],
			afterTokenize: [],
			beforeAnalyze: [],
			afterAnalyze: [],
			afterHighlight: [],
			afterHighlightNode: []
		};

	defaultAnalyzer = (function() {
		function defaultHandleToken(suffix) {
			return function(context) {
				var element = document.createElement("span");
				element.className = context.options.classPrefix + suffix;
				element.appendChild(context.createTextNode(context.tokens[context.index]));
				return context.addNode(element) || true;
			};
		}

		return {
			handleToken: function(context) { 
				return defaultHandleToken(context.tokens[context.index].name)(context); 
			},

			//just append default content as a text node
			handle_default: function(context) { 
				return context.addNode(context.createTextNode(context.tokens[context.index])); 
			},

			//this handles the named ident mayhem
			handle_ident: function(context) {
				var evaluate = function(rules, createRule) {
					var i;
					rules = rules || [];
					for (i = 0; i < rules.length; i++) {
						if (typeof(rules[i]) === "function") {
							if (rules[i](context)) {
								return defaultHandleToken("named-ident")(context);
							}
						} else if (createRule && createRule(rules[i])(context.tokens)) {
							return defaultHandleToken("named-ident")(context);
						}
					}

					return false;
				};

				return evaluate(context.language.namedIdentRules.custom)
					|| evaluate(context.language.namedIdentRules.follows, function(ruleData) { return createProceduralRule(context.index - 1, -1, ruleData, context.language.caseInsensitive); })
					|| evaluate(context.language.namedIdentRules.precedes, function(ruleData) { return createProceduralRule(context.index + 1, 1, ruleData, context.language.caseInsensitive); })
					|| evaluate(context.language.namedIdentRules.between, function(ruleData) { return createBetweenRule(context.index, ruleData.opener, ruleData.closer, context.language.caseInsensitive); })
					|| defaultHandleToken("ident")(context);
			}
		};
	}());

	languageDefaults = {
		analyzer: create(defaultAnalyzer),
		customTokens: [],
		namedIdentRules: {},
		punctuation: /[^\w\s]/,
		numberParser: defaultNumberParser,
		caseInsensitive: false,
		doNotParse: /\s/,
		contextItems: {},
		embeddedLanguages: {}
	};
	
	//adapted from http://blargh.tommymontgomery.com/2010/04/get-computed-style-in-javascript/
	getComputedStyle = (function() {
		var func = null;
		if (document.defaultView && document.defaultView.getComputedStyle) {
			func = document.defaultView.getComputedStyle;
		} else {
			func = function(element, anything) {
				return element["currentStyle"] || {};
			};
		}

		return function(element, style) {
			return func(element, null)[style];
		}
	}());
	
	//-----------
	//FUNCTIONS
	//-----------

	function createCodeReader(text) {
		var index = 0,
			line = 1,
			column = 1,
			length,
			EOF = undefined,
			currentChar,
			nextReadBeginsLine;

		text = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n"); //normalize line endings to unix

		length = text.length;
		currentChar = length > 0 ? text.charAt(0) : EOF;

		function getCharacters(count) {
			var value;
			if (count === 0) {
				return "";
			}

			count = count || 1;

			value = text.substring(index + 1, index + count + 1);
			return value === "" ? EOF : value;
		}

		return {
			toString: function() {
				return "length: " + length + ", index: " + index + ", line: " + line + ", column: " + column + ", current: [" + currentChar + "]";
			},

			peek: function(count) {
				return getCharacters(count);
			},

			substring: function() {
				return text.substring(index);
			},

			peekSubstring: function() {
				return text.substring(index + 1);
			},

			read: function(count) {
				var value = getCharacters(count),
					newlineCount,
					lastChar;

				if (value === "") {
					//this is a result of reading/peeking/doing nothing
					return value;
				}

				if (value !== EOF) {
					//advance index
					index += value.length;
					column += value.length;

					//update line count
					if (nextReadBeginsLine) {
						line++;
						column = 1;
						nextReadBeginsLine = false;
					}

					newlineCount = value.substring(0, value.length - 1).replace(/[^\n]/g, "").length;
					if (newlineCount > 0) {
						line += newlineCount;
						column = 1;
					}

					lastChar = last(value);
					if (lastChar === "\n") {
						nextReadBeginsLine = true;
					}

					currentChar = lastChar;
				} else {
					index = length;
					currentChar = EOF;
				}

				return value;
			},

			text: function() { return text; },

			getLine: function() { return line; },
			getColumn: function() { return column; },
			isEof: function() { return index >= length; },
			isSol: function() { return column === 1; },
			isSolWs: function() {
				var temp = index,
					c;
				if (column === 1) {
					return true;
				}

				//look backward until we find a newline or a non-whitespace character
				while ((c = text.charAt(--temp)) !== "") {
					if (c === "\n") {
						return true;
					}
					if (!/\s/.test(c)) {
						return false;
					}
				}

				return true;
			},
			isEol: function() { return nextReadBeginsLine; },
			EOF: EOF,
			current: function() { return currentChar; }
		};
	}

	//http://javascript.crockford.com/prototypal.html
	function create(o) {
		function F() {}
		F.prototype = o;
		return new F();
	}
	
	function appendAll(parent, children) {
		var i;
		for (i = 0; i < children.length; i++) {
			parent.appendChild(children[i]);
		}
	}
	
	//gets the last character in a string or the last element in an array
	function last(thing) {
		return thing.charAt ? thing.charAt(thing.length - 1) : thing[thing.length - 1];
	}

	//array.contains()
	function contains(arr, value, caseInsensitive) {
		var i;
		if (arr.indexOf && !caseInsensitive) {
			return arr.indexOf(value) >= 0;
		}
		
		for (i = 0; i < arr.length; i++) {
			if (arr[i] === value) {
				return true;
			}

			if (caseInsensitive && typeof(arr[i]) === "string" && typeof(value) === "string" && arr[i].toUpperCase() === value.toUpperCase()) {
				return true;
			}
		}

		return false;
	}

	//non-recursively merges one object into the other
	function merge(defaultObject, objectToMerge) {
		var key;
		if (!objectToMerge) {
			return defaultObject;
		}

		for (key in objectToMerge) {
			defaultObject[key] = objectToMerge[key];
		}

		return defaultObject;
	}
	
	function clone(object) {
		return merge({}, object);
	}

	//http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript/3561711#3561711
	function regexEscape(s) {
		return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
	}

	function createProceduralRule(startIndex, direction, tokenRequirements, caseInsensitive) {
		tokenRequirements = tokenRequirements.slice(0);
		return function(tokens) {
			var tokenIndexStart = startIndex,
				j,
				expected,
				actual;
				
			if (direction === 1) {
				tokenRequirements.reverse();
			}

			for (j = 0; j < tokenRequirements.length; j++) {
				actual = tokens[tokenIndexStart + (j * direction)];
				expected = tokenRequirements[tokenRequirements.length - 1 - j];

				if (actual === undefined) {
					if (expected["optional"] !== undefined && expected.optional) {
						tokenIndexStart -= direction;
					} else {
						return false;
					}
				} else if (actual.name === expected.token && (expected["values"] === undefined || contains(expected.values, actual.value, caseInsensitive))) {
					//derp
					continue;
				} else if (expected["optional"] !== undefined && expected.optional) {
					tokenIndexStart -= direction; //we need to reevaluate against this token again
				} else {
					return false;
				}
			}

			return true;
		};
	}

	function createBetweenRule(startIndex, opener, closer, caseInsensitive) {
		return function(tokens) {
			var index = startIndex,
				token,
				success = false;

			//check to the left: if we run into a closer or never run into an opener, fail
			while ((token = tokens[--index]) !== undefined) {
				if (token.name === closer.token && contains(closer.values, token.value)) {
					if (token.name === opener.token && contains(opener.values, token.value, caseInsensitive)) {
						//if the closer is the same as the opener that's okay
						success = true;
						break;
					}

					return false;
				}

				if (token.name === opener.token && contains(opener.values, token.value, caseInsensitive)) {
					success = true;
					break;
				}
			}

			if (!success) {
				return false;
			}

			//check to the right for the closer
			index = startIndex;
			while ((token = tokens[++index]) !== undefined) {
				if (token.name === opener.token && contains(opener.values, token.value, caseInsensitive)) {
					if (token.name === closer.token && contains(closer.values, token.value, caseInsensitive)) {
						//if the closer is the same as the opener that's okay
						success = true;
						break;
					}

					return false;
				}

				if (token.name === closer.token && contains(closer.values, token.value, caseInsensitive)) {
					success = true;
					break;
				}
			}

			return success;
		};
	}

	function matchWord(context, wordMap, tokenName, doNotRead) {
		var current = context.reader.current(),
			i,
			word,
			peek,
			line = context.reader.getLine(),
			column = context.reader.getColumn();
			
		wordMap = wordMap || [];
		if (context.language.caseInsensitive) {
			current = current.toUpperCase();
		}

		if (!wordMap[current]) {
			return null;
		}

		wordMap = wordMap[current];
		for (i = 0; i < wordMap.length; i++) {
			word = wordMap[i].value;

			peek = current + context.reader.peek(word.length);
			if (word === peek || wordMap[i].regex.test(peek)) {
				return context.createToken(
					tokenName,
					context.reader.current() + context.reader[doNotRead ? "peek" : "read"](word.length - 1),
					line,
					column
				);
			}
		}

		return null;
	}

	//gets the next token in the specified direction while matcher matches the current token
	function getNextWhile(tokens, index, direction, matcher) {
		var count = 1, 
			token;
		
		direction = direction || 1;
		while (token = tokens[index + (direction * count++)]) {
			if (!matcher(token)) {
				return token;
			}
		}
		
		return undefined;
	}

	//this is crucial for performance
	function createHashMap(wordMap, boundary, caseInsensitive) {
		//creates a hash table where the hash is the first character of the word
		var newMap = { },
			i,
			word,
			firstChar;
		
		for (i = 0; i < wordMap.length; i++) {
			word = caseInsensitive ? wordMap[i].toUpperCase() : wordMap[i];
			firstChar = word.charAt(0);
			if (!newMap[firstChar]) {
				newMap[firstChar] = [];
			}

			newMap[firstChar].push({ value: word, regex: new RegExp("^" + regexEscape(word) + boundary, caseInsensitive ? "i" : "") });
		}

		return newMap;
	}

	function defaultNumberParser(context) {
		var current = context.reader.current(), 
			number, 
			line = context.reader.getLine(), 
			column = context.reader.getColumn(),
			allowDecimal = true,
			peek;

		if (!/\d/.test(current)) {
			//is it a decimal followed by a number?
			if (current !== "." || !/\d/.test(context.reader.peek())) {
				return null;
			}

			//decimal without leading zero
			number = current + context.reader.read();
			allowDecimal = false;
		} else {
			number = current;
			if (current === "0" && context.reader.peek() !== ".") {
				//hex or octal
				allowDecimal = false;
			}
		}

		//easy way out: read until it's not a number or letter
		//this will work for hex (0xef), octal (012), decimal and scientific notation (1e3)
		//anything else and you're on your own

		while ((peek = context.reader.peek()) !== context.reader.EOF) {
			if (!/[A-Za-z0-9]/.test(peek)) {
				if (peek === "." && allowDecimal && /\d$/.test(context.reader.peek(2))) {
					number += context.reader.read();
					allowDecimal = false;
					continue;
				}
				
				break;
			}

			number += context.reader.read();
		}

		return context.createToken("number", number, line, column);
	}

	function fireEvent(eventName, highlighter, eventContext) {
		var delegates = events[eventName] || [],
			i;
		
		for (i = 0; i < delegates.length; i++) {
			delegates[i].call(highlighter, eventContext);
		}
	}
	
	function Highlighter(options) {
		this.options = merge(clone(globalOptions), options);
	}

	Highlighter.prototype = (function() {
		var parseNextToken = (function() {
			function isIdentMatch(context) {
				return context.language.identFirstLetter && context.language.identFirstLetter.test(context.reader.current());
			}

			//token parsing functions
			function parseKeyword(context) {
				return matchWord(context, context.language.keywords, "keyword");
			}

			function parseCustomTokens(context) {
				var tokenName,
					token;
				if (context.language.customTokens === undefined) {
					return null;
				}

				for (tokenName in context.language.customTokens) {
					token = matchWord(context, context.language.customTokens[tokenName], tokenName);
					if (token !== null) {
						return token;
					}
				}

				return null;
			}

			function parseOperator(context) {
				return matchWord(context, context.language.operators, "operator");
			}

			function parsePunctuation(context) {
				var current = context.reader.current();
				if (context.language.punctuation.test(regexEscape(current))) {
					return context.createToken("punctuation", current, context.reader.getLine(), context.reader.getColumn());
				}

				return null;
			}

			function parseIdent(context) {
				var ident,
					peek,
					line = context.reader.getLine(),
					column = context.reader.getColumn();

				if (!isIdentMatch(context)) {
					return null;
				}

				ident = context.reader.current();
				while ((peek = context.reader.peek()) !== context.reader.EOF) {
					if (!context.language.identAfterFirstLetter.test(peek)) {
						break;
					}

					ident += context.reader.read();
				}

				return context.createToken("ident", ident, line, column);
			}

			function parseDefault(context) {
				if (context.defaultData.text === "") {
					//new default token
					context.defaultData.line = context.reader.getLine();
					context.defaultData.column = context.reader.getColumn();
				}

				context.defaultData.text += context.reader.current();
				return null;
			}

			function parseScopes(context) {
				var current = context.reader.current(),
					tokenName,
					specificScopes,
					j,
					opener,
					line,
					column,
					continuation,
					value;

				for (tokenName in context.language.scopes) {
					specificScopes = context.language.scopes[tokenName];
					for (j = 0; j < specificScopes.length; j++) {
						opener = specificScopes[j][0];

						value = current + context.reader.peek(opener.length - 1);

						if (opener !== value && (!context.language.caseInsensitive || value.toUpperCase() !== opener.toUpperCase())) {
							continue;
						}

						line = context.reader.getLine(), column = context.reader.getColumn();
						context.reader.read(opener.length - 1);
						continuation = getScopeReaderFunction(specificScopes[j], tokenName);
						return continuation(context, continuation, value, line, column);
					}
				}

				return null;
			}

			function parseNumber(context) {
				return context.language.numberParser(context);
			}

			function parseCustomRules(context) {
				var customRules = context.language.customParseRules,
					i,
					token;

				if (customRules === undefined) {
					return null;
				}

				for (i = 0; i < customRules.length; i++) {
					token = customRules[i](context);
					if (token) {
						return token;
					}
				}

				return null;
			}

			return function(context) {
				if (context.language.doNotParse.test(context.reader.current())) {
					return parseDefault(context);
				}

				return parseCustomRules(context)
					|| parseCustomTokens(context)
					|| parseKeyword(context)
					|| parseScopes(context)
					|| parseIdent(context)
					|| parseNumber(context)
					|| parseOperator(context)
					|| parsePunctuation(context)
					|| parseDefault(context);
			}
		}());
		
		function getScopeReaderFunction(scope, tokenName) {
			var escapeSequences = scope[2] || [],
				closerLength = scope[1].length,
				closer = typeof(scope[1]) === "string" ? new RegExp(regexEscape(scope[1])) : scope[1].regex,
				zeroWidth = scope[3] || false;

			//processCurrent indicates that this is being called from a continuation
			//which means that we need to process the current char, rather than peeking at the next
			return function(context, continuation, buffer, line, column, processCurrent) {
				var foundCloser = false;
				buffer = buffer || "";
					
				processCurrent = processCurrent ? 1 : 0;

				function process(processCurrent) {
					//check for escape sequences
					var peekValue,
						current = context.reader.current(),
						i;
					
					for (i = 0; i < escapeSequences.length; i++) {
						peekValue = (processCurrent ? current : "") + context.reader.peek(escapeSequences[i].length - processCurrent);
						if (peekValue === escapeSequences[i]) {
							buffer += context.reader.read(peekValue.length - processCurrent);
							return true;
						}
					}

					peekValue = (processCurrent ? current : "") + context.reader.peek(closerLength - processCurrent);
					if (closer.test(peekValue)) {
						foundCloser = true;
						return false;
					}

					buffer += processCurrent ? current : context.reader.read();
					return true;
				};

				if (!processCurrent || process(true)) {
					while (context.reader.peek() !== context.reader.EOF && process(false)) { }
				}

				if (processCurrent) {
					buffer += context.reader.current();
					context.reader.read();
				} else {
					buffer += zeroWidth || context.reader.peek() === context.reader.EOF ? "" : context.reader.read(closerLength);
				}

				if (!foundCloser) {
					//we need to signal to the context that this scope was never properly closed
					//this has significance for partial parses (e.g. for nested languages)
					context.continuation = continuation;
				}

				return context.createToken(tokenName, buffer, line, column);
			};
		}
		
		//called before processing the current
		function switchToEmbeddedLanguageIfNecessary(context) {
			var i,
				embeddedLanguage;
			
			for (i = 0; i < context.language.embeddedLanguages.length; i++) {
				if (!languages[context.language.embeddedLanguages[i].language]) {
					//unregistered language
					continue;
				}
				
				embeddedLanguage = clone(context.language.embeddedLanguages[i]);
				
				if (embeddedLanguage.switchTo(context)) {
					embeddedLanguage.oldItems = clone(context.items);
					context.embeddedLanguageStack.push(embeddedLanguage);
					context.language = languages[embeddedLanguage.language];
					context.items = merge(context.items, clone(context.language.contextItems));
					break;
				}
			}
		}
		
		//called after processing the current
		function switchBackFromEmbeddedLanguageIfNecessary(context) {
			var current = last(context.embeddedLanguageStack),
				lang;
			
			if (current && current.switchBack(context)) {
				context.language = languages[current.parentLanguage];
				lang = context.embeddedLanguageStack.pop();
				
				//restore old items
				context.items = clone(lang.oldItems);
				lang.oldItems = {};
			}
		}
		
		function tokenize(unhighlightedCode, language, partialContext, options) {
			var tokens = [],
				context,
				continuation,
				token;
				
			fireEvent("beforeTokenize", this, { code: unhighlightedCode, language: language });
			context = {
				reader: createCodeReader(unhighlightedCode),
				language: language,
				items: clone(language.contextItems),
				token: function(index) { return tokens[index]; },
				getAllTokens: function() { return tokens.slice(0); },
				count: function() { return tokens.length; },
				options: options,
				embeddedLanguageStack: [],
				
				defaultData: {
					text: "",
					line: 1,
					column: 1
				},
				createToken: function(name, value, line, column) {
					return {
						name: name,
						line: line,
						value: isIe ? value.replace(/\n/g, "\r") : value,
						column: column,
						language: this.language.name
					};
				}
			};

			//if continuation is given, then we need to pick up where we left off from a previous parse
			//basically it indicates that a scope was never closed, so we need to continue that scope
			if (partialContext.continuation) {
				continuation = partialContext.continuation;
				partialContext.continuation = null;
				tokens.push(continuation(context, continuation, "", context.reader.getLine(), context.reader.getColumn(), true));
			}

			while (!context.reader.isEof()) {
				switchToEmbeddedLanguageIfNecessary(context);
				token = parseNextToken(context);

				//flush default data if needed (in pretty much all languages this is just whitespace)
				if (token !== null) {
					if (context.defaultData.text !== "") {
						tokens.push(context.createToken("default", context.defaultData.text, context.defaultData.line, context.defaultData.column));
						context.defaultData.text = "";
					}

					if (token[0] !== undefined) {
						//multiple tokens
						tokens = tokens.concat(token);
					} else {
						//single token
						tokens.push(token);
					}
				}

				switchBackFromEmbeddedLanguageIfNecessary(context);
				context.reader.read();
			}

			//append the last default token, if necessary
			if (context.defaultData.text !== "") {
				tokens.push(context.createToken("default", context.defaultData.text, context.defaultData.line, context.defaultData.column));
			}

			fireEvent("afterTokenize", this, { code: unhighlightedCode, parserContext: context });
			return context;
		}

		function createAnalyzerContext(parserContext, partialContext, options) {
			var nodes = [],
				prepareText = function() {
					var nbsp, tab;
					if (options.showWhitespace) {
						nbsp = String.fromCharCode(0xB7);
						tab = new Array(options.tabWidth).join(String.fromCharCode(0x2014)) + String.fromCharCode(0x2192);
					} else {
						nbsp = String.fromCharCode(0xA0);
						tab = new Array(options.tabWidth + 1).join(nbsp);
					}
					
					return function(token) {
						var value = token.value.split(" ").join(nbsp),
							tabIndex,
							lastNewlineColumn,
							actualColumn,
							tabLength;
						
						//tabstop madness: replace \t with the appropriate number of characters, depending on the tabWidth option and its relative position in the line
						while ((tabIndex = value.indexOf("\t")) >= 0) {
							lastNewlineColumn = value.lastIndexOf(EOL, tabIndex);
							actualColumn = lastNewlineColumn === -1 ? tabIndex : tabIndex - lastNewlineColumn - 1;
							tabLength = options.tabWidth - (actualColumn % options.tabWidth); //actual length of the TAB character
							
							value = value.substring(0, tabIndex) + tab.substring(options.tabWidth - tabLength) + value.substring(tabIndex + 1);
						}
						
						return value;
					};
				}();

			return {
				tokens: (partialContext.tokens || []).concat(parserContext.getAllTokens()),
				index: partialContext.index ? partialContext.index + 1 : 0,
				language: null,
				getAnalyzer: EMPTY,
				options: options,
				continuation: parserContext.continuation,
				addNode: function(node) { nodes.push(node); },
				createTextNode: function(token) { return document.createTextNode(prepareText(token)); },
				getNodes: function() { return nodes; },
				resetNodes: function() { nodes = []; },
				items: parserContext.items
			};
		}

		//partialContext allows us to perform a partial parse, and then pick up where we left off at a later time
		//this functionality enables nested highlights (language within a language, e.g. PHP within HTML followed by more PHP)
		function highlightText(unhighlightedCode, languageId, partialContext) {
			var language = languages[languageId],
				analyzerContext;
			
			partialContext = partialContext || { };
			if (language === undefined) {
				//use default language if one wasn't specified or hasn't been registered
				language = languages[DEFAULT_LANGUAGE];
			}

			fireEvent("beforeHighlight", this, { code: unhighlightedCode, language: language, previousContext: partialContext });
			
			analyzerContext = createAnalyzerContext(
				tokenize.call(this, unhighlightedCode, language, partialContext, this.options),
				partialContext,
				this.options
			);
			
			analyze.call(this, analyzerContext, partialContext.index ? partialContext.index + 1 : 0);
			
			fireEvent("afterHighlight", this, { analyzerContext: analyzerContext });

			return analyzerContext;
		}
		
		function createContainer(ctx) {
			var container = document.createElement("span");
			container.className = ctx.options.classPrefix + ctx.language.name;
			return container;
		}
		
		function analyze(analyzerContext, startIndex) {
			var nodes,
				lastIndex,
				container,
				i,
				tokenName,
				func,
				language,
				analyzer;
			
			fireEvent("beforeAnalyze", this, { analyzerContext: analyzerContext });
			
			if (analyzerContext.tokens.length > 0) {
				analyzerContext.language = languages[analyzerContext.tokens[0].language] || languages[DEFAULT_LANGUAGE];;
				nodes = [];
				lastIndex = 0;
				container = createContainer(analyzerContext);
				
				for (i = startIndex; i < analyzerContext.tokens.length; i++) {
					language = languages[analyzerContext.tokens[i].language] || languages[DEFAULT_LANGUAGE];
					if (language.name !== analyzerContext.language.name) {
						appendAll(container, analyzerContext.getNodes());
						analyzerContext.resetNodes();
						
						nodes.push(container);
						analyzerContext.language = language;
						container = createContainer(analyzerContext);
					}
					
					analyzerContext.index = i;
					tokenName = analyzerContext.tokens[i].name;
					func = "handle_" + tokenName;

					analyzer = analyzerContext.getAnalyzer.call(analyzerContext) || analyzerContext.language.analyzer;
					analyzer[func] ? analyzer[func](analyzerContext) : analyzer.handleToken(analyzerContext);
				}
				
				//append the last nodes, and add the final nodes to the context
				appendAll(container, analyzerContext.getNodes());
				nodes.push(container);
				analyzerContext.resetNodes();
				for (i = 0; i < nodes.length; i++) {
					analyzerContext.addNode(nodes[i]);
				}
			}
			
			fireEvent("afterAnalyze", this, { analyzerContext: analyzerContext });
		}

		return {
			//matches the language of the node to highlight
			matchSunlightNode: function() {
				var regex;
				
				return function(node) {
					if (!regex) {
						regex = new RegExp("(?:\\s|^)" + this.options.classPrefix + "highlight-(\\S+)(?:\\s|$)");
					}
					
					return regex.exec(node.className);
				};
			}(),
			
			//determines if the node has already been highlighted
			isAlreadyHighlighted: function() {
				var regex;
				return function(node) {
					if (!regex) {
						regex = new RegExp("(?:\\s|^)" + this.options.classPrefix + "highlighted(?:\\s|$)");
					}
					
					return regex.test(node.className);
				};
			}(),
			
			//highlights a block of text
			highlight: function(code, languageId) { return highlightText.call(this, code, languageId); },

			//recursively highlights a DOM node
			highlightNode: function highlightRecursive(node) {
				var match,
					languageId,
					currentNodeCount,
					j,
					nodes,
					k,
					partialContext,
					container,
					codeContainer;
				
				if (this.isAlreadyHighlighted(node) || (match = this.matchSunlightNode(node)) === null) {
					return;
				}

				languageId = match[1];
				currentNodeCount = 0;
				fireEvent("beforeHighlightNode", this, { node: node });
				for (j = 0; j < node.childNodes.length; j++) {
					if (node.childNodes[j].nodeType === 3) {
						//text nodes
						partialContext = highlightText.call(this, node.childNodes[j].nodeValue, languageId, partialContext);
						HIGHLIGHTED_NODE_COUNT++;
						currentNodeCount = currentNodeCount || HIGHLIGHTED_NODE_COUNT;
						nodes = partialContext.getNodes();

						node.replaceChild(nodes[0], node.childNodes[j]);
						for (k = 1; k < nodes.length; k++) {
							node.insertBefore(nodes[k], nodes[k - 1].nextSibling);
						}
					} else if (node.childNodes[j].nodeType === 1) {
						//element nodes
						highlightRecursive.call(this, node.childNodes[j]);
					}
				}

				//indicate that this node has been highlighted
				node.className += " " + this.options.classPrefix + "highlighted";
				
				//if the node is block level, we put it in a container, otherwise we just leave it alone
				if (getComputedStyle(node, "display") === "block") {
					container = document.createElement("div");
					container.className = this.options.classPrefix + "container";
					
					codeContainer = document.createElement("div");
					codeContainer.className = this.options.classPrefix + "code-container";

					//apply max height if specified in options
					if (this.options.maxHeight !== false) {
						codeContainer.style.overflowY = "auto";
						codeContainer.style.maxHeight = this.options.maxHeight + (/^\d+$/.test(this.options.maxHeight) ? "px" : "");
					}
					
					container.appendChild(codeContainer);
					
					node.parentNode.insertBefore(codeContainer, node);
					node.parentNode.removeChild(node);
					codeContainer.appendChild(node);
					
					codeContainer.parentNode.insertBefore(container, codeContainer);
					codeContainer.parentNode.removeChild(codeContainer);
					container.appendChild(codeContainer);
				}
				
				fireEvent("afterHighlightNode", this, { 
					container: container,
					codeContainer: codeContainer,
					node: node, 
					count: currentNodeCount
				});
			}
		};
	}());

	//public facing object
	window.Sunlight = {
		version: "1.18",
		Highlighter: Highlighter,
		createAnalyzer: function() { return create(defaultAnalyzer); },
		globalOptions: globalOptions,

		highlightAll: function(options) {
			var highlighter = new Highlighter(options),
				tags = document.getElementsByTagName("*"),
				i;
			
			for (i = 0; i < tags.length; i++) {
				highlighter.highlightNode(tags[i]);
			}
		},

		registerLanguage: function(languageId, languageData) {
			var tokenName,
				embeddedLanguages,
				languageName;
			
			if (!languageId) {
				throw "Languages must be registered with an identifier, e.g. \"php\" for PHP";
			}

			languageData = merge(merge({}, languageDefaults), languageData);
			languageData.name = languageId;

			//transform keywords, operators and custom tokens into a hash map
			languageData.keywords = createHashMap(languageData.keywords || [], "\\b", languageData.caseInsensitive);
			languageData.operators = createHashMap(languageData.operators || [], "", languageData.caseInsensitive);
			for (tokenName in languageData.customTokens) {
				languageData.customTokens[tokenName] = createHashMap(
					languageData.customTokens[tokenName].values,
					languageData.customTokens[tokenName].boundary,
					languageData.caseInsensitive
				);
			}
			
			//convert the embedded language object to an easier-to-use array
			embeddedLanguages = [];
			for (languageName in languageData.embeddedLanguages) {
				embeddedLanguages.push({
					parentLanguage: languageData.name,
					language: languageName,
					switchTo: languageData.embeddedLanguages[languageName].switchTo,
					switchBack: languageData.embeddedLanguages[languageName].switchBack
				});
			}
			
			languageData.embeddedLanguages = embeddedLanguages;

			languages[languageData.name] = languageData;
		},
		
		isRegistered: function(languageId) { return languages[languageId] !== undefined; },
		
		bind: function(event, callback) {
			if (!events[event]) {
				throw "Unknown event \"" + event + "\"";
			}
			
			events[event].push(callback);
		},

		util: {
			last: last,
			regexEscape: regexEscape,
			eol: EOL,
			clone: clone,
			escapeSequences: ["\\n", "\\t", "\\r", "\\\\", "\\v", "\\f"],
			contains: contains,
			matchWord: matchWord,
			createHashMap: createHashMap,
			createBetweenRule: createBetweenRule,
			createProceduralRule: createProceduralRule,
			getNextNonWsToken: function(tokens, index) { return getNextWhile(tokens, index, 1, function(token) { return token.name === "default"; }); },
			getPreviousNonWsToken: function(tokens, index) { return getNextWhile(tokens, index, -1, function(token) { return token.name === "default"; }); },
			getNextWhile: function(tokens, index, matcher) { return getNextWhile(tokens, index, 1, matcher); },
			getPreviousWhile: function(tokens, index, matcher) { return getNextWhile(tokens, index, -1, matcher); },
			whitespace: { token: "default", optional: true },
			getComputedStyle: getComputedStyle
		}
	};

	//register the default language
	window.Sunlight.registerLanguage(DEFAULT_LANGUAGE, { punctuation: /(?!x)x/, numberParser: EMPTY });

}(this, document));