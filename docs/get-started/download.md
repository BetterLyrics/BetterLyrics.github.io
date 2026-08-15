# Download

## Microsoft Store

BetterLyrics is now available on the Microsoft Store. You can search for "BetterLyrics" directly in the Microsoft Store to download and install the latest version.

[Click here to visit the BetterLyrics page on the Microsoft Store](https://apps.microsoft.com/detail/9p1wcd1p597r)

## GitHub Releases

If you prefer to download from the GitHub Releases page, you can also visit the following link:

[Click here to visit the GitHub Releases page](https://github.com/jayfunc/BetterLyrics/releases/latest)

## Visual Studio

If you are a developer or want to build BetterLyrics from source code, you can clone this repository and use Visual Studio to build the project.

```bash
git clone https://github.com/jayfunc/BetterLyrics.git
```

Before building, please perform the following replacements:

- `src/BetterLyrics.DotNet`
  - `BetterLyrics.Core/Constants`
    - `DiscordTemplate` -> `Discord.cs`
    - `LastFMTemplate` -> `LastFM.cs`
  - `BetterLyrics.WinUI3/BetterLyrics.WinUI3/Assets`
    - `Wiki82.profile.xml.template` -> `Wiki82.profile.xml` (download the zip and extra the file from https://github.com/ivanakcheurov/ntextcat/blob/master/src/LanguageModels/Wiki.profiles.7z)

Add `https://pkgs.dev.azure.com/dotnet/CommunityToolkit/_packaging/CommunityToolkit-Labs/nuget/v3/index.json` to the NuGet source if necessary.
