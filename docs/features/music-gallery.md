# Music Gallery & Local Library

BetterLyrics features a built-in, powerful **Music Gallery** specifically designed for playing and managing your local high-fidelity music files.

## Playback & Queue Memory

The Music Gallery doesn't just play single tracks; it provides a comprehensive playback queue and state management system.

- **Playback Order**: Supports Repeat All, Repeat Single, Sequential, and Shuffle playback.
- **Auto State Recovery**: When you close and reopen the application, BetterLyrics automatically remembers your last **Play Queue** and precise **Playback Position**.
- **Startup Behaviors**:
  - `Auto Open`: Automatically pops up the Music Gallery window when the application launches.
  - `Auto Play`: Automatically resumes playing the last track upon startup.

## View & Columns Customization

In the Gallery's tabular DataGrid view, you can highly customize which data columns are displayed to better organize your Hi-Fi music library. You can toggle the following columns:

- **Basic Info**: Album, Genre, Year, Track Number, Duration.
- **File & Quality**: Bitrate, Sample Rate, Format, File Size.
- **Path & Time**: Folder Path, Date Created, Date Modified.

> [!TIP]
> Enabling the Bitrate, Sample Rate, and Format columns can help you easily filter and manage your Hi-Res audio files (e.g., FLAC, WAV).

## Window Linkage & Exit Behaviors

To accommodate different usage habits, the Music Gallery's state is deeply linked with the main lyrics window.

- **Track Info Display Target**: You can choose whether the properties panel on the right/bottom displays information for the **Currently Playing Item** or the **Currently Selected Item**.
- **Close Behaviors**:
  - `Stop On Window Closed`: Automatically stops music playback when you close the Gallery window.
  - `Exit On Window Closed`: Completely exits the BetterLyrics application when the Gallery window is closed.
  - `Lyrics Window Status`: You can define the default startup mode for the main lyrics window (e.g., automatically entering Fullscreen, Desktop, or Standard mode) when you double-click to play a song from the gallery.

## Media Library & Scanning

You can configure how BetterLyrics scans and syncs your local music library. In the Settings -> **Media Settings**, you can configure:

- **Local & Network Paths**: Add multiple directories including Local Folders, SMB, FTP, and WebDAV sources.
- **Auto Sync**: Set a schedule for automatic library scanning (e.g., Every 15 minutes, Hourly, Daily).
- **Real-Time Scan**: For local paths, BetterLyrics can monitor file changes and update the library in real-time.
- **Scan Subdirectories**: Choose whether to recursively scan all folders within the added paths.
