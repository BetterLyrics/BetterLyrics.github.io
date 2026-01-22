// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNova from 'starlight-theme-nova';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightThemeNova(/* options */),
      ],
      favicon: "/public/favicon.ico",
      title: "BetterLyrics",
      customCss: [
        // 你的自定义 CSS 文件的相对路径
        "./src/styles/custom.css",
      ],
      logo: {
        src: "./src/assets/logo.png",
      },
      // 为此网站设置英语为默认语言。
      defaultLocale: "root",
      locales: {
        // 英文文档在 `src/content/docs/` 中。
        root: {
          label: "English",
          lang: "en",
        },
        // 简体中文文档在 `src/content/docs/zh-Hans/` 中。
        "zh-cn": {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/BetterLyrics/BetterLyrics.github.io",
        },
      ],
      lastUpdated: true,
      editLink: {
        baseUrl:
          "https://github.com/BetterLyrics/BetterLyrics.github.io/edit/main/",
      },
    }),
  ],
});
