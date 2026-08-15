# Translation & Romanization

BetterLyrics provides comprehensive localization and multi-language lyrics processing capabilities, allowing you to enjoy music from all over the world without language barriers.

## Lyrics Translation Engine

The software integrates multiple translation solutions to help you quickly understand foreign songs in your native language.

### Enable & Target Language
- **Global Toggle (Enable Translation)**: A master switch to turn all translation features on or off.
- **Target Language Code**: Specify the language you want to translate the lyrics into (it defaults to your system language). Whether the original song is in English, Japanese, or French, it will be translated into your selected target language.

### LibreTranslate Offline Engine
In addition to translations provided by online lyrics sources, BetterLyrics supports integrating **LibreTranslate**:
- This is a powerful open-source machine translation engine. You can host it locally or on your LAN for **completely offline**, **zero-latency**, and **privacy-safe** real-time lyrics translation.
- Simply enable it in the settings and input your `LibreTranslate Server URL` (e.g., `http://localhost:5000`).

---

## Romanization & Phonetics

For non-native learners or KTV enthusiasts, BetterLyrics offers powerful phonetics features, allowing you to sing along without needing a translation.

You can independently enable **Romanization** (transliteration) for the following languages:
- **Japanese Romanization**: Automatically converts Kanji and Kana into Romaji.
- **Korean Romanization**: Converts Hangul into the Latin alphabet.
- **Mandarin Romanization**: Annotates Chinese characters with standard Pinyin.
- **Cantonese Romanization**: Annotates Cantonese songs with Jyutping or Yale romanization.

> [!NOTE]
> Romanization features are typically powered by independent plugins (e.g., `BetterLyrics.Plugins.Transliteration.Romaji`). Ensure you have enabled the corresponding language parser plugin in the "Plugin Management" section.

---

## Text Filtering & Chinese Conversion

Because online lyrics sources can vary greatly in quality, BetterLyrics provides a data cleaning layer.

### Chinese Conversion (Simplified/Traditional)
- Forces a unified Chinese display format. You can choose:
  - Unspecified (No conversion)
  - Force **Simplified Chinese**
  - Force **Traditional Chinese**
- This is especially useful for maintaining a consistent visual experience when mixing mainland and Hong Kong/Taiwan pop music.

### Lyrics Noise Filter
- When enabled, the software uses internal algorithms to automatically filter out irrelevant "noise" from the lyrics.
- For example, it automatically removes uploader advertisements, contributor lists, or non-standard punctuation forcibly added by some lyrics websites, returning a pure lyrics display.
