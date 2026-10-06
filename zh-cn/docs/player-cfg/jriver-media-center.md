# JRiver Media Center

> JRiver Media Center is a media player and multimedia application that allows users to play and organize various types of media on a computer running Windows, macOS, or Linux operating systems. Developed by JRiver, Inc., it is offered as shareware.[^1]

## 适配说明

**可能需要配置**。该播放器对系统媒体协议（SMTC）的支持取决于其版本。

### 35.0.20 及更高版本

自 [35.0.20 版本](https://yabb.jriver.com/interact/index.php/topic,142527.0.html)起，JRiver Media Center **原生支持了 SMTC**。BetterLyrics 可以直接获取到播放状态和歌曲信息，无需任何额外配置。

::: warning
该播放器目前原生支持的 SMTC 还不够完善。但请注意，如果在此版本及更高版本中继续配合 `JRiverSmtcBridge` 插件使用，会稍有延迟感（而在之前的早期版本中配合插件可以完好适配）。只需将其配置为原始格式即可解决该延迟问题，具体设置路径为：**工具** > **选项...** > **媒体网络** > **使用 Media Network 共享此媒体库，并启用 DLNA** > **下一步** > **下一步** > **确定** > **原始格式** > **完成**。
:::

### 早期版本（35.0.20 之前）

对于早期版本，该播放器需要安装插件以支持 SMTC。

1. 下载并安装 [JRiverSmtcBridge](https://github.com/Feyiyy/JRiverSmtcBridge) 插件。
2. 按照插件页面的说明，在 JRiver Media Center 中启用并配置该插件。
3. 插件正常运行后，BetterLyrics 即可获取到播放状态和歌曲信息。

[^1]: [Wikipedia](https://en.wikipedia.org/wiki/JRiver_Media_Center)