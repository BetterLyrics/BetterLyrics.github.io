# Background & Visuals

BetterLyrics features a powerful background rendering engine that supports multi-layered display of stunning visual effects. You can combine these effects to create a unique and immersive music playback experience.

## Base Backgrounds

You can choose from the following types as the bottom-most background layer:

### Pure Color Overlay
- Fills the background with a solid color.
- You can adjust the **Opacity** to blend it with your desktop wallpaper or underlying windows (ideal for floating/desktop modes).

### Cover Overlay (Album Blur)
- Extracts the high-definition album art of the currently playing song and stretches it to fill the background.
- **Blur Amount**: Controls the intensity of the blur. A higher blur prevents complex album art from distracting from the lyrics.
- **Opacity**: Darkens the cover brightness.
- **Speed**: Controls the smooth transition speed when switching album covers.

### Fluid Overlay
The fluid gradient is one of BetterLyrics' signature effects, generating a dynamically flowing color gradient based on the primary colors of the album art.
- **Motion**: You can set the fluid to be **Dynamic** (flowing) or **Static** (frozen) to save GPU resources.
- **Color Dithering**: When enabled, eliminates color banding in the gradient, making color transitions silky smooth.
- **Light Wave**: Adds additional light and shadow fluctuations to the fluid gradient, enhancing the 3D feel.

---

## Environment Effects (Overlays)

On top of the base background, you can layer the following environmental effects:

### Fog Overlay
Generates a slowly drifting fog layer at the bottom of the screen, enhancing the atmospheric immersion.

### Snowflake Overlay
Falling snow particle effect, perfect for winter vibes or cool-toned songs.
- **Amount**: Controls the density of the snowflakes on the screen.
- **Speed**: Controls how fast the snowflakes fall.

### Raindrop Overlay
A realistic glass raindrop effect.
- You can freely adjust the **Size**, **Speed**, and **Density** of the raindrops.
- Advanced settings: Supports tweaking the **Light Angle** and **Shadow Intensity** to achieve the most realistic refraction texture.

---

## Audio Spectrum Visualization

A built-in real-time audio spectrum analyzer that lets you "see" the rhythm of the music.

### Spectrum Style
- **Placement**: Place the spectrum at the bottom, top, left, or right of the screen.
- **Style**: Choose between **Curve** (smooth line) and **Bar** (discrete pillars) representation.
- **Count**: Adjust the number of frequency bands (e.g., 32 or 64).
- **Sensitivity**: Controls how responsively the spectrum reacts to audio amplitude.

### Spectrum Appearance
- **Glow Effect**: Makes the spectrum lines emit a soft glow.
- **Color Type**: Supports **Adaptive** (smart color extraction) or a specific **Custom Color**.
- **Opacity**: Adjust the transparency of the spectrum to prevent it from blocking the lyrics.

---

## Global Dynamics

Almost all effect layers support the following two global dynamic behaviors:

1. **Breathing Effect**:
   - When enabled, the opacity or intensity of the effect layer (such as fluid, spectrum, or snowflakes) will gently pulse or "breathe" in sync with the beat of the music.
   - Adjustable parameter: `Breathing Intensity`.
2. **Parallax Effect**:
   - As you move the mouse within the window, the background layers will slightly shift in response, creating a 3D parallax depth illusion.
