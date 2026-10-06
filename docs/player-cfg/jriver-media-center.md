# JRiver Media Center

> JRiver Media Center is a media player and multimedia application that allows users to play and organize various types of media on a computer running Windows, macOS, or Linux operating systems. Developed by JRiver, Inc., it is offered as shareware.[^1]

## Setup Guide

**Configuration may be required**. Support for System Media Transport Controls (SMTC) depends on your JRiver Media Center version.

### Version 35.0.20 and Later

Starting from [version 35.0.20](https://yabb.jriver.com/interact/index.php/topic,142527.0.html), JRiver Media Center **natively supports SMTC**. BetterLyrics can detect the playback directly without any additional configuration.

::: warning
The native SMTC support is not yet fully perfect. However, if you continue to use the `JRiverSmtcBridge` plugin with version 35.0.20 and later, you may experience a slight delay. This delay can be resolved by configuring it to the original format. The specific setting path is: **Tools** > **Options...** > **Media Network** > **Use Media Network to share this library and enable DLNA** > **Next** > **Next** > **OK** > **Original format** > **Finish**.
:::

### Earlier Versions (Before 35.0.20)

For earlier versions, a plugin is required to support SMTC.

1. Download and install the [JRiverSmtcBridge](https://github.com/Feyiyy/JRiverSmtcBridge) plugin.
2. Follow the plugin instructions to configure it with JRiver Media Center.
3. Once the plugin is running, BetterLyrics will be able to detect the playback.

[^1]: [Wikipedia](https://en.wikipedia.org/wiki/JRiver_Media_Center)