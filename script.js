const translations = {
  zh: {
    logoText: "BetterLyrics",
    pageTitle: "BetterLyrics 文档",
    heroTitle: "BetterLyrics",
    heroSubtitle: "曲拨心弦，词落云笺。",
    searchPlaceholder: "搜索文档...",
  },
  en: {
    logoText: "BetterLyrics",
    pageTitle: "BetterLyrics Documentation",
    heroTitle: "BetterLyrics",
    heroSubtitle: "Strums the Heartstrings, Graces the Wordscapes.",
    searchPlaceholder: "Search docs...",
  },
};

// 1. 语言切换逻辑
const langContainer = document.getElementById("lang-switch-container");
const langToggle = document.getElementById("lang-toggle");
const langMenu = document.getElementById("lang-menu");
const currentLangText = document.getElementById("current-lang");
const langOptions = langMenu.querySelectorAll("li");

let currentLang = localStorage.getItem("lang") || "en";

langToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  langContainer.classList.toggle("open");
});

document.addEventListener("click", () => {
  langContainer.classList.remove("open");
});

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (el.tagName === "TITLE") {
      document.title = translations[lang][key];
    } else {
      el.classList.add("lang-switching");
      setTimeout(() => {
        el.textContent = translations[lang][key];
        el.classList.remove("lang-switching");
      }, 300);
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", translations[lang][key]);
  });
}

// Initialize language on load
langOptions.forEach((opt) => {
  if (opt.getAttribute("data-value") === currentLang) {
    opt.classList.add("active");
    currentLangText.textContent = opt.textContent;
  } else {
    opt.classList.remove("active");
  }
});
applyTranslations(currentLang);

langOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    const lang = e.target.getAttribute("data-value");
    const langText = e.target.textContent;

    currentLang = lang;
    localStorage.setItem("lang", lang);
    currentLangText.textContent = langText;
    langOptions.forEach((opt) => opt.classList.remove("active"));
    e.target.classList.add("active");
    langContainer.classList.remove("open");

    applyTranslations(lang);
    loadSidebar(true); // 重新加载对应语言的侧边栏并切换文档
  });
});

// 2. 日夜主题切换逻辑
const themeSwitch = document.getElementById("theme-switch");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme") || (prefersDarkScheme.matches ? "dark" : "light");

document.documentElement.setAttribute("data-theme", currentTheme);

themeSwitch.addEventListener("click", () => {
  let theme = document.documentElement.getAttribute("data-theme");
  let switchToTheme = theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", switchToTheme);
  localStorage.setItem("theme", switchToTheme);
});

// 3. 极简几何背景鼠标跟随逻辑
document.addEventListener("mousemove", (e) => {
  const shapes = document.querySelectorAll(".shape");
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  shapes.forEach((shape, index) => {
    const speed = (index + 1) * 20;
    shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});

// 3.5 滚动进入视口动画 (灵动感)
const revealElements = document.querySelectorAll(".reveal");

const revealCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
};

const revealOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
revealElements.forEach((el) => revealObserver.observe(el));

// 4. 自定义鼠标跟随与悬停效果
const cursorDot = document.querySelector(".custom-cursor-dot");
const cursorRing = document.querySelector(".custom-cursor-ring");

if (window.matchMedia("(pointer: fine)").matches && cursorDot && cursorRing) {
  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  const renderCursor = () => {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(renderCursor);
  };
  requestAnimationFrame(renderCursor);

  function attachCursorEvents() {
    const hoverElements = document.querySelectorAll("a, button, .lang-menu li, #lang-toggle");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => cursorRing.classList.add("hover"));
      el.addEventListener("mouseleave", () => cursorRing.classList.remove("hover"));
    });

    const textElements = document.querySelectorAll("p, h1, h2, h3, span, .logo");
    textElements.forEach((el) => {
      if (el.closest("a") || el.closest("button") || el.classList.contains("active")) return;
      el.addEventListener("mouseenter", () => cursorRing.classList.add("text-hover"));
      el.addEventListener("mouseleave", () => cursorRing.classList.remove("text-hover"));
    });
  }
}

