# Playback & Connections

This section contains settings for playback behaviors, external connections, and lyrics search providers.

## Discord Rich Presence

Share what you are currently listening to with your friends on Discord.

- **Enable Discord Presence**: Toggle this on to display your current track on your Discord profile.
- **Discord Username**: Displays your connected Discord username (make sure your Discord desktop app is running).
- **Album Art Source**: Choose where the album art in Discord Rich Presence comes from (e.g., None, iTunes, QQ Music, Last.fm).

## Last.fm Scrobbling

BetterLyrics supports scrobbling your playback directly to Last.fm.

- **Authorize Last.fm**: Click this button to connect BetterLyrics to your Last.fm account.
- **Enable Track Scrobbling (Now Playing)**: Once authorized, enable this to let Last.fm know what track you are currently playing.
- **Account Info**: View your connected Last.fm Username, Total Playcount, and Registration Date.

## Lyrics Search Providers

Configure how BetterLyrics searches for lyrics from external providers when local lyrics are not found.

- **Search Strategy**: 
  - Sequential: Searches providers one by one based on their priority order.
  - Best Match: Searches all enabled providers simultaneously and picks the best matching result.
- **Matching Threshold**: Set a global percentage threshold (0-100%). Results below this threshold will be discarded.
- **Providers List**: 
  - You can drag and drop providers to reorder their priority.
  - Enable or disable specific providers.
  - **Ignore Cache**: Force the provider to ignore cached lyrics and fetch fresh ones.
  - **Override Threshold**: Set a specific matching threshold for individual providers, overriding the global setting.

## External Lyrics Database

- **amll-ttml-db**: You can specify a custom base URL for the mll-ttml-db lyrics database service if you host your own instance.
