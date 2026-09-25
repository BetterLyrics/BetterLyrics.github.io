# Integration

Connect BetterLyrics to external third-party services and define API credentials.

## Last.fm
- **Authentication**: Click the authenticate button to connect your Last.fm account.
- **Profile Info**: Displays your username, total playcount, and registration date once connected.

## Discord
- **Discord Rich Presence**: Displays your current Discord username when the connection is active.
- **Album Art Source**: Choose where the album art thumbnail displayed in your Discord status should be fetched from (None, iTunes, KuGou, Last.fm).

## Custom Databases
- **amll-ttml-db**: Input a custom base URL to connect to an external AMLL (Apple Music Lossless) TTML lyrics database.
- **Apple Music Media-User-Token**: Input your personal Apple Music token to fetch official synced lyrics directly from Apple's servers. *Use at your own risk.*

## Apple Music Media-User-Token Extraction

- Open the [Apple Music website](https://music.apple.com/).
- Log in to your account.
- Open the Developer Tools window (F12).
- In the Developer Tools window, first locate the `Application` tab, then locate and expand the `Cookie` in the left panel, and choose `https://music.apple.com`.
- Type `media-user-token` in the filter bar, and copy its value.
- Open BetterLyrics and go to the [Playback Source](betterlyrics://settings/PlaybackLib) settings.
- Input the copied value into the `Apple Music media-user-token` setting, then click the accept icon on the right.