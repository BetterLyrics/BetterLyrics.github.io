const fs = require('fs');
const html = fs.readFileSync('dist/docs/add-ons/layouts-store/index.html', 'utf-8');
const articleMatch = html.match(/<article data-lang="zh"[^>]*>([\s\S]*?)<\/article>/);
console.log(articleMatch ? articleMatch[1].substring(0, 1500) : 'not found');
