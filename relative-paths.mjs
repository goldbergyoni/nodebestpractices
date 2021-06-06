import * as fs from 'fs';
import * as path from 'path';
import markdownLinkExtractor from 'markdown-link-extractor';

/**
 *
 * @param {string} text
 */
function updateAllLinks(text) {
  text = updateSrcAttributeThatPointToAbsoluteFilePathToRelativePath(text);

  text = updateAllMarkdownLinks(text);
  return text;
}

/**
 *
 * @param {string} text
 */
function updateSrcAttributeThatPointToAbsoluteFilePathToRelativePath(text) {
  // Regex from https://stackoverflow.com/a/317081/5923666
  // For the string `<img src="assets/images/banner-2.jpg" />` the output groups will be:
  // group 1: `src`
  // group 2: `assets/images/banner-2.jpg`
  const findAttributes = /(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|\s*\/?[>"']))+.)["']?/g

  const attributes = [...text.matchAll(findAttributes)];
  const onlySrcWithAbsoluteFilePathAttributes = attributes.filter(([_, property, value]) => property === 'src' && !value.startsWith('.') && !value.startsWith('http'));

  text = replaceAllRegexMatches(text, onlySrcWithAbsoluteFilePathAttributes, ([attrWithValue, attr, value]) => {
    return attrWithValue.replace(
      // Same regex as before but with more groups to match the quotes type and more.
      // For the string `<img src="assets/images/banner-2.jpg" />` the output groups will be:
      // group 1: `src="`
      // group 2: `src`
      // group 3: `assets/images/banner-2.jpg`
      // group 4: `"`
      /((\S+)=["']?)((?:.(?!["']?\s+(?:\S+)=|\s*\/?[>"']))+.)(["']?)/,

      // Don't add a prefix slash if already exist.
      `$1.${value.startsWith('/') ? '' : '/'}$3$4`
    );
  });

  return text;
}

function replaceAllRegexMatches(text, matches, replaceFn) {
  // Because we replace the content of the attribute the regex index location for the matched value will changed, so we keep count of the index that needed to be added
  let ogIndexChanged = 0;

  matches.forEach((match) => {
    const updatedValue = replaceFn(match);

    const beforeAttr = text.substring(0, match.index + ogIndexChanged);
    const afterAttr = text.substring(match.index + ogIndexChanged + match[0].length);

    text = beforeAttr + updatedValue + afterAttr;

    ogIndexChanged += updatedValue.length - match[0].length;
  });

  return text;
}

function updateAllMarkdownLinks(text) {
  const details = markdownLinkExtractor(text, true);

  const onlyLinksOrImagesThatAreAbsoluteFilePaths = details.filter(({href}) => !href.startsWith('.') && !href.startsWith('http') && !href.startsWith('#'));

  onlyLinksOrImagesThatAreAbsoluteFilePaths.forEach(detail => {
    let replacedValue = detail.raw;

    const updatedLink = `.${detail.href.startsWith('/') ? '' : '/'}${detail.href}`;

    switch (detail.type) {
      case 'image':
        replacedValue = `![${detail.text}](${updatedLink})`;
        break;

      case 'link':
        replacedValue = `[${detail.text}](${updatedLink})`;
        break;

    }
    text = text.replace(detail.raw, replacedValue)
  });

  return text;
}

function fromDir(startPath,filter){
  if (!fs.existsSync(startPath)){
      console.log("no dir ",startPath);
      return;
  }

  var files=fs.readdirSync(startPath);
  var paths=[];
  for(var i=0;i<files.length;i++){
      var filename=path.join(startPath,files[i]);
      var stat = fs.lstatSync(filename);
      if (stat.isDirectory()){
          fromDir(filename,filter); //recurse
      }
      else if (filename.indexOf(filter)>=0) {
          console.log('-- found: ',filename);
          paths.push(filename);
      };
  };
  return paths;
};


export default function transform(){
  const paths = fromDir('.', '.md');
  for (var i=0;i<paths.length;i++){
    const content = fs.readFileSync(paths[i]).toString();
    const updated = updateAllLinks(content);
    fs.writeFileSync(path, updated);
  }
 };

 (function () {
  "use strict";

  transform();
}());
