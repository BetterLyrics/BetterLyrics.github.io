// --- 翻译数据 ---
const translations = {
    en: {
        nav_plugins_store: "Plugins Store",
        nav_docs: "Docs",
        hero_title: "Lyrics, Reimagined <br>for Windows.",
        hero_desc: "Experience the modern way to enjoy lyrics. Built with <strong>WinUI 3</strong> for seamless integration, high performance, and stunning aesthetics.",
        github_sub: "Check it out on",
        feat_1_title: "Native Fluent Design",
        feat_1_desc: "Embraces Windows 11 aesthetics with Mica material, rounded corners, and smooth animations.",
        feat_2_title: "Sources & Plugins",
        feat_2_desc: "Integrated with multiple popular lyrics sources right out of the box. Extend capabilities with plugins.",
        feat_3_title: "Lightweight & Fast",
        feat_3_desc: "Built with modern .NET and code trimming technology. Ensures a compact footprint and instant startup.",
        footer: "© 2026 BetterLyrics Team. Licensed under MIT."
    },
    zh: {
        nav_plugins_store: "插件商店",
        nav_docs: "文档",
        hero_title: "重新定义 Windows <br>歌词体验。",
        hero_desc: "体验现代化的桌面歌词。基于 <strong>WinUI 3</strong> 构建，为您带来原生的系统融合、极致的性能和令人惊叹的美学设计。",
        github_sub: "前往下载",
        feat_1_title: "原生流畅设计",
        feat_1_desc: "完美契合 Windows 11 美学，拥有云母 (Mica) 材质、圆角设计和丝滑的动画效果。",
        feat_2_title: "多源与插件",
        feat_2_desc: "开箱即用，内置多种流行歌词源支持。并通过插件系统无限扩展功能。",
        feat_3_title: "轻量且极速",
        feat_3_desc: "基于现代 .NET 和代码裁剪技术构建。体积小巧，启动瞬间完成，几乎不占内存。",
        footer: "© 2026 BetterLyrics Team. Licensed under MIT."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. 初始化状态
    const userLang = localStorage.getItem('lang') || 'en';
    const userTheme = localStorage.getItem('theme') || 'dark';

    setLanguage(userLang);
    setTheme(userTheme);

    // 2. 绑定事件
    document.getElementById('btn-lang').addEventListener('click', () => {
        const current = localStorage.getItem('lang') || 'en';
        const next = current === 'en' ? 'zh' : 'en';
        setLanguage(next);
    });

    document.getElementById('btn-theme').addEventListener('click', () => {
        const current = localStorage.getItem('theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
    });

    // 3. 光晕特效 (保持原有)
    const glow = document.getElementById('glow-effect');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        const moveX = (x - 0.5) * 40; 
        const moveY = (y - 0.5) * 40;
        glow.style.transform = `translateX(calc(-50% + ${moveX}px)) translateY(${moveY}px)`;
    });
});

// --- 功能函数 ---

function setLanguage(lang) {
    // 切换所有带 data-i18n 的文本
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key]; // 使用 innerHTML 以支持 <strong> 等标签
        }
    });

    // 更新按钮文字
    document.querySelector('.lang-text').innerText = lang === 'en' ? '中' : 'En';
    
    // 保存设置
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
}

function setTheme(theme) {
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        document.querySelector('.sun-icon').style.display = 'none';
        document.querySelector('.moon-icon').style.display = 'block';
    } else {
        document.documentElement.removeAttribute('data-theme');
        document.querySelector('.sun-icon').style.display = 'block';
        document.querySelector('.moon-icon').style.display = 'none';
    }
    
    localStorage.setItem('theme', theme);
}