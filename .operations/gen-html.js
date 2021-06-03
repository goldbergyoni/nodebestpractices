const path = require('path');
const cheerio = require('cheerio');
const showdown = require('showdown');
const Repository = require('github-api/dist/components/Repository');
const { readdir, readFile, writeFile } = require('graceful-fs');

const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const CIInfo = require('ci-info');

const converter = new showdown.Converter();

const templateFilePath = './.operations/res/template.html';

const imageminOpts = {
    plugins: [
        imageminJpegtran(),
        imageminPngquant({ quality: '65-80' })
    ]
};

console.info(`Working in [${process.cwd()}]`);

const { isCI } = CIInfo;
const { GITHUB_TOKEN, OWNER_AND_REPO, BRANCH, IS_PR, IS_FORK } = getConfigFromEnv();

readDirPromise('./')
    .then(async (fileNames) => {
        const indexFileNames = fileNames.filter(fn => fn.includes('README.') && fn.includes('.md'));

        for (let fileName of indexFileNames) {
            const startTime = new Date();
            console.info(`Beginning Generate Document [${fileName}] at [${startTime.toISOString()}]`);
            try {
                const templateHTML = await readFilePromise(templateFilePath);
                const processedTemplateHTML = await inlineResources(templateHTML);
                const outputHTML = await processMDFile(fileName, processedTemplateHTML);
                console.info(`Completed Generation in [${computeElapsedTime(startTime)}s]`);

                const outFileName = path.parse(fileName).name + '.html';
                const outFilePath = path.join('.operations', 'out', outFileName);
                console.info(`Writing output to [${outFilePath}]`);
                await writeFilePromise(outFilePath, outputHTML);

                if(shouldUpdateGitHubPages()) {
                    const repo = new Repository(OWNER_AND_REPO, {
                        token: GITHUB_TOKEN
                    });

                    console.info(`Committing HTML file to branch [gh-pages]`);
                    await repo.writeFile('gh-pages', outFileName, outputHTML, ':loudspeaker: :robot: Automatically updating built HTML file', {});
                }
            } catch (err) {
                console.error(`Failed to generate from [${fileName}] in [${computeElapsedTime(startTime)}s]`, err);
                process.exit(1);
            }
        }
    })
    .then(() => {
        console.log(`🎉 Finished gen-html 🎉`);
    })

function getConfigFromEnv() {
    if (CIInfo.GITHUB_ACTIONS) {
        return getConfigFromGithubActionEnv()
    }
    return process.env;
}

function getConfigFromGithubActionEnv() {
    const config = {
        ...process.env,

        OWNER_AND_REPO: process.env.GITHUB_REPOSITORY,
        
        IS_PR: CIInfo.IS_PR !== null ? CIInfo.IS_PR : process.env.GITHUB_EVENT_NAME === 'pull_request',
        
        // We assume we're in PR and and we get the source for the PR
        BRANCH: process.env.GITHUB_HEAD_REF,
    };

    if(!config.IS_PR) {
        // GITHUB_REF example: `refs/heads/main`
        config.BRANCH = process.env.GITHUB_REF.substring('refs/heads/'.length);
    }

    return config;
}

function shouldUpdateGitHubPages() {
    return isCI && !IS_FORK && !IS_PR && BRANCH === 'master';
}

function computeElapsedTime(startTime) {
    return (Date.now() - startTime) / 1000;
}


async function processMDFile(filePath = '/', templateHTML = null) {
    let mdSrc;
    try {
        mdSrc = await readFilePromise(filePath);
    } catch (err) {
        console.warn(`Failed to read file [${filePath}], does it exist?`);
        return '';
    }
    const generatedHTML = converter.makeHtml(mdSrc);
    let nexHTML = generatedHTML;
    if (templateHTML) {
        const $ = cheerio.load(templateHTML);
        $('.content').html(generatedHTML);
        nexHTML = $.html();
    }

    const fileDir = path.parse(filePath).dir.replace(process.cwd(), '/') || '/';

    console.log(`Processing file [${filePath}]`);
    const outHtml = await (
        inlineLocalReferences(nexHTML, fileDir)
            .then((html) => fixMdReferences(html))
            .then((html) => fixHashAs(html))
            .then((html) => inlineAssets(html, fileDir))
    );

    return outHtml;
}

