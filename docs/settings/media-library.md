# [Media Library](betterlyrics://settings/MediaLib)

Manage your local music folders and scanning behaviors.

## Media Sources
You can add multiple directories to scan for local audio files. Click the **Add Folder** button to add a source. The following source types are supported:
- **Local Folder**: Standard local drives and directories.
- **SMB**: Windows network shares.
- **FTP**: Standard FTP servers.
- **WebDAV**: Web-based distributed authoring and versioning servers.

## Folder Configuration
Click on any added folder in the list to expand its advanced settings:

- **Name**: Assign a custom display name for this media source.
- **Local Music File Pattern**: Configure the regex/pattern used to extract song metadata (Title, Artist) from the audio file names if ID3 tags are missing.
- **Local Lyrics File Pattern**: Configure the pattern used to match sidecar .lrc or .txt lyrics files in the same directory.
- **Last Sync Time**: Displays the last time this folder was scanned.
  - **Sync Now**: Click the sync button to immediately run a differential scan.
  - **Advanced Options -> Force Sync**: Performs a complete, clean rebuild of the index for this folder.
- **Auto Sync Interval**: Set how often the app scans this folder in the background (Disabled, 15 Minutes, 1 Hour, 6 Hours, or Daily).
- **Real-time Scan**: (Local folders only) Dynamically watch the folder for file additions/deletions and instantly update the library without waiting for the sync interval.
- **Scan Sub Directories**: Toggle whether to recursively scan folders inside this path.
- **Remove Path**: Unlink this folder from your media library and remove its indexed data.

At the bottom of the page, there is a quick access button to open the **Music Gallery Window**.
> [!TIP]
> **Local Lyrics:** If you want to use local `.LRC`, `.ESLRC`, or `.TTML` lyric files (or local music files), you must add the folder containing them to this Media Library so they can be recognized.
