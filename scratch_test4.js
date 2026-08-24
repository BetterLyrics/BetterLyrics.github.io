const { JSDOM } = require('jsdom');
const dom = new JSDOM('<article data-lang="zh"><p>任务栏三视图 by Leon</p></article>');
const document = dom.window.document;
const activeArticle = document.querySelector('article');
const highlightQuery = 'Leon';
const safeQuery = highlightQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const regex = new RegExp(`(${safeQuery})`, 'gi');
const walker = document.createTreeWalker(activeArticle, 4, null, false);
const textNodes = [];
let node;
while (node = walker.nextNode()) {
  regex.lastIndex = 0;
  if (regex.test(node.nodeValue)) textNodes.push(node);
}
textNodes.forEach(textNode => {
  const span = document.createElement('span');
  span.innerHTML = textNode.nodeValue.replace(regex, '<mark class="active-highlight">$1</mark>');
  const fragment = document.createDocumentFragment();
  Array.from(span.childNodes).forEach(child => fragment.appendChild(child));
  textNode.parentNode.replaceChild(fragment, textNode);
});
console.log(activeArticle.innerHTML);
