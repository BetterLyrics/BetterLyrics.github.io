// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { viewTransitions } from "astro-vtbot/starlight-view-transitions";
import mermaid from "astro-mermaid";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mermaid({
      theme: "default",
      autoTheme: true,
      mermaidConfig: {
        flowchart: {
          curve: "basis",
        },
      },
    }),
    starlight({
      sidebar: [
        {
          label: "Get Started",
          translations: {
            "zh-CN": "从这里开始",
          },
          items: [
            { slug: "get-started/welcome" },
            { slug: "get-started/download" },
            { slug: "get-started/install" },
          ],
        },
        {
          label: "Configuration & Settings",
          translations: {
            "zh-CN": "配置与设置",
          },
          items: [
            { slug: "settings/appearance-and-behaviors" },
            { slug: "settings/lyrics-style-and-effects" },
            { slug: "settings/background-visuals" },
            { slug: "settings/translation-and-plugins" },
          ],
        },
        {
          label: "Core Features",
          translations: {
            "zh-CN": "核心功能",
          },
          items: [
            { slug: "features/music-gallery" },
            { slug: "features/layout-editor" },
            {
              label: "Lyrics Config",
              translations: {
                "zh-CN": "歌词源配置",
              },
              items: [
                { slug: "features/lyrics-cfg/apple-music" },
                { slug: "features/lyrics-cfg/locallyrics" },
              ]
            }
          ],
        },
        {
          label: "Player Integration",
          translations: {
            "zh-CN": "播放器对接",
          },
          autogenerate: { directory: "player-cfg" },
        },
        {
          label: "Ecosystem",
          translations: {
            "zh-CN": "扩展生态",
          },
          items: [
            { slug: "add-ons/layouts-store" },
            { slug: "add-ons/modes-store" },
            { slug: "add-ons/plugins-store" },
          ],
        },
        {
          label: "FAQ",
          translations: {
            "zh-CN": "常见问题及解答",
          },
          items: [
            { slug: "faq/data-and-feedback" },
            { slug: "faq/lyrics-display" },
            { slug: "faq/modes-and-appearance" },
            { slug: "faq/playback-and-connection" },
            { slug: "faq/window-and-interaction" },
          ],
        },
        {
          label: "Plugin Dev",
          translations: {
            "zh-CN": "插件开发",
          },
          items: [{ slug: "plugin-dev/intro" }],
        },
      ],
      plugins: [viewTransitions()],
      favicon: "/favicon.ico",
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
        // 简体中文文档在 `src/content/docs/zh-cn/` 中。
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
