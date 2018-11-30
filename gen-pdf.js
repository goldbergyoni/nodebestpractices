const path = require('path');
const cheerio = require('cheerio');
const showdown = require('showdown');
const { readFile, writeFileSync } = require('graceful-fs');

const converter = new showdown.Converter();

const templateFilePath = './template.html';

const indexFilePath = './README.md';

const startTime = new Date();
console.info(`Beginning Generate Document at [${startTime.toISOString()}]`);
processMDFile(indexFilePath)
    .then(async (outputHTML) => {
        console.info(`Completed Generation in [${(Date.now() - startTime) / 1000}s]`);
        console.info(`Output has length [${outputHTML.length}]`);
        console.info(`Writing to [./index.html]`);

        const templateHtml = await readFilePromise(templateFilePath);
        const $ = cheerio.load(templateHtml);
        $('.container').html(outputHTML);

        writeFileSync('./index.html', $.html());
        console.info('Written Successfully');
    })
    .catch((err) => {
        console.error(`Failed to generate in [${(Date.now() - startTime) / 1000}s]`, err);
    });



async function processMDFile(filePath = '/') {
    const mdSrc = await readFilePromise(filePath);
    const generatedHTML = converter.makeHtml(mdSrc);

    console.info(`html is [${generatedHTML.length}] long`);
    const fileDir = path.parse(filePath).dir.replace(__dirname, '/');

    const outHtml = await (
        inlineLocalReferences(generatedHTML, fileDir)
            .then((html) => fixHashAs(html))
            .then((html) => inlineAssets(html, fileDir))
    );

    return outHtml;
}


const internalRefRegExp = /^(\.\/|\.\.|\/[^\/])/;
async function inlineLocalReferences(html, filePath = '/') {
    const $ = cheerio.load(html);
    const as = $('a');
    const internalAs = as.toArray().filter((a) => internalRefRegExp.test(a.attribs.href) && $(a).text().includes('Read More:'));
    console.log(`Found [${internalAs.length}] 'Read More:' links`);

    const processedInternalRefs = await Promise.all(
        internalAs.map((a) => processMDFile('/' + path.relative(filePath, './' + a.attribs.href)))
    );

    processedInternalRefs.forEach((processedHTML, index) => {
        const originalA = $(internalAs[index]);
        originalA.replaceWith(
            $('<details>')
                .html(processedHTML)
                .prepend(
                    $('<summary>').html(originalA.html())
                )
        )
    });

    return $('body').html();
}

async function inlineAssets(html, filePath = '/') {
    const $ = cheerio.load(html);
    const imgs = $('img');
    const internalImgs = imgs.toArray().filter((img) => internalRefRegExp.test(img.attribs.src));

    const imgB64s = await Promise.all(
        internalImgs.map(async (img) => {
            const ext = path.parse(img.attribs.src).ext.slice(1); // parse().ext includes '.'
            const imgPath = path.resolve('/', filePath, img.attribs.src);
            const imgBuffer = await readFilePromise(imgPath, null);
            const base64 = imgBuffer.toString('base64');
            const mediaUri = `data:image/${ext};base64,${base64}`;
            return mediaUri;
        })
    );

    imgB64s.forEach((b64String, i) => {
        const originalImg = $(internalImgs[i]);
        originalImg.attr('src', b64String);
    });

    return $('body').html();
}

async function fixHashAs(html) {
    const $ = cheerio.load(html);
    const as = $('a');

    const hashAs = as.toArray().filter((a) => a.attribs.href[0] === '#');
    hashAs.forEach(a => {
        $(a).attr('href', a.attribs.href.replace(/-/g, ''));
    });

    return $('body').html()
}

function readFilePromise(filePath, encoding = 'utf8') {
    return new Promise((resolve, reject) => {
        readFile(path.resolve(__dirname, './' + filePath), encoding, (err, content) => {
            if (err) reject(err);
            else resolve(content);
        })
    });
}