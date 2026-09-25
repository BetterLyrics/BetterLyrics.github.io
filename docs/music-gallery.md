# Music Gallery

The **Music Gallery** is BetterLyrics' built-in media management and playback window. It provides a comprehensive interface to browse, organize, and play the music indexed by your [Media Library](/docs/settings/media-library).

## Layout Overview

The Music Gallery window is composed of a sidebar for navigation, a main viewer for content, and a persistent playback bar at the bottom.

### Sidebar (Left Panel)

- **Playlists**: Manage your custom song collections.
  - Right-click or use the ... menu on any playlist to remove it or open its location in the File Explorer.
  - Use the **New Playlist** and **Import from File** buttons to add new collections.
- **Folder Tree**: A hierarchical tree view of all the folders configured in your Media Library. You can browse through your local directories, SMB shares, FTP, and WebDAV sources directly, similar to a file manager.
- **Media Settings Shortcut**: A small gear icon that quickly takes you to the Media Library settings page to configure your sources.

### Main Viewer (Center Panel)

The main view adapts based on the tab selected in the top command bar. You can instantly filter the currently displayed list using the **Search Box** in the top right.

- **Songs Tab**: A detailed data grid of all your tracks. Columns include Title, Artist, Album, Genre, Year, Track Number, Bitrate, Sample Rate, Audio Format, File Size, File Path, Duration, Date Created, and Date Modified. You can zoom out (Semantic Zoom) to quickly jump through the alphabet/groups.
- **Albums Tab**: A grid of album art thumbnails. Clicking an album transitions to the **Album Detail** view, displaying the cover art and a list of all tracks belonging to that album.
- **Artists Tab**: A grid of artist avatars. Clicking an artist transitions to the **Artist Detail** view, showing their profile icon and a list of all their tracks.

### Now Playing Bar (Bottom Panel)

The bottom edge of the window houses the playback controls.

- **Playback Controls**: Standard controls (Play, Pause, Previous, Next) along with a Stop button and playback order toggles.
- **Song Info**: Displays the currently playing track. Tapping it will smoothly transition the entire window into the full-screen **Now Playing Page** (showing the album art and lyrics).
- **Time/Progress Bar**: Displays the current playback position. Tapping the time will jump to specific positions.
- **Play Queue**: Click the queue icon to open a flyout menu on the right side, showing your upcoming tracks and playback history.

*Note: If BetterLyrics is currently hooked into an external playback source (like Spotify or Apple Music), the Now Playing Bar will be replaced by a prompt indicating that an external source is active.*

## Context Actions

In any song list view (Songs Tab, Album Detail, or Artist Detail), you can select one or more tracks and **Right-Click** them to:
- **Add to Playing Queue**: Append the selected songs to play next or add them to the end of your current queue.
- **Add to Custom List**: Instantly add the selected tracks into one of your created playlists.