# Lyrics Processing

Configure how raw lyrics are parsed, translated, and displayed.

## Lyrics Translation
- **Target Language**: Select the language you want foreign lyrics translated to.
- **LibreTranslate**: Enable a self-hosted or public LibreTranslate server for machine translation instead of relying on built-in API limits. Enter the server URL and test the connection.

## Romanization & Phonetics
Enable phonetic guides above the lyrics text for various languages to help you sing along:
- **Pinyin**: For Mandarin Chinese.
- **Jyutping**: For Cantonese Chinese.
- **Romaji**: For Japanese.
- **Romaja**: For Korean.

## Text Adjustments
- **Chinese Conversion**: Automatically convert all Chinese lyrics to Simplified (S2T), Traditional (T2S), or leave them unmodified.
- **Profanity Filter**: Automatically censor explicit words in the lyrics text.

## Fallback & Behavior
- **No Lyrics Found Handling**: Choose whether to display a "No Lyrics Found" message or completely hide the lyrics area when a search fails. You can also customize the exact text of the not-found message.
- **Auto Retry Count**: Set how many times the app should attempt to fetch lyrics before giving up.