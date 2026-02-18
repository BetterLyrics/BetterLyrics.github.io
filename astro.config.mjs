// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { viewTransitions } from "astro-vtbot/starlight-view-transitions";
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mermaid({
      theme: 'default',
      autoTheme: true,
      mermaidConfig: {
        flowchart: {
          curve: 'basis'
        }
      }
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
          ],
        },
        {
          label: "Settings",
          translations: {
            "zh-CN": "设置",
          },
          items: [{ slug: "settings/appearance-and-behaviors" }],
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
          label: "Lyrics Config",
          translations: {
            "zh-CN": "歌词源配置",
          },
          items: [{ slug: "lyrics-cfg/apple-music" }],
        },
        {
          label: "Player Config",
          translations: {
            "zh-CN": "播放器配置",
          },
          items: [
            { slug: "player-cfg" },
            {
              slug: "player-cfg/aimp",
              badge: { text: "Config", variant: "note" },
            },
            { slug: "player-cfg/amll-player" },
            { slug: "player-cfg/apple-music" },
            { slug: "player-cfg/betterlyrics" },
            {
              slug: "player-cfg/foobar2000",
              badge: { text: "Config & Limited", variant: "caution" },
            },
            { slug: "player-cfg/google-chrome" },
            { slug: "player-cfg/hyplayer" },
            {
              slug: "player-cfg/itunes",
              badge: { text: "Config", variant: "note" },
            },
            {
              slug: "player-cfg/kugoumusic",
              badge: { text: "Limited", variant: "caution" },
            },
            { slug: "player-cfg/listen1" },
            {
              slug: "player-cfg/lx-music",
              badge: { text: "Config", variant: "note" },
            },
            { slug: "player-cfg/microsoft-edge" },
            { slug: "player-cfg/moekoe-music" },
            {
              slug: "player-cfg/musicbee",
              badge: { text: "Config", variant: "note" },
            },
            { slug: "player-cfg/musicplayer2" },
            {
              slug: "player-cfg/neteasecloudmusic",
              badge: { text: "Config", variant: "note" },
            },
            { slug: "player-cfg/planetmusic" },
            { slug: "player-cfg/potplayer" },
            {
              slug: "player-cfg/qqmusic",
              badge: { text: "Config", variant: "note" },
            },
            {
              slug: "player-cfg/salt-player-for-windows",
              badge: { text: "Limited", variant: "caution" },
            },
            { slug: "player-cfg/spotify" },
            {
              slug: "player-cfg/windows-media-player",
              badge: { text: "Limited", variant: "caution" },
            },
          ],
        },
        {
          label: "Plugin Dev",
          translations: {
            "zh-CN": "插件开发",
          },
          items: [
            { slug: "plugin-dev/intro" },
            { slug: "plugin-dev/setup" },
            { slug: "plugin-dev/workflow" },
            { slug: "plugin-dev/troubleshooting" },
          ],
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
