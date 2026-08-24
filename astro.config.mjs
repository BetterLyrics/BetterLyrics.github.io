import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Vite plugin to perform regex replacements on markdown files before parsing
function betterlyricsMarkdownTransform() {
  return {
    name: 'betterlyrics-md-transform',
    enforce: 'pre',
    transform(code, id) {
      if (id.endsWith('.md') || id.endsWith('.mdx')) {
        let text = code;
        
        // Parse <CardGrid>
        text = text.replace(/<cardGrid>/ig, '<div class="card-grid">');
        text = text.replace(/<\/cardGrid>/ig, '</div>');

        // Parse <LinkCard>
        text = text.replace(/<linkCard([^>]+)\/?>/ig, (match, attrs) => {
          const titleMatch = attrs.match(/title=["'](.*?)["']/);
          const descMatch = attrs.match(/description=["'](.*?)["']/);
          const hrefMatch = attrs.match(/href=["'](.*?)["']/);
          const title = titleMatch ? titleMatch[1] : '';
          const desc = descMatch ? descMatch[1] : '';
          const href = hrefMatch ? hrefMatch[1] : '#';
          return `<a href="${href}" class="link-card" target="_blank" rel="noopener noreferrer"><div class="link-card-title">${title}</div><div class="link-card-desc">${desc}</div></a>`;
        });

        // Parse <Card>
        text = text.replace(/<card([^>]*)>([\s\S]*?)<\/card>/ig, (match, attrs, content) => {
          const titleMatch = attrs.match(/title=["'](.*?)["']/);
          const title = titleMatch ? titleMatch[1] : '';
          return `<div class="card">${title ? `<div class="card-title">${title}</div>` : ''}<div class="card-content">\n\n${content}\n\n</div></div>`;
        });

        // Parse <Badge>
        text = text.replace(/<badge([^>]+)\/?>/ig, (match, attrs) => {
          const variantMatch = attrs.match(/variant=["'](.*?)["']/);
          const textMatch = attrs.match(/text=["'](.*?)["']/);
          const variant = variantMatch ? variantMatch[1] : 'note';
          const badgeText = textMatch ? textMatch[1] : '';
          return `<span class="nav-badge nav-badge-${variant}">${badgeText}</span>`;
        });

        // Parse Admonitions (:::type[title] ... :::) to blockquotes, matching script.js logic
        text = text.replace(/^([ \t]*):::([a-zA-Z]+)(?:\[(.*?)\])?[ \t]*\r?\n([\s\S]*?)\r?\n^[ \t]*:::[ \t]*(?=\r?\n|$)/gm, (match, indent, type, title, content) => {
          const safeType = type.toLowerCase();
          const safeTitle = title ? title : safeType.charAt(0).toUpperCase() + safeType.slice(1);
          
          let result = `${indent}> **[admonition-${safeType}]** ${safeTitle}\n${indent}>\n`;
          const lines = content.split(/\r?\n/);
          lines.forEach(line => {
            const strippedLine = line.startsWith(indent) ? line.slice(indent.length) : line;
            result += `${indent}> ${strippedLine}\n`;
          });
          return result;
        });

        return { code: text, map: null };
      }
    }
  };
}

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import fs from 'fs';
import path from 'path';

// Read versions from latest release
const getLatestVersion = () => {
  try {
    const pkg = JSON.parse(fs.readFileSync(path.resolve('package.json'), 'utf-8'));
    return pkg.version || '2.0.0'; // Fallback
  } catch (e) {
    return '2.0.0';
  }
};

export default defineConfig({
  site: 'https://betterlyrics.github.io'
});
