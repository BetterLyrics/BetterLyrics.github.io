# Lyrics Effect

Configure the advanced visual animations and 3D effects for the lyrics rendering engine.

## Advanced Lyrics Effects

- **Word-by-Word Highlight Mode**: Controls when syllables are highlighted (Auto, Never, Always). Auto will only highlight if the lyrics file contains precise syllable timestamps (e.g. enhanced LRC or TTML).
- **Blur Effect**: Applies a Gaussian blur to background or unplayed lyrics, bringing the currently playing line into sharp focus.
- **Fade Out Effect**: Adds a gradient transparency fade at the top and bottom of the lyrics list so scrolling lyrics fade away smoothly.
- **Edge Feathering Effect**: Softens the edges of the lyrics rendering area.
- **Out of Sight Effect**: When lyrics scroll far away from the active line, they visually fade into the background.
- **Breathing Effect**: The active lyrics line gently pulses/breathes in size. You can adjust the **Breathing Intensity** (0-200%).
- **Glow Effect**: The currently sung text emits a soft glow.
  - **Scope**: Apply glow to long duration syllables only, or from the line start to the current character.
  - **Long Syllable Duration**: Trigger threshold (e.g. 700ms) for the long-note glow effect.
  - **Auto Adjust Amount**: Let the engine calculate the glow intensity, or manually set it (0-16).
- **Scale Effect**: The active line/syllable enlarges to emphasize the vocal focus.
  - **Long Syllable Duration**: Trigger threshold for dynamic scaling on sustained notes.
  - **Auto Adjust Amount**: Automatic scaling calculation, or manual percentage (100-200%).
- **Float Animation**: Lyrics gently float up and down while scrolling or idling.
  - **Auto Adjust Amount**: Automatic floating amplitude, or manual value (0-16).
  - **Animation Duration**: How fast the floating cycle is (0-2000ms).
- **Fan Lyrics**: Curves the lyrics lines into a 3D fan shape. You can adjust the **Fan Angle** (-90° to 90°).

## 3D Space (Parallax & Depth)

BetterLyrics natively supports projecting the flat 2D lyrics layer into a 3D space.

- **Enable 3D Space**: Toggles the 3D rendering engine.
- **Auto 3D**: Let the software automatically tweak the 3D tilts based on music rhythm.
- **Manual Adjustments** (if Auto is off):
  - **X, Y, Z Angles**: Precisely tilt the lyrics plane (-90° to 90°).
  - **3D Depth**: Adjust the perspective depth / FOV (100 to 1000).

## Scroll Easing

Advanced tuning for the lyrics scrolling animation curves.

- **Easing Type**: Choose the mathematical curve (Linear, SmoothStep, Sine, Quad, Cubic, Quart, Quint, Expo, Circ, Back, Elastic, Bounce).
- **Easing Mode**: In, Out, or InOut.
- **Scroll Durations**: Fine-tune the exact millisecond duration for normal scrolling, scrolling to the top, and scrolling to the bottom (0-1000ms).
- **Scroll Delays**: Set a delay before the lyrics page flips to the top or bottom (0-2000ms).