const internalRefRegExp = /^((?!http)(?!#)(?!\/\/).)*$/; // Doesn't start with 'http', '//', or '#'
async function inlineLocalReferences(html, filePath = '/') {
    const $ = cheerio.load(html);
    const as = $('a');
    const internalAs = as.toArray().filter((a) => internalRefRegExp.test(a.attribs.href) && !a.attribs.href.includes('README'));

    const processedInternalRefs = await Promise.all(
        internalAs.map((a) => processMDFile(path.resolve(filePath, a.attribs.href)))
    );

    processedInternalRefs.forEach((processedHTML, index) => {
        const originalA = $(internalAs[index]);

        const contentId = originalA.text().replace(/[^A-Za-z0-9]/g, '_');
        $('.references').append([
            $('<hr>'),
            $('<div>')
                .addClass('reference-section')
                .attr('id', contentId)
                .html(processedHTML)
        ]);

        originalA.attr('href', `#${contentId}`);
    });

    return $.html();
}

async function fixMdReferences(html) { // Primarily for links to translations
    const $ = cheerio.load(html);
    const as = $('a');
    const mdReferences = as.toArray().filter((a) => internalRefRegExp.test(a.attribs.href) && a.attribs.href.includes('.md'));

    mdReferences
        .forEach((a) => {
            const $a = $(a);
            const href = $a.attr('href')
            const newHref = href.replace('.md', '.html');
            $a.attr('href', './' + newHref);
        })

    return $.html();
}

async function inlineAssets(html, filePath = '/') {
    const $ = cheerio.load(html);
    const imgs = $('img');
    const internalImgs = imgs.toArray().filter((img) => internalRefRegExp.test(img.attribs.src));

    for (let img of internalImgs) {
        const ext = path.parse(img.attribs.src).ext.slice(1); // parse().ext includes '.'
        const imgPath = path.resolve('/', filePath, img.attribs.src);
        const imgBuffer = await readFilePromise(imgPath, null);
        const compressedImgBuffer = await imagemin.buffer(imgBuffer, imageminOpts);
        const base64 = compressedImgBuffer.toString('base64');
        const mediaUri = `data:image/${ext};base64,${base64}`;
        const originalImg = $(img);
        originalImg.attr('src', mediaUri);
    }

    return $.html();
}

async function fixHashAs(html) {
    const $ = cheerio.load(html);
    const as = $('a');

    const hashAs = as.toArray().filter((a) => a.attribs.href[0] === '#');
    hashAs.forEach(a => {
        $(a).attr('href', a.attribs.href.replace(/-/g, ''));
    });

    return $.html()
}



async function inlineResources(html, filePath = '/') {
    const $ = cheerio.load(html);
    const scripts = $('script[src]');
    const links = $('link[href]');

    const internalScripts = scripts.toArray().filter((script) => internalRefRegExp.test(script.attribs.src));
    const internalLinks = links.toArray().filter((link) => internalRefRegExp.test(link.attribs.href));

    for (let scriptEl of internalScripts) {
        const scriptPath = path.resolve('/', filePath, scriptEl.attribs.src);
        const scriptBuffer = await readFilePromise(scriptPath, null);
        const base64 = scriptBuffer.toString('base64');
        const mediaUri = `data:text/javascript;base64,${base64}`;
        $(scriptEl).attr('src', mediaUri);
    }

    for (let linkEl of internalLinks) {
        const linkPath = path.resolve('/', filePath, linkEl.attribs.href);
        const linkBuffer = await readFilePromise(linkPath, null);
        const base64 = linkBuffer.toString('base64');
        const mediaUri = `data:text/css;base64,${base64}`;
        $(linkEl).attr('href', mediaUri);
    }

    return $.html();
}




function readFilePromise(filePath, encoding = 'utf8') {
    return new Promise((resolve, reject) => {
        readFile(path.resolve(process.cwd(), './' + filePath), encoding, (err, content) => {
            if (err) reject(err);
            else resolve(content);
        });
    });
}

function writeFilePromise(filePath, encoding = 'utf8') {
    return new Promise((resolve, reject) => {
        writeFile(path.resolve(process.cwd(), './' + filePath), encoding, (err, content) => {
            if (err) reject(err);
            else resolve(content);
        });
    });
}

function readDirPromise(dirPath) {
    return new Promise((resolve, reject) => {
        readdir(path.resolve(process.cwd(), dirPath), (err, files) => {
            if (err) reject(err);
            else resolve(files);
        });
    });
}