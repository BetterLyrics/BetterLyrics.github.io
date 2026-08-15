# BetterLyrics Documentation

The official documentation site for [BetterLyrics](https://github.com/BetterLyrics).

This is a lightweight, zero-dependency static site built with vanilla HTML, CSS, and JavaScript. It dynamically fetches and renders Markdown files on the client side using `marked.js`.

## Local Development

Since the site relies on `fetch()` to load Markdown files, you need to run it through a local web server (opening `index.html` directly will result in CORS errors).

You can use any local server, for example:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .
```

Then open `http://localhost:8000` in your browser.

## Project Structure

- `index.html`: Main layout.
- `style.css`: Styles and layout.
- `script.js`: Core logic for Markdown parsing, custom syntax extensions (admonitions, footnotes), language switching, and routing.
- `sidebar.json`: Navigation configuration.
- `docs/`: The Markdown documentation files.

## Adding Documentation

1. Add your `.md` file to the `docs/` or `docs/zh-cn/` directory.
2. Update `sidebar.json` with the path to your new file.
3. Refresh the page to see the changes.