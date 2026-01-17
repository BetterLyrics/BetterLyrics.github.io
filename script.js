// --- 翻译数据 ---
const translations = {
  en: {
    nav_plugins_store: "Plugins Store",
    nav_docs: "Docs",
    hero_title: "Lyrics that Move<br>Visuals that Delight",
    hero_desc:
      "An elegant and deeply customizable lyrics visualizer & versatile music player, built with WinUI3/Win2D",
    github_sub: "Check it out on",
    feat_1_title: "Native Fluent Design",
    feat_1_desc:
      "Embraces Windows 11 aesthetics with Mica material, rounded corners, and smooth animations.",
    feat_2_title: "Sources & Plugins",
    feat_2_desc:
      "Integrated with multiple popular lyrics sources right out of the box. Extend capabilities with plugins.",
    feat_3_title: "Lightweight & Fast",
    feat_3_desc:
      "Built with modern .NET and code trimming technology. Ensures a compact footprint and instant startup.",
    footer: "© 2025-2026 BetterLyrics. Licensed under GPL-3.0.",
  },
  zh: {
    nav_plugins_store: "插件商店",
    nav_docs: "文档",
    hero_title: "曲动人心 词悦双目",
    hero_desc:
      "一款优雅且高度自定义的歌词可视化与全能音乐播放应用，基于 WinUI3/Win2D 构建",
    github_sub: "前往下载",
    feat_1_title: "原生流畅设计",
    feat_1_desc:
      "完美契合 Windows 11 美学，拥有云母 (Mica) 材质、圆角设计和丝滑的动画效果。",
    feat_2_title: "多源与插件",
    feat_2_desc:
      "开箱即用，内置多种流行歌词源支持。并通过插件系统无限扩展功能。",
    feat_3_title: "轻量且极速",
    feat_3_desc:
      "基于现代 .NET 和代码裁剪技术构建。体积小巧，启动瞬间完成，几乎不占内存。",
    footer: "© 2025-2026 BetterLyrics. Licensed under GPL-3.0.",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. 初始化状态
  const userLang = localStorage.getItem("lang") || "en";
  const userTheme = localStorage.getItem("theme") || "dark";

  setLanguage(userLang);
  setTheme(userTheme);

  // 2. 绑定事件
  document.getElementById("btn-lang").addEventListener("click", () => {
    const current = localStorage.getItem("lang") || "en";
    const next = current === "en" ? "zh" : "en";
    setLanguage(next);
  });

  document.getElementById("btn-theme").addEventListener("click", () => {
    const current = localStorage.getItem("theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
  });

  // 3. 光晕特效 (保持原有)
  const glow = document.getElementById("glow-effect");
  document.addEventListener("mousemove", (e) => {
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
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key]; // 使用 innerHTML 以支持 <strong> 等标签
    }
  });

  // 更新按钮文字
  document.querySelector(".lang-text").innerText = lang === "en" ? "中" : "En";

  // 保存设置
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
}

function setTheme(theme) {
  // 1. 设置 html 属性 (CSS 变量生效的关键)
  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }

  // 2. 切换图标显示状态
  // 我们使用了 class="icon-sun" 和 class="icon-moon" 来定位 SVG
  const sunIcon = document.querySelector(".icon-sun");
  const moonIcon = document.querySelector(".icon-moon");

  // 加上 ?. 防止找不到元素时 JS 报错崩溃
  if (theme === "light") {
    // 浅色模式：隐藏太阳，显示月亮
    if (sunIcon) sunIcon.style.display = "none";
    if (moonIcon) moonIcon.style.display = "block";
  } else {
    // 深色模式：显示太阳，隐藏月亮
    if (sunIcon) sunIcon.style.display = "block";
    if (moonIcon) moonIcon.style.display = "none";
  }

  // 3. 记住用户选择
  localStorage.setItem("theme", theme);
}
