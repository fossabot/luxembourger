const fs = require('fs');
const path = require('path');

async function readFile(pathname) {
    return (await fs.promises.readFile(pathname)).toString();
}

function ensureDirectoryExistence(filePath) {
    var dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
}

async function parseFile(pathname, category) {
    return (await readFile(pathname, category))
        .split('\n\n')
        .map(_ => {
            const content = _.split('\n');
            if (content[0] == 'category') {
                const [type, title, url, pathname] = content;
                if (!pathname) {
                    return;
                }
                return {
                    type,
                    title,
                    url: '/' + url,
                    pathname
                };
            } else if (content[0] == 'category-item') {
                const [type, title, description, image, pathname] = content;
                return {
                    type,
                    title,
                    description,
                    image,
                    url: category.url + "/" + title.toLowerCase().split(' ').join('-')
                };
            }
        })
}

const htmlHead = `<!DOCTYPE html><html lang="en"><head>`;
const htmlTail = `</head><body/></html>`;

function renderHTML({title, url, image, description, type}) {
    return type === 'category-item' ?
        htmlHead + `
          <meta property="og:title" content="${title}"/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://becoming.lu${url}"/>
          <meta property="og:image" content="https://becoming.lu/${image}"/>
          <meta property="og:description" content="${description}"/>
        `
        + htmlTail
        :
        htmlHead + `
          <meta property="og:title" content="${title}"/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://becoming.lu${url}"/>
        `
        + htmlTail
}

function saveData(data) {
    const pathname = './build/og/' + data.url + '.html';
    ensureDirectoryExistence(pathname);
    fs.promises.writeFile(pathname, renderHTML(data));
}

async function main() {
    const data = (await parseFile('./public/wiki/menu/menu.bm'))
        .filter(Boolean);

    data.forEach(async _ => {
        saveData(_);
        (await parseFile('./public' + _.pathname, _))
            .filter(_ => _ && _.type === 'category-item')
            .map(saveData);
    });
}

main();
