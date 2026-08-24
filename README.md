# BetterLyrics Documentation

The official documentation site for [BetterLyrics](https://github.com/BetterLyrics).

This site is built using [Astro](https://astro.build/) to generate a lightweight, static documentation site from Markdown files.

## Local Development

To run the documentation site locally:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the local development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:4321` (or the port provided by Astro) in your browser.

## Project Structure

- `docs/`: The Markdown documentation files (English and `zh-cn`).
- `public/`: Static assets (images, configs, and client-side scripts).
- `astro.config.mjs`: Astro configuration and custom Markdown plugins.
- `package.json`: Project dependencies and NPM scripts.

## Adding Documentation

1. Add your `.md` file to the `docs/` or `docs/zh-cn/` directory.
2. Update `public/sidebar.json` with the path to your new file to include it in the navigation.
3. If running the dev server, changes will be updated automatically.