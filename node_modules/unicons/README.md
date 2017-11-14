# unicons

**Cross-platform unicode icon toolkit**

[![](https://img.shields.io/npm/v/unicons.svg)](https://www.npmjs.com/package/unicons)
[![](https://img.shields.io/npm/dm/unicons.svg)](https://www.npmjs.com/package/unicons)

Provides fast access to the most commonly used unicode icons.

```javascript
var unicons = require("unicons");

console.log(unicons.check); // ✓
console.log(unicons.cross); // ✖
```

## Installation

```
npm i unicons --save
```

## CLI mode

**unicons** has especially been designed for use in CLIs. If you want to support different OS, just call `.cli(iconName)` and you'll get the most suitable character for the given environment:

```javascript
unicons.cli("circle"); // ● on Unix
                       // o on Windows
```

## Icon table

Property | Default | Windows Console Fallback
---------|---------|-------------------------|
`arrowLeft` | ← | ←
`arrowUp` | ↑ | ↑
`arrowRight` | → | →
`arrowDown` | ↓ | ↓
`check` | ✓ | √
`circle` | ● | o
`cross` | ✖ | ×
`copyright` | © | c
`gear` | ⚙ | ☼
`option` | ⌥ | <
`super` | ⌘ | ∞
`shift` | ⇧ | ↑
`warning` | ⚠ | !

The icon table is still very small :(<br>
If you can't find your icon in the [icon table](https://github.com/peerigon/unicons#icon-table), don't hesitate to create a pull request.

## FAQ

### Why not copy-paste the characters?

If you're feeling lucky, go ahead ;). Copying characters is error prone and might also include unwanted invisible characters. Furthermore, the copied character might be displayed on your computer, but not on someone elses. We think it's better to refer to a name, like `arrowLeft`, in this case.

### Will the returned string always have a `length` of `1`?

[Nope, depending on the character range](https://mathiasbynens.be/notes/javascript-unicode). Besides that, we might also use two characters on oldschool consoles to represent the icon.


## Contributing

You can refer to the Unicode Character table site for integrating more characters: [http://unicode-table.com/en](http://unicode-table.com/en) and [http://jrgraphix.net/r/Unicode/](http://jrgraphix.net/r/Unicode/).

In order to find Windows characters, please refer to the [Codepage 437 Reference](https://en.wikipedia.org/wiki/Code_page_437). Most of these will work, however, there is no guarantee :(

Before sending the pull request, please run `npm test` on a Unix and a Windows machine (using cmd.exe).

## License

Unlicense
