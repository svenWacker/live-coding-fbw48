# Live-coding

## HTML & CSS

[22/02/2020](feb/22-02)

Introduction to HTML

- HTML tags, Attributes,
- HTML Document boilerplate
- Basic document structure
- Head: `<meta>`, `<link>`, `<title>`,
- live-server
- Tables
- Linking: `<a href=" ">`, `target`, `<a href=""#[id-
- Lists: `<ul>`, `<li>`, `<ol>`
- Images`<img src="[URL]">`
- Introduction to CSS: `<style>`, `<link rel="stylesheet" href="[path-to-file]">`
- Formatting Elements `<strong>`, `<em>`, `<sup>`, `<sub>`, `<b>`, `<i>`, `<mark>`
- Form (action, method="POST"), input

[23/02/2020](feb/23-02)


- HTML + CSS
- Inline styles: DON'T `<p style=""color: red;"">`
- Document styles: SOMETIMES `<style>` tag
- External styles: DO `<link rel="stylesheet" href="[path-to-file]">`
- RGB: concept, `color: rgb([rrr],[ggg],[bbb])`
- Unimportant order: `<ul>`, `<li>`
- Nesting elements and proper indentation: parent - child concept
- CSS descendent combinator (space): `ul li { ... }`
- Important order: `<ol>` are for step by step
- Formatting Elements `<span>`
- Getting a unique element on the page: The `id` attr, `#[id]` selector
- Getting a bunch of stuff but not all: The `class` attr, `.[class]` selector
- Form (method="GET")
- iframe

[24/02/2020](feb/24-02)


- The image tag: `<img src=""[URL]"">`
- Image size`width`
- Framing images: `px`
- `border: [SIZE] solid [COLOR]`
- Rounding images: `border-radius: [BORDER-SIZE]`, `%`
  when to use - serif, sans-serif, monospace and cursive
- Pre Installed System fonts: css `font-family: <font-name>`
- Providing fallbacks: font stack values for `font-family`
- Getting more fonts: Google fonts and css `@import`
- Setting text size with `font-size`
- Coloring links on `:hover`
- Separating content units with `<section>`
- Marking related content with `<aside>`
- Self contained content with `<article>`
- Top and bottom of segments: `<header>` and `<footer>`
- Generic boxes with `<div>`
- `<img>` vs. `background-image`, `background-size`, `background-repeat`, `background-position`
- Putting it all together with the `background` shorthand

[25/02/2020](feb/25-02)


- `:hover`, `:active`, `:visited`
- Image links: wrapping `<img>` with `<a>`
- CSS adjacent sibling combinator (+): `img + p { ... }`
- Aligning text with `text-align`
- Centring text: comparison between `center` and `justify`
- Italics with css `font-style`
- Underline and strikethrough with css `text-decoration`
- Changing case with css `text-transform`
- Adding shadow and stroking text with css `text-shadow`
- Setting text size with `font-size`
- `rem` sizing
- Making sure boxes are the correct width: `box-sizing: border-box`
- Spacing boxes: outside the box with `margin`, inside the box `padding`
- Margins, paddings, width and height on inline elements
- Changing boxes with css `display` and `inline`
- Casting shadows: css `box-shadow`
- Fake boxes: css `:before` and `:after` pseudo elements
- Hiding things with css `visibility` (vs. `display: none;`)
- Making navbars accessible: The `<nav>` element

[01/03/2020](mar/01-03)
Review from last week: HTML and CSS

- element selectors, combining multiple selectors
- CSS adjacent sibling combinator (+): `img + p { ... }`
- pseudo child selectors: `:nth-child() { ... }`
- Browser compatibility
- Focusing and outlining: `:focus`
- selecting inputs by type with attribute selectors
- Pseudo-classes
- State pseudo class -`:hover`, `:active`, `:visited`
- css `:before` and `:after` pseudo elements
- `visibility` (vs. `display: none;`)
- Periodic Table

