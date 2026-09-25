# Lyrics Style

Configure the typography, layout, and visual styling of the lyrics text.

## Typography & Layout

- **Alignment**: Set the horizontal (Left, Center, Right, Justify) and vertical (Top, Center, Bottom, Justify) alignment of the lyrics block. Toggle **Use Internal Lyrics Alignment** to override default rules.
- **Content Orientation**: Choose whether lyrics text flows **Horizontally** (standard) or **Vertically** (traditional Asian top-to-bottom style).
- **Lyrics Layer Order**: A drag-and-drop list to reorder how multiple lyric types stack (e.g. Original Text, Translation, Phonetic/Romaji).
- **Auto Wrap**: Automatically wrap long lyric lines to the next line to prevent them from extending beyond the window edges.
- **Playing Line Top Offset**: Adjust the vertical focal point of the currently playing line (e.g., 50% centers it perfectly, 30% pushes it towards the top of the window).
- **Line Spacing Factor**:
  - **Overall Spacing Factor**: Adjusts the vertical gap between separate lyrics lines.
  - **Inner Spacing Factor**: Adjusts the gap between the Original text, Translation, and Phonetic text within the *same* line.

## Font Settings

- **Font Family**: Independently select fonts for **CJK** (Chinese/Japanese/Korean) characters and **Western** (English/Latin) characters.
- **Font Weight**: Choose from Thin (100) all the way up to Extra Black (900).
- **Font Stroke Width**: Add an outline to the text (0-10px) to make it pop against complex backgrounds.
- **Font Size**: Enable **Auto Adjust** for dynamic sizing, or manually set fixed font sizes (12-256) independently for Phonetic Text, Original Text, and Translated Text.

## Color & Opacity

- **Font Color**: BetterLyrics provides intelligent color extraction (Adaptive Colored, Adaptive Grayed) or Custom color selection for 5 different states:
  - Played Stroke (Outline of sung text)
  - Unplayed Stroke (Outline of unsung text)
  - Non-current line Font Color (Background lyrics)
  - Played Foreground Color (Currently sung active text)
  - Unplayed Foreground Color (Currently unsung active text)
- **Font Opacity**: Fine-tune the transparency levels (0-100%) for:
  - Phonetic Text
  - Played Original Text (default 100%)
  - Unplayed Original Text (default 30% for a faded look)
  - Translated Text (default 60%)

## Card Style
- **Lyrics Card Style**: Select a preset visual style for how lyrics are framed or presented (if applicable to the current view).