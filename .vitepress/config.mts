import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'

export default defineConfig({
  ignoreDeadLinks: true,
  title: 'BetterLyrics',
  description: 'The official documentation site for BetterLyrics.',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        editLink: {
          pattern: 'https://github.com/BetterLyrics/BetterLyrics.github.io/edit/main/:path',
          text: 'Edit this page on GitHub'
        },
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Documentation', link: '/docs/get-started/welcome' }
        ],
        sidebar: [
          {
            "text": "Get Started",
            "collapsed": false,
            "items": [
              {
                "text": "Welcome to BetterLyrics",
                "link": "/docs/get-started/welcome"
              },
              {
                "text": "Download",
                "link": "/docs/get-started/download"
              },
              {
                "text": "Installation",
                "link": "/docs/get-started/install"
              }
            ]
          },
          {
            "text": "Features",
            "collapsed": false,
            "items": [
              {
                "text": "Layout Editor",
                "link": "/docs/features/layout-editor"
              },
              {
                "text": "Music Gallery & Local Library",
                "link": "/docs/features/music-gallery"
              },
              {
                "text": "Apple Music",
                "link": "/docs/features/lyrics-cfg/apple-music"
              },
              {
                "text": "Local Lyric Sources (and Music Files)",
                "link": "/docs/features/lyrics-cfg/locallyrics"
              }
            ]
          },
          {
            "text": "Player Configuration",
            "collapsed": false,
            "items": [
              {
                "text": "Player Setup Guide",
                "link": "/docs/player-cfg/index"
              },
              {
                "text": "AIMP <span class=\"VPBadge info\" style=\"margin-left:6px;transform:translateY(-2px);\">Config</span>",
                "link": "/docs/player-cfg/aimp"
              },
              {
                "text": "AMLL Player",
                "link": "/docs/player-cfg/amll-player"
              },
              {
                "text": "Apple Music",
                "link": "/docs/player-cfg/apple-music"
              },
              {
                "text": "BetterLyrics",
                "link": "/docs/player-cfg/betterlyrics"
              },
              {
                "text": "Bodian Music <span class=\"VPBadge info\" style=\"margin-left:6px;transform:translateY(-2px);\">Config</span>",
                "link": "/docs/player-cfg/bodian-music"
              },
              {
                "text": "foobar2000 <span class=\"VPBadge info\" style=\"margin-left:6px;transform:translateY(-2px);\">Config</span><span class=\"VPBadge warning\" style=\"margin-left:4px;transform:translateY(-2px);\">Limited</span>",
                "link": "/docs/player-cfg/foobar2000"
              },
              {
                "text": "Google Chrome",
                "link": "/docs/player-cfg/google-chrome"
              },
              {
                "text": "HyPlayer",
                "link": "/docs/player-cfg/hyplayer"
              },
              {
                "text": "iTunes <span class=\"VPBadge info\" style=\"margin-left:6px;transform:translateY(-2px);\">Config</span>",
                "link": "/docs/player-cfg/itunes"
              },
              {
                "text": "KuGou <span class=\"VPBadge warning\" style=\"margin-left:6px;transform:translateY(-2px);\">Limited</span>",
                "link": "/docs/player-cfg/kugoumusic"
              },
              {
                "text": "Listen 1",
                "link": "/docs/player-cfg/listen1"
              },
              {
                "text": "LX Music <span class=\"VPBadge info\" style=\"margin-left:6px;transform:translateY(-2px);\">Config</span>",
                "link": "/docs/player-cfg/lx-music"
              },
              {
                "text": "Microsoft Edge",
                "link": "/docs/player-cfg/microsoft-edge"
              },
              {
                "text": "MoeKoe Music",
                "link": "/docs/player-cfg/moekoe-music"
              },
              {
                "text": "Music Center for PC <span class=\"VPBadge info\" style=\"margin-left:6px;transform:translateY(-2px);\">Config</span>",
                "link": "/docs/player-cfg/music-center-for-pc"
              },
              {
                "text": "MusicBee <span class=\"VPBadge info\" style=\"margin-left:6px;transform:translateY(-2px);\">Config</span>",
                "link": "/docs/player-cfg/musicbee"
              },
              {
                "text": "MusicPlayer2",
                "link": "/docs/player-cfg/musicplayer2"
              },
              {
                "text": "NetEase Cloud Music <span class=\"VPBadge info\" style=\"margin-left:6px;transform:translateY(-2px);\">Config</span>",
                "link": "/docs/player-cfg/neteasecloudmusic"
              },
              {
                "text": "PlanetMusic",
                "link": "/docs/player-cfg/planetmusic"
              },
              {
                "text": "PotPlayer",
                "link": "/docs/player-cfg/potplayer"
              },
              {
                "text": "QQ Music <span class=\"VPBadge info\" style=\"margin-left:6px;transform:translateY(-2px);\">Config</span>",
                "link": "/docs/player-cfg/qqmusic"
              },
              {
                "text": "Salt Player for Windows <span class=\"VPBadge warning\" style=\"margin-left:6px;transform:translateY(-2px);\">Limited</span>",
                "link": "/docs/player-cfg/salt-player-for-windows"
              },
              {
                "text": "Spotify",
                "link": "/docs/player-cfg/spotify"
              },
              {
                "text": "Windows Media Player <span class=\"VPBadge warning\" style=\"margin-left:6px;transform:translateY(-2px);\">Limited</span>",
                "link": "/docs/player-cfg/windows-media-player"
              }
            ]
          },
          {
            "text": "Settings",
            "collapsed": false,
            "items": [
              {
                "text": "General & Behaviors",
                "link": "/docs/settings/appearance-and-behaviors"
              },
              {
                "text": "Background & Visuals",
                "link": "/docs/settings/background-visuals"
              },
              {
                "text": "Lyrics Styles & Effects",
                "link": "/docs/settings/lyrics-style-and-effects"
              },
              {
                "text": "Translation & Romanization",
                "link": "/docs/settings/translation-and-plugins"
              }
            ]
          },
          {
            "text": "Add-ons",
            "collapsed": false,
            "items": [
              {
                "text": "Layouts Store",
                "link": "/docs/add-ons/layouts-store"
              },
              {
                "text": "Modes Store",
                "link": "/docs/add-ons/modes-store"
              },
              {
                "text": "Plugins Store",
                "link": "/docs/add-ons/plugins-store"
              }
            ]
          },
          {
            "text": "Plugin Dev",
            "collapsed": false,
            "items": [
              {
                "text": "Plugin Development Guide",
                "link": "/docs/plugin-dev/intro"
              }
            ]
          },
          {
            "text": "FAQ",
            "collapsed": false,
            "items": [
              {
                "text": "Data & Feedback",
                "link": "/docs/FAQ/data-and-feedback"
              },
              {
                "text": "Lyrics Display",
                "link": "/docs/FAQ/lyrics-display"
              },
              {
                "text": "Modes & Appearance",
                "link": "/docs/FAQ/modes-and-appearance"
              },
              {
                "text": "Playback & Connection",
                "link": "/docs/FAQ/playback-and-connection"
              },
              {
                "text": "Window & Interaction",
                "link": "/docs/FAQ/window-and-interaction"
              }
            ]
          }
        ]
      }
    },
    'zh-cn': {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        editLink: {
          pattern: 'https://github.com/BetterLyrics/BetterLyrics.github.io/edit/main/:path',
          text: '在 GitHub 上编辑此页'
        },
        outline: {
          label: '本页导航'
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        lastUpdated: {
          text: '最后更新于'
        },
        nav: [
          { text: '首页', link: '/zh-cn/' },
          { text: '文档', link: '/zh-cn/docs/get-started/welcome' }
        ],
        sidebar: [
          {
            "text": "快速开始",
            "collapsed": false,
            "items": [
              {
                "text": "欢迎使用 BetterLyrics",
                "link": "/zh-cn/docs/get-started/welcome"
              },
              {
                "text": "下载",
                "link": "/zh-cn/docs/get-started/download"
              },
              {
                "text": "安装",
                "link": "/zh-cn/docs/get-started/install"
              }
            ]
          },
          {
            "text": "功能介绍",
            "collapsed": false,
            "items": [
              {
                "text": "布局编辑器",
                "link": "/zh-cn/docs/features/layout-editor"
              },
              {
                "text": "媒体库与本地音乐",
                "link": "/zh-cn/docs/features/music-gallery"
              },
              {
                "text": "Apple Music",
                "link": "/zh-cn/docs/features/lyrics-cfg/apple-music"
              },
              {
                "text": "本地歌词源（及音乐文件）",
                "link": "/zh-cn/docs/features/lyrics-cfg/locallyrics"
              }
            ]
          },
          {
            "text": "播放器配置",
            "collapsed": false,
            "items": [
              {
                "text": "播放器适配指南",
                "link": "/zh-cn/docs/player-cfg/index"
              },
              {
                "text": "AIMP <span class=\"VPBadge info\" style=\"margin-left:6px;transform:translateY(-2px);\">Config</span>",
                "link": "/zh-cn/docs/player-cfg/aimp"
              },
              {
                "text": "AMLL Player",
                "link": "/zh-cn/docs/player-cfg/amll-player"
              },
              {
                "text": "Apple Music",
                "link": "/zh-cn/docs/player-cfg/apple-music"
              },
              {
                "text": "BetterLyrics",
                "link": "/zh-cn/docs/player-cfg/betterlyrics"
              },
              {
                "text": "波点音乐 <span class=\"VPBadge info\" style=\"margin-left:6px;transform:translateY(-2px);\">Config</span>",
                "link": "/zh-cn/docs/player-cfg/bodian-music"
              },
              {
                "text": "foobar2000 <span class=\"VPBadge info\" style=\"margin-left:6px;transform:translateY(-2px);\">Config</span><span class=\"VPBadge warning\" style=\"margin-left:4px;transform:translateY(-2px);\">Limited</span>",
                "link": "/zh-cn/docs/player-cfg/foobar2000"
              },
              {
                "text": "Google Chrome",
                "link": "/zh-cn/docs/player-cfg/google-chrome"
              },
              {
                "text": "HyPlayer",
                "link": "/zh-cn/docs/player-cfg/hyplayer"
              },
              {
                "text": "iTunes <span class=\"VPBadge info\" style=\"margin-left:6px;transform:translateY(-2px);\">Config</span>",
                "link": "/zh-cn/docs/player-cfg/itunes"
              },
              {
                "text": "酷狗音乐 <span class=\"VPBadge warning\" style=\"margin-left:6px;transform:translateY(-2px);\">Limited</span>",
                "link": "/zh-cn/docs/player-cfg/kugoumusic"
              },
              {
                "text": "Listen 1",
                "link": "/zh-cn/docs/player-cfg/listen1"
              },
              {
                "text": "LX Music <span class=\"VPBadge info\" style=\"margin-left:6px;transform:translateY(-2px);\">Config</span>",
                "link": "/zh-cn/docs/player-cfg/lx-music"
              },
              {
                "text": "Microsoft Edge",
                "link": "/zh-cn/docs/player-cfg/microsoft-edge"
              },
              {
                "text": "MoeKoe Music",
                "link": "/zh-cn/docs/player-cfg/moekoe-music"
              },
              {
                "text": "Music Center for PC <span class=\"VPBadge info\" style=\"margin-left:6px;transform:translateY(-2px);\">Config</span>",
                "link": "/zh-cn/docs/player-cfg/music-center-for-pc"
              },
              {
                "text": "MusicBee <span class=\"VPBadge info\" style=\"margin-left:6px;transform:translateY(-2px);\">Config</span>",
                "link": "/zh-cn/docs/player-cfg/musicbee"
              },
              {
                "text": "MusicPlayer2",
                "link": "/zh-cn/docs/player-cfg/musicplayer2"
              },
              {
                "text": "网易云音乐 <span class=\"VPBadge info\" style=\"margin-left:6px;transform:translateY(-2px);\">Config</span>",
                "link": "/zh-cn/docs/player-cfg/neteasecloudmusic"
              },
              {
                "text": "PlanetMusic",
                "link": "/zh-cn/docs/player-cfg/planetmusic"
              },
              {
                "text": "PotPlayer",
                "link": "/zh-cn/docs/player-cfg/potplayer"
              },
              {
                "text": "QQ 音乐 <span class=\"VPBadge info\" style=\"margin-left:6px;transform:translateY(-2px);\">Config</span>",
                "link": "/zh-cn/docs/player-cfg/qqmusic"
              },
              {
                "text": "Salt Player for Windows <span class=\"VPBadge warning\" style=\"margin-left:6px;transform:translateY(-2px);\">Limited</span>",
                "link": "/zh-cn/docs/player-cfg/salt-player-for-windows"
              },
              {
                "text": "Spotify",
                "link": "/zh-cn/docs/player-cfg/spotify"
              },
              {
                "text": "Windows Media Player <span class=\"VPBadge warning\" style=\"margin-left:6px;transform:translateY(-2px);\">Limited</span>",
                "link": "/zh-cn/docs/player-cfg/windows-media-player"
              }
            ]
          },
          {
            "text": "设置",
            "collapsed": false,
            "items": [
              {
                "text": "通用设置与行为",
                "link": "/zh-cn/docs/settings/appearance-and-behaviors"
              },
              {
                "text": "背景与视觉渲染",
                "link": "/zh-cn/docs/settings/background-visuals"
              },
              {
                "text": "歌词样式与动效",
                "link": "/zh-cn/docs/settings/lyrics-style-and-effects"
              },
              {
                "text": "翻译与注音 (扩展引擎)",
                "link": "/zh-cn/docs/settings/translation-and-plugins"
              }
            ]
          },
          {
            "text": "附加组件",
            "collapsed": false,
            "items": [
              {
                "text": "布局商店",
                "link": "/zh-cn/docs/add-ons/layouts-store"
              },
              {
                "text": "模式商店",
                "link": "/zh-cn/docs/add-ons/modes-store"
              },
              {
                "text": "插件商店",
                "link": "/zh-cn/docs/add-ons/plugins-store"
              }
            ]
          },
          {
            "text": "插件开发",
            "collapsed": false,
            "items": [
              {
                "text": "插件开发指南",
                "link": "/zh-cn/docs/plugin-dev/intro"
              }
            ]
          },
          {
            "text": "常见问题",
            "collapsed": false,
            "items": [
              {
                "text": "数据与反馈",
                "link": "/zh-cn/docs/FAQ/data-and-feedback"
              },
              {
                "text": "歌词显示",
                "link": "/zh-cn/docs/FAQ/lyrics-display"
              },
              {
                "text": "模式与外观",
                "link": "/zh-cn/docs/FAQ/modes-and-appearance"
              },
              {
                "text": "播放与连接",
                "link": "/zh-cn/docs/FAQ/playback-and-connection"
              },
              {
                "text": "窗口与交互",
                "link": "/zh-cn/docs/FAQ/window-and-interaction"
              }
            ]
          }
        ]
      }
    }
  },
  themeConfig: {
    logo: '/favicon.ico',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BetterLyrics/BetterLyrics' }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          'zh-cn': {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '清除搜索条件',
                backButtonTitle: '关闭搜索',
                noResultsText: '无法找到相关结果',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    editLink: {
      pattern: 'https://github.com/BetterLyrics/BetterLyrics.github.io/edit/main/:path'
    }
  }
})
