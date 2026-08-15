# Player Config Doc Template

> Player Description[^1]

## Setup Guide

**No configuration required**. This player natively supports System Media Transport Controls (SMTC). Simply start playback to use. (Optional)

### Basic Setup (Optional)

### Precise Matching (Optional)

### Specialized Optimizations (Optional)

### Known Limitation (Optional)

> [!WARNING]
> **Disclaimer** (Optional)
>
> ...

[^1]: [Player Description Source](https://the.source/that.you.cite.from)

---

### How to display this doc on the sidebar:

Open the `sidebar.json` file in the root directory and add your entry to the corresponding section. See the example below:

```json
{
  "group": "Player Config",
  "items": [
    // ... other players
    {
      "title": "Your Player Name",
      "path": "docs/player-cfg/your-player-file.md",
      "badge": {
        "text": "Config",
        "variant": "note"
      }
    }
  ]
}
```

*Note: The `badge` property is optional. Common variants are `"note"` (default blue) and `"caution"` (yellow/orange).*