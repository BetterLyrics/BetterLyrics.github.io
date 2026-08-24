const translations = {
  zh: {
    logoText: 'BetterLyrics',
    pageTitle: 'BetterLyrics 文档',
    heroTitle: 'BetterLyrics',
    heroSubtitle: '曲拨心弦，词落云笺。',
    searchPlaceholder: '搜索文档...',
    btnMsStore: '微软商店',
    btnGithub: 'GitHub 下载',
    btnDocs: '文档'
  },
  en: {
    logoText: 'BetterLyrics',
    pageTitle: 'BetterLyrics Documentation',
    heroTitle: 'BetterLyrics',
    heroSubtitle: 'Strums the Heartstrings, Graces the Wordscapes.',
    searchPlaceholder: 'Search docs...',
    btnMsStore: 'Microsoft Store',
    btnGithub: 'GitHub Releases',
    btnDocs: 'Documentation'
  },
};

let currentLang = localStorage.getItem('lang') || 'en';
let searchCache = {};
let isFetchingSearchCache = false;

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (el.tagName === 'TITLE') {
      document.title = translations[lang][key];
    } else {
      const newText = translations[lang][key];
      if (el.innerHTML !== newText) {
        el.classList.add('lang-switching');
        setTimeout(() => {
          el.innerHTML = newText;
          el.classList.remove('lang-switching');
        }, 300);
      }
    }
  });

  // Translate Astro's hardcoded Footnotes title (all instances)
  const footnoteLabels = document.querySelectorAll('[id="footnote-label"]');
  footnoteLabels.forEach(footnoteLabel => {
    const newText = lang === 'zh' ? '脚注' : 'Footnotes';
    if (footnoteLabel.textContent !== newText) {
      footnoteLabel.classList.add('lang-switching');
      setTimeout(() => {
        footnoteLabel.textContent = newText;
        footnoteLabel.classList.remove('lang-switching');
      }, 300);
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', translations[lang][key]);
  });
  
  // Toggle Dual-Render Markdown & Sidebar visibility
  document.querySelectorAll('article[data-lang]').forEach(article => {
    if (article.getAttribute('data-lang') === lang) {
      article.style.display = 'block';
    } else {
      article.style.display = 'none';
    }
  });

  const sidebarEn = document.querySelector('.sidebar-lang-en');
  const sidebarZh = document.querySelector('.sidebar-lang-zh');
  if (sidebarEn && sidebarZh) {
    if (lang === 'en') {
      sidebarEn.style.display = 'block';
      sidebarZh.style.display = 'none';
    } else {
      sidebarEn.style.display = 'none';
      sidebarZh.style.display = 'block';
    }
  }
}

// Ensure global listeners are added only once
let isGlobalInitialized = false;

