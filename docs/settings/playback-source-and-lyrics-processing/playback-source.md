# Playback Source

Configure the core logic for how BetterLyrics connects to and fetches data from various music players.

## Provider Management
- **Media Source Providers List**: A drag-and-drop ordered list of your installed playback sources (e.g., Spotify, Apple Music, NetEase Cloud Music). Drag to prioritize which source BetterLyrics should try to connect to first.
- **Listen on New Playback Source**: When enabled, the app will automatically switch to listen to a newly started music player.

## Individual Provider Configuration

> [!NOTE]
> **Local Lyrics Search Provider:** If you enable or prioritize the Local Lyrics search provider, remember that you must add your local lyrics folder to the [Media Library](../media-library.md) first.

Click the gear icon next to any provider in the list to configure its specific behavior:
- **Enable/Disable**: Toggle whether BetterLyrics should connect to this specific player at all.
- **Memory Reader**: For supported players, injects a memory reader to extract exact playback data bypassing the standard OS APIs. You can also import custom memory reader configurations.
- **Last.fm Track**: Enable sending tracking information to Last.fm specifically for this source.
- **Discord Presence**: Enable showing this player's activity in your Discord Rich Presence.
- **LX Music Server / Specific Settings**: Some players have specific API server inputs (e.g., LX Music server URL).
- **Timeline Sync & Offset**: Set synchronization thresholds and manually offset lyrics timing (e.g., +500ms or -200ms) to compensate for audio delay.
- **Album Art Search Providers**: Drag-and-drop to prioritize where the app searches for missing album art. Define a target image resolution.
- **Lyrics Search Providers**: Prioritize lyrics sources (网易云, QQ音乐, LrcLib, etc.). Choose between **Sequential** (first found) or **Best Match** (highest percentage match). Adjust the matching threshold (e.g., 60%) globally or per-provider.