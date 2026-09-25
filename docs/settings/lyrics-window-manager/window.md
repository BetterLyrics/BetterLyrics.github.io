# Window (General)

Configure the core behaviors, colors, and display logic for this specific lyrics window.

## General
- **Configuration Name**: The display name of this window configuration.
- **Work Area**: When enabled, reserves space on your monitor (like a taskbar) so maximized applications won't overlap the lyrics window. You can set the height, dock placement (top/bottom), and target monitor.
- **Taskbar Placement**: Automatically positions the window based on where your Windows taskbar is located (Auto, Left, Right, Center).
- **Always on Top**: Keeps the lyrics window hovering above other applications. Includes an optional "Force Always on Top" polling mode for aggressive top-most behavior.
- **Keep Screen Open**: Prevents your display from going to sleep while the lyrics window is active.
- **Show in Switchers**: Toggles whether the lyrics window appears in the Alt+Tab menu and Task View.
- **Drag Area**: Determines which part of the window can be used to drag it around (None, Top, Whole).
- **Edge Feathering**: Blurs the edges of the window for a seamless blend with your desktop. Adjustable independently for Left, Top, Right, and Bottom edges (0-100%).
- **Spout Output**: Enables video output to Spout2 (for streaming or VJ software integration).

## Show & Hide
- **Hide Window When Paused**: Automatically hides the window when music playback pauses.
- **Hide Window When Null Session**: Automatically hides the window when no media is actively playing or detected.
- **Auto Show/Hide Delay**: The delay time (0-3000ms) before the window fades in or out after playback state changes.

## Window Color & Palette
- **Window Theme**: Force the window to Light mode, Dark mode, or Follow System.
- **Adapt to Environment Color**: Samples the background behind the lyrics window to tint the window dynamically. Modes include Below, Above, Inner, Edge, and Wallpaper.
- **Adapt to Album Art Accent Color**: Tints the window based on the primary colors of the currently playing album cover.
- **Palette Generator Type**: The algorithm used to extract colors (CelebiQuantizer, WuQuantizer, WsMeansQuantizer).
- **Advanced Palette Weights**: Fine-tune Chroma, Tone, and Population weights to adjust how colors are extracted. Includes thresholds for Light and Dark tones.
- **Real-Time Palette Preview**: Displays live color swatches (AccentColors and UnderlayColor) currently generated.

## Lock & Unlock
- **Always Hide Unlock Button**: Hides the unlock padlock icon completely when the window is locked.
- **Remove Border When Locked**: Strips the window borders and shadow when the window is in a locked state for a cleaner look.

## Now Playing Bar (Media Controls)
- **Keep Interactive When Locked**: Allows you to click play/pause/skip buttons even when the lyrics window itself is locked and click-through.
- **Timeline Lyrics Preview**: Shows a small preview of the lyric line when hovering over the progress bar.
- **Auto Adaptive Width**: Automatically resizes the control bar based on window width. You can toggle specific elements like Time Area, Progress Bar, and the "More" button, or set it to always hide the bar.
- **Resident**: Keeps the Now Playing bar always visible on screen rather than auto-hiding.
- **Background Style**: Change the control bar's background to Transparent, Translucent, or Opaque.

## Debug
- **Target FPS**: Adjust the rendering frame rate of the lyrics window (60 Hz up to 480 Hz) to match your monitor.
- **Show Debug Overlay**: Displays an on-screen overlay with performance metrics and window states.