[02/03/2020](mar/02-03)
Review of past lessons (table, input,

- `:nth-child() { ... }`
- `vw` and `vh` units
- `box-sizing: border-box`
- `display` and `inline`, `block` and `inline-block`
- `display: flex`
- `justify-content` and `align-items`
- Image size: aspect ratio concept, `width` attribute
- Framing images: `px` concept, `border: [SIZE] solid [COLOR]`
- Rounding images: `border-radius: [BORDER-SIZE]`, `%`
- Chess board

[03/03/2020](mar/03-03)
Review of past lessons

- @font-face
- :root
- Writing text in RTL languages with `direction: rtl;`
- Aligning text with `text-align`
- Centring text: comparison between `center` and `justify`
- `font-weight`, choosing font weights on google fonts
- Italics with `font-style`
- `text-decoration`
- `text-transform`
- `text-shadow`
- fontawesome
- `<i class=""fas [icon-class]""></i>`

[04/03/2020](mar/04-03)


- Making navbars accessible: The `<nav>` element
- Flexible boxes: `display: flex`, flex child & flex parent concept
- Aligning and justifying: css `justify-content` and `align-items`
- Direction and wrapping: css `flex-direction` and `flex-wrap`
- Small shorthand: css `flex-flow`

[09/03/2020](mar/09-03)

- css `position` and `static`, `relative`, `absolute`
- Using our `@media` queries for layout

[11/03/2020](mar/11-03)

- Review from previous days
- Nice form elements

[15/03/2020](mar/15-03)
CSS Grid:

- `.container { display: grid }`
- `grid-template-columns` and `fr` unit
- `grid-column: [start] / [end];`
- `grid-row: [start] / [end];`
- `grid-template-areas`
- `grid-area`
- Grid exercise
- Mock up sign in page

[16/03/2020](mar/16-03)

- connecting Javascript with HTML and CSS.
- The `<script>` tag
- External JS with `<script src=""..."">`
- Making a menu with fancy effects
- Exercise: using `onclick` effect on the menu for the mobile app.

[17/03/2020](mar/17-03)

- Animations
- `@keyframes [name] { ... }`
- `:hover` and `:focus`, css `animation`
- `from`, `to` and `%` directives
- `animation-iteration-count`, `animation-direction`

[18/03/2020](mar/00-03)

- Review from previous days
- Nice nav elements

[22/03/2020](mar/22-03)

- small example of connecting Javascript with HTML and CSS.

- Dealing with scrollers: css `overflow` property
- Wrapping long words: css `overflow-wrap`


[23/03/2020](mar/23-03)

- Normalize.css 

[12/04/2020](apr/12-04)

- Bootstrap
- Adding bootstrap to our project (with CDNs):
- JS dependencies and bootstrap css, `<script src=""""..."""">`
- Smart copy pasting: read, understand, copy, modify
- Navbar with bootstrap
- Exercise: Build your own (random stuff with bootstrap)

[13/04/2020](apr/13-04)

- Table with Bootstrap
- Form with Bootstrap
- Exercise: porfolio with Bootstrap

[14/04/2020](apr/14-04)

- Project Template HTML CSS boilerplate with built-in sass support
- Installing dependencies: `npm install`
- Running for development: `npm start`
- Building for publication: `npm run build`
- Publishing online: `npm run deploy`
- Project structure: `scss` and `styles` folders

[15/04/2020](apr/15-04)

- Installing sass: `npm install -g sass`
- Creating input: `.scss` vs. `.sass`
- Sassy Magic: nesting css rules
- Comparing the output: `sass [input file] [output file]`
- Converting a folder into a folder `sass [input folder]:[output folder]`
- Watching for changes: `sass --watch [input folder]:[output folder]`
- Sass variables: Defining with `$[name]: [value]`, Using with `$[name]`
- Sass functions
- Sass maps
- Project: color guide in Sass

[19/04/2020](apr/19-04)

- Review from previous days (Sass)
- Defining mixins: `@mixin [name](){ ... }`
- Using mixins: `@include [name]()`
- Parameters and arguments:
  `@mixin [name]([parameters])`, `@include [name]([arguments])`
- Main use case for mixins: Using bootstrap breakpoint mixins
- Project: continue color guide in Sass with extra points.
