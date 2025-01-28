## How to create a new color coded icon image

To create a new image for yourself in either the collaborators or committee
sections follow the directions and template below.

1. Replace `[USERNAME]` in the template with your username.
2. Replace `[BORDER_COLOR]` according to this:
   - Committee: `#33cd32`
   - Collaborators: `#0efeff`
3. Paste the text into a text file with `.svg` extension.
4. Open in an image editor of your choice that supports SVG and then export as
   PNG (Enable transparency if it's optional)

<br />

```svg
<svg
  width="400"
  height="400"
  xmlns="http://www.w3.org/2000/svg"
>
  <clipPath id="clipCircle">
    <circle r="200" cx="200" cy="200" />
  </clipPath>
  <image
    clip-path="url(#clipCircle)"
    width="400" height="400"
    href="https://avatars.githubusercontent.com/[USERNAME]">
  </image>
  <circle
    r="197"
    cx="200"
    cy="200"
    stroke="[BORDER_COLOR]"
    stroke-width="6"
    fill="none"
  />
</svg>
```

#### Tested Image Editors

- [Inkscape](https://inkscape.org/)
- [GIMP](https://www.gimp.org/)
