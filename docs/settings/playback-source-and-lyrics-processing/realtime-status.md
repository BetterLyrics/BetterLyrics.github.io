# Realtime Status & Data

This page provides live diagnostic information about the currently playing song and how its lyrics were resolved, as well as configuration for exporting lyrics.

## Playback & Song Status
- **Playback Source**: Displays the ID and name of the music player currently supplying audio data.
- **Song Status**: Live readout of the Title, Artist, Album, and Total Duration of the current track.

## Search Result Status
Displays exactly how the lyrics for the current song were found:
- **Title / Artist / Album**: The metadata used for the search.
- **Language Code**: The detected language of the lyrics.
- **Lyrics Provider**: The service that provided the main lyrics (e.g., NetEase, LrcLib).
- **Transliteration & Translation Provider**: The services that provided the phonetic guides and translated lines.
- **Match Percentage**: How confident the search algorithm was in this match.

## Lyrics Export Config
Click the Settings icon at the bottom of the diagnostics panel to configure how lyrics are saved to your local disk:
- **Format Options**: Choose whether to save in syllables format, include translations, include transliterations, or compress into a single line.
- **File Name Pattern**: Define a regex pattern for naming the exported .lrc files.
- **Save Folder**: Pick the target directory on your computer where the .lrc files will be saved.