// 5. 文档加载与路由逻辑
const sidebarNav = document.getElementById("sidebar-nav");
const markdownContent = document.getElementById("markdown-content");
let sidebarData = null;

async function fetchSidebarData() {
  if (!sidebarData) {
    const res = await fetch("sidebar.json");
    sidebarData = await res.json();
  }
  return sidebarData[currentLang];
}

let currentGroupIndex = 0;
let currentItemIndex = 0;

async function loadSidebar(isLanguageSwitch = false) {
  await fetchSidebarData(); // Ensure sidebarData is loaded

  if (!isLanguageSwitch) {
    const hash = window.location.hash.slice(1);
    if (hash) {
      let detectedLang = null;
      for (const lang in sidebarData) {
        sidebarData[lang].forEach(group => {
          group.items.forEach(item => {
            if (item.path === hash) {
              detectedLang = lang;
            }
          });
        });
      }
      if (detectedLang && detectedLang !== currentLang) {
        currentLang = detectedLang;
        localStorage.setItem("lang", currentLang);
        langOptions.forEach(opt => {
          if (opt.getAttribute("data-value") === currentLang) {
            opt.classList.add("active");
            currentLangText.textContent = opt.textContent;
          } else {
            opt.classList.remove("active");
          }
        });
        applyTranslations(currentLang);
      }
    }
  }

  const data = sidebarData[currentLang];
  sidebarNav.innerHTML = "";
  
  data.forEach((group, gIdx) => {
    const section = document.createElement("div");
    const title = document.createElement("h3");
    title.innerHTML = `<span>${group.category}</span>
      <svg viewBox="0 0 24 24" class="chevron" style="width:14px; height:14px; transition: transform 0.2s; transform: rotate(0deg);">
        <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>`;
    title.style.margin = "1rem 0 0.5rem 0";
    title.style.fontSize = "0.9rem";
    title.style.opacity = "0.6";
    title.style.textTransform = "uppercase";
    title.style.cursor = "pointer";
    title.style.display = "flex";
    title.style.justifyContent = "space-between";
    title.style.alignItems = "center";
    title.style.userSelect = "none";
    
    title.addEventListener("click", () => {
      const isCollapsed = ul.style.display === "none";
      if (isCollapsed) {
        ul.style.display = "block";
        title.querySelector(".chevron").style.transform = "rotate(0deg)";
        title.style.opacity = "0.6";
      } else {
        ul.style.display = "none";
        title.querySelector(".chevron").style.transform = "rotate(-90deg)";
        title.style.opacity = "0.4";
      }
    });
    
    const ul = document.createElement("ul");
    group.items.forEach((item, iIdx) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#" + getCleanHash(item.path);
      
      let badgeHtml = "";
      if (item.badge) {
        badgeHtml = `<span class="nav-badge nav-badge-${item.badge.variant}">${item.badge.text}</span>`;
      }
      
      a.innerHTML = `<span class="nav-title-text">${item.title}</span>${badgeHtml}`;
      a.addEventListener("click", (e) => {
        currentGroupIndex = gIdx;
        currentItemIndex = iIdx;
        document.querySelectorAll("#sidebar-nav a").forEach(link => link.classList.remove("active"));
        a.classList.add("active");
        loadMarkdown(item.path);
      });
      li.appendChild(a);
      ul.appendChild(li);
    });
    
    section.appendChild(title);
    section.appendChild(ul);
    sidebarNav.appendChild(section);
  });

  if (typeof attachCursorEvents === "function") attachCursorEvents();
  
  if (isLanguageSwitch) {
    const newItem = data[currentGroupIndex]?.items[currentItemIndex];
    if (newItem) {
      window.location.hash = "#" + getCleanHash(newItem.path);
      loadMarkdown(newItem.path);
      
      let linkIndex = 0;
      const links = sidebarNav.querySelectorAll("a");
      data.forEach((g, gI) => g.items.forEach((i, iI) => {
        if (gI === currentGroupIndex && iI === currentItemIndex && links[linkIndex]) {
          links[linkIndex].classList.add("active");
        }
        linkIndex++;
      }));
    }
  } else {
    // Load initial page
    const hash = window.location.hash.slice(1);
    if (hash) {
      let found = false;
      data.forEach((g, gIdx) => g.items.forEach((i, iIdx) => {
        if (i.path === hash) {
          currentGroupIndex = gIdx;
          currentItemIndex = iIdx;
          found = true;
        }
      }));
      loadMarkdown(hash);
      
      let linkIndex = 0;
      const links = sidebarNav.querySelectorAll("a");
      data.forEach((g, gI) => g.items.forEach((i, iI) => {
        if (gI === currentGroupIndex && iI === currentItemIndex && links[linkIndex]) {
          links[linkIndex].classList.add("active");
        }
        linkIndex++;
      }));
    } else if (data.length > 0 && data[0].items.length > 0) {
      currentGroupIndex = 0;
      currentItemIndex = 0;
      const firstPath = data[0].items[0].path;
      window.location.hash = "#" + getCleanHash(firstPath);
      loadMarkdown(firstPath);
      const firstLink = sidebarNav.querySelector("a");
      if (firstLink) firstLink.classList.add("active");
    }
  }
}

