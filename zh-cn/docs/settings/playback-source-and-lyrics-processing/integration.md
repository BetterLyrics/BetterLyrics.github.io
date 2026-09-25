# 外部集成

将 BetterLyrics 连接到第三方服务，并定义相关的 API 凭证。

## Last.fm
- **授权认证**: 点击认证按钮前往浏览器连接你的 Last.fm 账号。
- **个人资料**: 成功连接后，将在此展示你的用户名、累计播放次数以及注册日期。可点击按钮手动刷新。

## Discord
- **Discord 状态展示**: 开启后，在你的 Discord 个人状态中展示正在听的歌曲。
- **专辑封面来源**: 选择在 Discord 状态缩略图中显示的专辑封面是从哪里获取的（无、iTunes、酷狗音乐、Last.fm）。

## 自定义数据库与 Token
- **amll-ttml-db**: 输入自定义的 Base URL 以连接外部的 AMLL (Apple Music Lossless) TTML 逐字歌词数据库。
- **Apple Music Media-User-Token**: 填入你提取的个人 Apple Music Token，以直接从苹果服务器拉取官方逐字歌词。*由于包含一定风险，请自行斟酌使用。*

## Apple Music Media-User-Token Extraction

- 打开 [Apple Music 网站](https://music.apple.com/) 。
- 登录您的帐户。
- 打开开发者工具窗口（F12）。
- 在开发者工具窗口首先找到 `应用` 菜单，再在左侧面板找到 `Cookie` 并展开，选择 `https://music.apple.com`。
- 在过滤栏中输入 `media-user-token`，并复制其值。
- 打开 BetterLyrics 并转到 [播放源](betterlyrics://settings/PlaybackLib) 设置。
- 将复制的值输入到 `Apple Music media-user-token` 设置中，然后点击右侧的接受图标。