document.addEventListener('astro:page-load', () => {
  // Update sidebar active link dynamically if persisted
  const currentPath = window.location.pathname;
  document.querySelectorAll('#sidebar-nav a').forEach(a => {
    if (a.getAttribute('href') === currentPath) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });

  // 1. Language logic setup
  const langContainer = document.getElementById('lang-switch-container');
  const langToggle = document.getElementById('lang-toggle');
  const langMenu = document.getElementById('lang-menu');
  const currentLangText = document.getElementById('current-lang');
  const langOptions = langMenu ? langMenu.querySelectorAll('li') : [];

  if (langToggle) {
    if (!langToggle.dataset.bound) {
      langToggle.dataset.bound = 'true';
      langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        langContainer.classList.toggle('open');
      });
    }
  }

  // Initialize language on load
  langOptions.forEach((opt) => {
    if (opt.getAttribute('data-value') === currentLang) {
      opt.classList.add('active');
      if (currentLangText) currentLangText.textContent = opt.textContent;
    } else {
      opt.classList.remove('active');
    }
  });
  applyTranslations(currentLang);

  langOptions.forEach((option) => {
    if (!option.dataset.bound) {
      option.dataset.bound = 'true';
      option.addEventListener('click', (e) => {
        const lang = e.target.getAttribute('data-value');
        const langText = e.target.textContent;

        currentLang = lang;
        localStorage.setItem('lang', lang);
        if (currentLangText) currentLangText.textContent = langText;
        langOptions.forEach((opt) => opt.classList.remove('active'));
        e.target.classList.add('active');
        if (langContainer) langContainer.classList.remove('open');

        applyTranslations(lang);
      });
    }
  });

  // 2. Theme switching
  const themeSwitch = document.getElementById('theme-switch');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (themeSwitch) {
    if (!themeSwitch.dataset.bound) {
      themeSwitch.dataset.bound = 'true';
      themeSwitch.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        let switchToTheme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', switchToTheme);
        localStorage.setItem('theme', switchToTheme);
      });
    }
  }

  // 3.5 Intersection Observer
  const revealElements = document.querySelectorAll('.reveal');
  const revealCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  };
  const revealObserver = new IntersectionObserver(revealCallback, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  revealElements.forEach((el) => revealObserver.observe(el));

  // Custom Cursors
  const cursorRing = document.querySelector('.custom-cursor-ring');
  if (window.matchMedia('(pointer: fine)').matches && cursorRing) {
    const hoverElements = document.querySelectorAll('a, button, .lang-menu li, #lang-toggle');
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
    });

    const textElements = document.querySelectorAll('p, h1, h2, h3, span, .logo');
    textElements.forEach((el) => {
      if (el.closest('a') || el.closest('button') || el.classList.contains('active')) return;
      el.addEventListener('mouseenter', () => cursorRing.classList.add('text-hover'));
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('text-hover'));
    });
  }

  // Code Block formatting
  document.querySelectorAll('pre').forEach(pre => {
    if (pre.parentNode.classList.contains('code-block-wrapper')) return;
    const code = pre.querySelector('code');
    if (!code) return;
    
    let lang = 'TEXT';
    const langClass = Array.from(code.classList).find(c => c.startsWith('language-'));
    if (langClass) {
      lang = langClass.replace('language-', '').toUpperCase();
    }
    
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';
    
    const header = document.createElement('div');
    header.className = 'code-block-header';
    header.innerHTML = `<span class="code-block-lang">${lang}</span><button class="code-block-copy" title="Copy code"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></button>`;
    
    const copyBtn = header.querySelector('.code-block-copy');
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(code.textContent || '').then(() => {
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

  // Search
  const searchInput = document.getElementById('search-input');
  const searchResultsContainer = document.getElementById('search-results');
  if (searchInput && searchResultsContainer) {
    if (!searchInput.dataset.bound) {
      searchInput.dataset.bound = 'true';
      searchInput.addEventListener('focus', () => prepareSearchCache(currentLang));
      searchInput.addEventListener('input', async (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (!query) {
          searchResultsContainer.classList.remove('active');
          searchResultsContainer.innerHTML = '';
          return;
        }
        if (!searchCache[currentLang]) {
          searchResultsContainer.classList.add('active');
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
            let snippet = '';
            if (contentIndex !== -1) {
              const start = Math.max(0, contentIndex - 40);
              const end = Math.min(doc.content.length, contentIndex + query.length + 40);
              snippet = (start > 0 ? '...' : '') + doc.content.substring(start, end) + (end < doc.content.length ? '...' : '');
            } else {
              snippet = doc.content.substring(0, 80) + '...';
            }
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
            <a href="${r.path}" class="search-result-item">
              <div class="search-result-title">${r.titleHtml}</div>
              <div class="search-result-snippet">${r.snippetHtml}</div>
            </a>
          `).join('');
        }
        searchResultsContainer.classList.add('active');
      });
    }
  }

  // Custom Element Rendering
  document.querySelectorAll('cardGrid, cardgrid').forEach(grid => {
    grid.style.display = 'grid';
    grid.classList.add('card-grid');
  });

  document.querySelectorAll('linkCard, linkcard').forEach(card => {
    const title = card.getAttribute('title') || '';
    const desc = card.getAttribute('description') || '';
    const href = card.getAttribute('href') || '#';
    const a = document.createElement('a');
    a.href = href;
    a.className = 'link-card';
    a.target = '_blank';
    a.innerHTML = `<div class="link-card-title">${title}</div><div class="link-card-desc">${desc}</div>`;
    card.parentNode.replaceChild(a, card);
  });

  document.querySelectorAll('badge').forEach(badge => {
    const variant = badge.getAttribute('variant') || 'note';
    const text = badge.getAttribute('text') || '';
    const span = document.createElement('span');
    span.className = `nav-badge nav-badge-${variant}`;
    span.textContent = text;
    badge.parentNode.replaceChild(span, badge);
  });

  document.querySelectorAll('card').forEach(card => {
    const title = card.getAttribute('title') || '';
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `${title ? `<div class="card-title">${title}</div>` : ''}<div class="card-content"></div>`;
    const contentContainer = div.querySelector('.card-content');
    while (card.firstChild) {
      contentContainer.appendChild(card.firstChild);
    }
    card.parentNode.replaceChild(div, card);
  });

  document.querySelectorAll('.markdown-content p').forEach(p => {
    let text = p.innerHTML.trim();
    if (text.startsWith(':::')) {
      const match = text.match(/^:::([a-zA-Z]+)(?:\[(.*?)\])?([\s\S]*?):::$/);
      if (match) {
        const type = match[1].toLowerCase();
        let title = match[2] ? match[2].trim() : type.charAt(0).toUpperCase() + type.slice(1);
        let content = match[3].trim();
        content = content.replace(/^(?:<br>|\n|\s)+/, '').replace(/(?:<br>|\n|\s)+$/, '');
        
        const div = document.createElement('div');
        div.className = `admonition admonition-${type}`;
        div.innerHTML = `<div class="admonition-title">${title}</div><div class="admonition-content">${content}</div>`;
        p.parentNode.replaceChild(div, p);
      }
    }
  });

  // GitHub Flavored Admonitions (> [!TYPE])
  document.querySelectorAll('.markdown-content blockquote').forEach(bq => {
    const p = bq.querySelector('p');
    if (p) {
      let text = p.innerHTML.trim();
      const match = text.match(/^\[!(.*?)\](?:<br>|\s)*([\s\S]*)$/);
      if (match) {
        const type = match[1].toLowerCase();
        const title = type.charAt(0).toUpperCase() + type.slice(1);
        let content = match[2].trim();
        content = content.replace(/^(?:<br>|\n|\s)+/, '').replace(/(?:<br>|\n|\s)+$/, '');
        
        const div = document.createElement('div');
        div.className = `admonition admonition-${type}`;
        div.innerHTML = `<div class="admonition-title">${title}</div><div class="admonition-content">${content}</div>`;
        
        // Keep other children of blockquote
        const contentDiv = div.querySelector('.admonition-content');
        Array.from(bq.childNodes).forEach(node => {
          if (node !== p) {
            contentDiv.appendChild(node.cloneNode(true));
          }
        });

        bq.parentNode.replaceChild(div, bq);
      }
    }
  });

  // Page Transition Intercept (Curtain)
  const curtain = document.getElementById('page-curtain');
  if (curtain) {
    const transitionState = sessionStorage.getItem('page-transition');
    if (transitionState === 'slide-down' || transitionState === 'slide-up') {
      curtain.style.display = 'block';
      curtain.className = `page-transition-curtain curtain-${transitionState}-enter loaded`;
      sessionStorage.removeItem('page-transition');
    }

    document.querySelectorAll('a[href^="/"]').forEach(link => {
      if (link.dataset.curtainBound) return;
      link.dataset.curtainBound = 'true';
      
      link.addEventListener('click', (e) => {
        if (link.getAttribute('target') === '_blank') return;
        
        const currentPath = window.location.pathname;
        const targetPath = link.getAttribute('href');
        
        // If navigating docs-to-docs, DO NOT trigger curtain, just let ViewTransitions fade
        if (currentPath.includes('/docs/') && targetPath.includes('/docs/')) {
          return;
        }

        e.preventDefault();
        const isHome = link.getAttribute('href') === '/';
        const direction = isHome ? 'slide-down' : 'slide-up';
        
        curtain.style.display = 'block';
        curtain.className = `page-transition-curtain curtain-${direction}-exit`;
        void curtain.offsetWidth; // Force reflow
        curtain.classList.add('active');
        
        sessionStorage.setItem('page-transition', direction);
        setTimeout(() => { window.location.href = link.href; }, 600);
      });
    });
  }

  // --- GLOBAL LISTENERS (Attached only once) ---
  if (!isGlobalInitialized) {
    document.addEventListener('click', (e) => {
      const langContainerGlobal = document.getElementById('lang-switch-container');
      if (langContainerGlobal) langContainerGlobal.classList.remove('open');
      const sr = document.getElementById('search-results');
      const si = document.getElementById('search-input');
      if (sr && si && !si.contains(e.target) && !sr.contains(e.target)) {
        sr.classList.remove('active');
      }
    });

    document.addEventListener('mousemove', (e) => {
      const shapes = document.querySelectorAll('.shape');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 20;
        shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    });

    const cursorDot = document.querySelector('.custom-cursor-dot');
    const cursorRing = document.querySelector('.custom-cursor-ring');
    if (window.matchMedia('(pointer: fine)').matches && cursorDot && cursorRing) {
      let mouseX = -100, mouseY = -100;
      let ringX = -100, ringY = -100;
      window.addEventListener('mousemove', (e) => {
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
    }

    document.addEventListener('keydown', (e) => {
      const searchInputGlobal = document.getElementById('search-input');
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        if (e.key === 'Escape' && e.target === searchInputGlobal) {
          searchInputGlobal.value = '';
          searchInputGlobal.blur();
          const sr = document.getElementById('search-results');
          if (sr) sr.classList.remove('active');
        }
        return;
      }
      if (e.key === '/' || (e.key.toLowerCase() === 'k' && (e.ctrlKey || e.metaKey))) {
        if (searchInputGlobal) {
          e.preventDefault();
          searchInputGlobal.focus();
        }
      }
    });

    isGlobalInitialized = true;
  }
});

function getCleanHash(path) {
  return path.replace('docs/zh-cn/', '').replace('docs/', '').replace(/\.md$/, '');
}

function stripMarkdown(md) {
  return md.replace(/^---[\s\S]*?---\r?\n/, '').replace(/<[^>]+>/g, '').replace(/[#*`_\[\]()>-]/g, '').replace(/\n+/g, ' ').trim();
}

async function prepareSearchCache(lang) {
  if (searchCache[lang]) return;
  if (isFetchingSearchCache) return;
  isFetchingSearchCache = true;
  try {
    const res = await fetch('/sidebar.json');
    const sidebarData = await res.json();
    const data = sidebarData[lang];
    if (!data) return;
    const items = [];
    data.forEach(group => group.items.forEach(item => items.push(item)));
    const cache = [];
    await Promise.all(items.map(async (item) => {
      try {
        const fetchPath = '/docs/' + getCleanHash(item.path);
        const req = await fetch(fetchPath);
        if (req.ok) {
          const html = await req.text();
          cache.push({ title: item.title, path: fetchPath, content: stripMarkdown(html) });
        }
      } catch (e) {
        console.error('Failed to fetch for search cache', item.path);
      }
    }));
    searchCache[lang] = cache;
  } catch (err) {
    console.error('Failed to prepare search cache', err);
  } finally {
    isFetchingSearchCache = false;
  }
}