async function loadMarkdown(path) {
  markdownContent.style.opacity = 0;
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error("File not found");
    let text = await res.text();
    
    // Remove frontmatter if exists (handling both \n and \r\n)
    text = text.replace(/^---[\s\S]*?---\r?\n/, '');

    // Remove JS imports (e.g. Astro/Starlight components)
    text = text.replace(/^[ \t]*import\s+.*?;?[ \t]*$/gm, '');

    // Parse Markdown Footnotes
    let footnotesHTML = "";
    text = text.replace(/^\[\^([a-zA-Z0-9_-]+)\]:[ \t]*([\s\S]*?)(?=(?:\r?\n){2,}[^ \t]|\s*$)/gm, (match, id, content) => {
      const parsedContent = marked.parseInline(content.trim().replace(/\r?\n[ \t]+/g, " "));
      footnotesHTML += `<li id="fn-${id}">${parsedContent} <a href="#fnref-${id}" class="footnote-backref">↩</a></li>\n`;
      return "";
    });

    if (footnotesHTML) {
      text += `\n\n<div class="footnotes"><hr><ol>\n${footnotesHTML}</ol></div>\n`;
    }

    text = text.replace(/\[\^([a-zA-Z0-9_-]+)\]/g, `<sup id="fnref-$1"><a href="#fn-$1" class="footnote-ref">$1</a></sup>`);

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
      const renderedContent = marked.parse(content);
      return `<div class="card">${title ? `<div class="card-title">${title}</div>` : ''}<div class="card-content">${renderedContent}</div></div>`;
    });

    // Parse <Badge>
    text = text.replace(/<badge([^>]+)\/?>/ig, (match, attrs) => {
      const variantMatch = attrs.match(/variant=["'](.*?)["']/);
      const textMatch = attrs.match(/text=["'](.*?)["']/);
      const variant = variantMatch ? variantMatch[1] : 'note';
      const badgeText = textMatch ? textMatch[1] : '';
      return `<span class="nav-badge nav-badge-${variant}">${badgeText}</span>`;
    });

    // Parse admonitions (:::type[title] ... :::) handling indentation and CRLF
    // Convert to markdown blockquotes to preserve list context for marked.js
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
    
    setTimeout(() => {
      markdownContent.innerHTML = marked.parse(text);

      // Post-process blockquotes that are actually admonitions
      markdownContent.querySelectorAll("blockquote").forEach(bq => {
        const firstP = bq.querySelector("p");
        if (!firstP) return;
        
        let isAdmonition = false;
        let type = "info";
        let title = "";
        
        const strong = firstP.querySelector("strong");
        if (strong && strong.textContent.startsWith("[admonition-")) {
          const typeMatch = strong.textContent.match(/\[admonition-([a-zA-Z]+)\]/);
          if (typeMatch) {
            isAdmonition = true;
            type = typeMatch[1].toLowerCase();
            title = firstP.textContent.replace(strong.textContent, "").trim();
            firstP.remove();
          }
        } else {
          // Check for GitHub Flavored Markdown alerts like [!NOTE], [!TIP]
          const ghAlertMatch = firstP.innerHTML.trim().match(/^\[!([a-zA-Z]+)\]/i);
          if (ghAlertMatch) {
            isAdmonition = true;
            type = ghAlertMatch[1].toLowerCase();
            if (type === "important") type = "warning";
            
            // For GitHub alerts, we use the type as the default title
            title = type.charAt(0).toUpperCase() + type.slice(1);
            
            // Remove the [!TYPE] text and optional following <br>
            firstP.innerHTML = firstP.innerHTML.trim().replace(/^\[![a-zA-Z]+\]\s*(<br\s*\/?>)?\s*/i, "");
            if (firstP.innerHTML.trim() === "") {
              firstP.remove();
            }
          }
        }
        
        if (isAdmonition) {
          const wrapper = document.createElement("div");
          wrapper.className = `admonition admonition-${type}`;
          
          const titleDiv = document.createElement("div");
          titleDiv.className = "admonition-title";
          titleDiv.textContent = title;
          
          const contentDiv = document.createElement("div");
          contentDiv.className = "admonition-content";
          
          while (bq.firstChild) {
            contentDiv.appendChild(bq.firstChild);
          }
          
          wrapper.appendChild(titleDiv);
          wrapper.appendChild(contentDiv);
          bq.parentNode.replaceChild(wrapper, bq);
        }
      });

      // Post-process code blocks for custom header and copy button
      markdownContent.querySelectorAll("pre").forEach(pre => {
        const code = pre.querySelector("code");
        if (!code) return;
        
        let lang = "TEXT";
        const langClass = Array.from(code.classList).find(c => c.startsWith("language-"));
        if (langClass) {
          lang = langClass.replace("language-", "").toUpperCase();
        }
        
        const wrapper = document.createElement("div");
        wrapper.className = "code-block-wrapper";
        
        const header = document.createElement("div");
        header.className = "code-block-header";
        header.innerHTML = `
          <span class="code-block-lang">${lang}</span>
          <button class="code-block-copy" title="Copy code">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          </button>
        `;
        
        const copyBtn = header.querySelector(".code-block-copy");
        copyBtn.addEventListener("click", () => {
          navigator.clipboard.writeText(code.textContent || "").then(() => {
            copyBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
            setTimeout(() => {
              copyBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
            }, 2000);
          });
        });
        
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(header);
        wrapper.appendChild(pre);
      });

      document.querySelector('.content-area').scrollTop = 0;
      markdownContent.style.opacity = 1;
      if (typeof attachCursorEvents === "function") attachCursorEvents();
    }, 300); // fade transition
  } catch (err) {
    setTimeout(() => {
      markdownContent.innerHTML = "<h1>Error 404</h1><p>Document not found.</p>";
      markdownContent.style.opacity = 1;
    }, 300);
  }
}

// 初始化
loadSidebar();

// 全文搜索逻辑
const searchInput = document.getElementById("search-input");
const searchResultsContainer = document.getElementById("search-results");
let searchCache = {};
let isFetchingSearchCache = false;

// 简单的 Markdown 去除
function stripMarkdown(md) {
  let text = md
    .replace(/^---[\s\S]*?---\r?\n/, '') // Remove frontmatter
    .replace(/^[ \t]*import\s+.*?;?[ \t]*$/gm, ''); // Remove JS imports
    
  // Extract custom component attributes to text before removing tags
  text = text.replace(/<linkCard([^>]+)\/?>/ig, (match, attrs) => {
    const titleMatch = attrs.match(/title=["'](.*?)["']/);
    const descMatch = attrs.match(/description=["'](.*?)["']/);
    return ` ${(titleMatch ? titleMatch[1] : '')} ${(descMatch ? descMatch[1] : '')} `;
  });
  text = text.replace(/<card([^>]*)>/ig, (match, attrs) => {
    const titleMatch = attrs.match(/title=["'](.*?)["']/);
    return titleMatch ? ` ${titleMatch[1]} ` : ' ';
  });
  text = text.replace(/<badge([^>]+)\/?>/ig, (match, attrs) => {
    const textMatch = attrs.match(/text=["'](.*?)["']/);
    return textMatch ? ` ${textMatch[1]} ` : ' ';
  });

  return text
    .replace(/<[^>]+>/g, '') // Remove HTML tags
    .replace(/[#*`_\[\]()>-]/g, '') // Remove basic markdown symbols
    .replace(/\n+/g, ' ') // Replace newlines with space
    .trim();
}

// 缓存当前语言的所有文档
async function prepareSearchCache(lang) {
  if (searchCache[lang]) return;
  if (isFetchingSearchCache) return;
  isFetchingSearchCache = true;
  
  try {
    const data = await fetchSidebarData(); // Gets sidebarData[currentLang]
    const items = [];
    if (!sidebarData || !sidebarData[lang]) return;
    
    sidebarData[lang].forEach(group => {
      group.items.forEach(item => items.push(item));
    });
    
    const cache = [];
    await Promise.all(items.map(async (item) => {
      try {
        const res = await fetch(item.path);
        if (res.ok) {
          const text = await res.text();
          cache.push({
            title: item.title,
            path: item.path,
            content: stripMarkdown(text)
          });
        }
      } catch (e) {
        console.error("Failed to fetch for search cache", item.path);
      }
    }));
    
    searchCache[lang] = cache;
  } catch (err) {
    console.error("Failed to prepare search cache", err);
  } finally {
    isFetchingSearchCache = false;
  }
}

if (searchInput && searchResultsContainer) {
  // 聚焦时提前加载
  searchInput.addEventListener("focus", () => {
    prepareSearchCache(currentLang);
  });
  
  // 点击外部关闭搜索结果
  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !searchResultsContainer.contains(e.target)) {
      searchResultsContainer.classList.remove("active");
    }
  });

  searchInput.addEventListener("input", async (e) => {
    const query = e.target.value.trim().toLowerCase();
    
    if (!query) {
      searchResultsContainer.classList.remove("active");
      searchResultsContainer.innerHTML = "";
      return;
    }

    if (!searchCache[currentLang]) {
      searchResultsContainer.classList.add("active");
      searchResultsContainer.innerHTML = `<div class="search-result-item" style="cursor:default;"><div class="search-result-snippet">Loading...</div></div>`;
      await prepareSearchCache(currentLang);
    }
    
    const cache = searchCache[currentLang];
    if (!cache) return;

    const results = [];
    cache.forEach(doc => {
      const titleMatch = doc.title.toLowerCase().includes(query);
      const contentIndex = doc.content.toLowerCase().indexOf(query);
      
      if (titleMatch || contentIndex !== -1) {
        let snippet = "";
        if (contentIndex !== -1) {
          const start = Math.max(0, contentIndex - 40);
          const end = Math.min(doc.content.length, contentIndex + query.length + 40);
          snippet = (start > 0 ? "..." : "") + doc.content.substring(start, end) + (end < doc.content.length ? "..." : "");
        } else {
          snippet = doc.content.substring(0, 80) + "...";
        }
        
        // Escape query for regex
        const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${safeQuery})`, 'gi');
        
        const highlightedTitle = doc.title.replace(regex, '<span class="search-highlight">$1</span>');
        const highlightedSnippet = snippet.replace(regex, '<span class="search-highlight">$1</span>');

        results.push({
          titleHtml: highlightedTitle,
          snippetHtml: highlightedSnippet,
          path: doc.path
        });
      }
    });

    if (results.length === 0) {
      searchResultsContainer.innerHTML = `<div class="search-result-item" style="cursor:default;"><div class="search-result-snippet">No results found</div></div>`;
    } else {
      searchResultsContainer.innerHTML = results.map(r => `
        <a href="#${getCleanHash(r.path)}" class="search-result-item" data-path="${r.path}">
          <div class="search-result-title">${r.titleHtml}</div>
          <div class="search-result-snippet">${r.snippetHtml}</div>
        </a>
      `).join('');
      
      searchResultsContainer.querySelectorAll(".search-result-item").forEach(el => {
        el.addEventListener("click", (evt) => {
          evt.preventDefault();
          const path = el.getAttribute("data-path");
          
          let gIdx = -1, iIdx = -1;
          sidebarData[currentLang].forEach((g, gIndex) => {
            g.items.forEach((item, iIndex) => {
              if(item.path === path) {
                gIdx = gIndex;
                iIdx = iIndex;
              }
            });
          });
          
          if (gIdx !== -1 && iIdx !== -1) {
             currentGroupIndex = gIdx;
             currentItemIndex = iIdx;
             document.querySelectorAll("#sidebar-nav a").forEach(link => link.classList.remove("active"));
             let linkIndex = 0;
             const links = sidebarNav.querySelectorAll("a");
             sidebarData[currentLang].forEach((g, _g) => g.items.forEach((i, _i) => {
               if (_g === currentGroupIndex && _i === currentItemIndex && links[linkIndex]) {
                 links[linkIndex].classList.add("active");
               }
               linkIndex++;
             }));
          }

          window.location.hash = "#" + getCleanHash(path);
          loadMarkdown(path);
          searchResultsContainer.classList.remove("active");
          searchInput.blur();
        });
      });
    }
    
    searchResultsContainer.classList.add("active");
  });
}

// Page Entry/Exit Transition Logic
document.addEventListener("DOMContentLoaded", () => {
  const curtain = document.getElementById("page-curtain");
  if (!curtain) return;

  // 1. Check for entry animation
  const transitionState = sessionStorage.getItem('page-transition');
  if (transitionState === 'slide-up') {
    curtain.style.display = 'block';
    curtain.className = "page-transition-curtain curtain-slide-up-enter";
    sessionStorage.removeItem('page-transition');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        curtain.classList.add("loaded");
      });
    });
  }

  // 2. Add exit animation when clicking logo to return to landing page
  const logoLink = document.querySelector('a[href="index.html"]');
  if (logoLink) {
    logoLink.addEventListener("click", (e) => {
      e.preventDefault();
      
      curtain.style.display = 'block';
      curtain.className = "page-transition-curtain curtain-slide-down-exit";
      void curtain.offsetWidth; // Force reflow
      curtain.classList.add("active");
      
      const contentArea = document.querySelector('.content-area');
      const sidebar = document.querySelector('.sidebar');
      if (contentArea) {
         contentArea.style.transition = 'transform 0.6s cubic-bezier(0.75, 0, 0.25, 1), opacity 0.4s ease';
         contentArea.style.transform = 'translateY(40px)';
         contentArea.style.opacity = '0';
      }
      if (sidebar) {
         sidebar.style.transition = 'transform 0.6s cubic-bezier(0.75, 0, 0.25, 1), opacity 0.4s ease';
         sidebar.style.transform = 'translateY(40px)';
         sidebar.style.opacity = '0';
      }
      
      sessionStorage.setItem('page-transition', 'slide-down');
      
      // Wait for animation, then navigate
      setTimeout(() => {
        window.location.href = logoLink.href;
      }, 600);
    });
  }
});

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
  const searchInput = document.getElementById('search-input');
  
  // Ignore if user is typing in an input or textarea (unless it's the search box and they press Escape)
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
    if (e.key === 'Escape' && e.target === searchInput) {
      searchInput.value = '';
      searchInput.blur();
      const searchResultsContainer = document.getElementById('search-results');
      if (searchResultsContainer) searchResultsContainer.classList.remove('active');
    }
    return;
  }

  // '/' or 'Cmd/Ctrl + K' focuses the search input
  if (e.key === '/' || (e.key.toLowerCase() === 'k' && (e.ctrlKey || e.metaKey))) {
    if (searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  }
});
