const fs = require('fs');
const code = fs.readFileSync('./script.js', 'utf-8');
const stripMarkdownStr = code.substring(code.indexOf('function stripMarkdown'), code.indexOf('async function prepareSearchCache'));
eval(stripMarkdownStr);
console.log(stripMarkdown('<cardGrid>\n<card title="test title">\nthis is a test content inside a card\n</card>\n</cardGrid>'));
