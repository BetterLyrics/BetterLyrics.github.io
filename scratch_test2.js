const fs = require('fs');
const html = fs.readFileSync('dist/docs/add-ons/layouts-store/index.html', 'utf-8');
const { JSDOM } = require('jsdom');
const dom = new JSDOM(html);
const article = dom.window.document.querySelector('article[data-lang="zh"]');
console.log('zh textContent:', article ? article.textContent.trim().replace(/\s+/g, ' ').substring(0, 300) : 'none');
