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

let now = new Date();
const date = now.getFullYear() + "-" + now.getMonth() + "-" + now.getHours();

function renderXML({url}) {

    return `
    <url>
        <loc>https://becoming.lu${url}</loc>
        <lastmod>${date}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
`
}

function saveData(xmlString) {
    const pathname = './build/sitemap.xml';
    ensureDirectoryExistence(pathname);
    fs.promises.writeFile(pathname, xmlString);
}

const htmlHead = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xlmns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
const htmlTail = `</urlset>`;

async function main() {
    const data = (await parseFile('./public/wiki/menu/menu.bm'))
        .filter(Boolean);

    let siteMapBody = htmlHead;
    let i = 0;

    data.forEach(async _ => {
        (await parseFile('./public' + _.pathname, _))
            .map(_ => {
                siteMapBody += renderXML(_);
            });

        if(++i >= data.length) {
            siteMapBody += htmlTail;
            saveData(siteMapBody);
        }
    });
}

main();
