# 播放与连接 (Playback & Connections)

此部分包含播放行为、外部账号连接以及歌词源搜索相关的设置。

## Discord Rich Presence

在 Discord 上向你的朋友展示你当前正在听的歌曲。

- **启用 Discord 状态展示**: 开启后，你当前播放的歌曲将显示在你的 Discord 个人资料中。
- **Discord 用户名**: 显示已连接的 Discord 用户名（请确保 Discord 桌面客户端正在运行）。
- **封面图片来源 (Album Art Source)**: 选择在 Discord 状态中显示的专辑封面来源（如：无、iTunes、酷狗、Last.fm）。

## Last.fm 记录 (Scrobbling)

BetterLyrics 支持将你的播放记录直接同步到 Last.fm。

- **授权 Last.fm**: 点击此按钮将 BetterLyrics 连接到你的 Last.fm 账号。
- **启用歌曲记录 (正在播放)**: 授权后，开启此选项即可向 Last.fm 报告你当前正在播放的曲目。
- **账号信息**: 查看已连接的 Last.fm 用户名、累计播放量 (Playcount) 和注册日期。

## 歌词搜索源 (Lyrics Search Providers)

配置当未找到本地歌词时，BetterLyrics 如何从外部歌词源搜索歌词。

- **搜索策略 (Search Strategy)**: 
  - 按顺序 (Sequential): 根据优先级列表逐个搜索歌词源。
  - 最佳匹配 (Best Match): 同时搜索所有已启用的歌词源，并挑选匹配度最高的结果。
- **匹配阈值 (Matching Threshold)**: 设置一个全局的百分比阈值 (0-100%)。匹配度低于此阈值的结果将被舍弃。
- **歌词源列表**: 
  - 你可以拖拽歌词源以调整它们的优先级顺序。
  - 启用或禁用特定的歌词源。
  - **忽略缓存**: 强制该歌词源忽略本地缓存，重新获取最新歌词。
  - **覆盖阈值**: 为特定的歌词源设置独立的匹配阈值，覆盖全局设置。

## 外部歌词数据库

- **amll-ttml-db**: 如果你自己托管了 mll-ttml-db 歌词数据库服务，可以在此处指定自定义的基础 URL。
