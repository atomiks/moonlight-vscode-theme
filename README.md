# Moonlight 🌌

<img src="https://github.com/atomiks/moonlight-vscode-theme/raw/master/preview.png" alt="Preview">

## Variants

- Moonlight (regular and italics) (legacy)
- Moonlight II (regular and italics) (**recommended**)

## Installation

1.  Install [Visual Studio Code](https://code.visualstudio.com/)
2.  Launch Visual Studio Code
3.  Choose **Extensions** from menu
4.  Search for `atomiks.moonlight`
5.  Click **Install** to install it
6.  Click **Reload** to reload the Code
7.  From the menu bar click: Code > Preferences > Color Theme > Pick your Moonlight variant

## How do I enable the glow seen in the screenshot?

[Read instructions here](https://github.com/robb0wen/synthwave-vscode/blob/ec7e97eba96febbcf069256a6513ecedd0b187ae/README.md#to-enable-the-glow).

`moonlight.css` stylesheet:

```css
.mtk11 {
  color: #91bbff;
  text-shadow: 0 0 10px #2f36ff, 0 0 22px #9d91ff, 0 0 2px black;
}

.mtk12 {
  color: #67d2ff;
  text-shadow: 0 0 15px #12baff, 0 0 2px black;
}
```

⚠️ The `mtk` token numbers (11 and 12 above – which represent the two function colors) can change when the theme or VS Code version is updated, causing incorrect colors. When new releases arrive, make sure to visit the README for the updated stylesheet or make an issue if they change due to VS Code – I will update them accordingly.

## Related Packages

- [github-moonlight](https://github.com/Brettm12345/github-moonlight)
