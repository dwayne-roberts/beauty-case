![Beauty Case](https://raw.githubusercontent.com/sky-radio-group/beauty-case/master/beauty-case.png?token=AGMSS7XNpBNvnTrRbxzgOJ2zMjYENmgtks5U8Ju8wA%3D%3D)

Beauty Case is a compact but versatile Sass starter kit for the Sky Radio Group. The library forms the foundation for all of its websites. It contains many base scaffolding styles and a lightweight library full of mixins, functions and helpers.

## Development dependencies

In order to further develop/build this project certain development dependencies must be met. As this is a Sass project it should be obvious that Ruby and (native) Sass are required. There are some vendor projects included wihtin this repository which are managed via Bower. Updating, changing or expanding on these vendor projects requires Bower.

+ Ruby ~ 2.1.0
+ Sass ~ 3.4.0
+ Bower ~ 1.3.0

## Documentation

_NB: In the future, if needed, a Github wiki page may be added._

## How To
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


## Library

Each function/mixin has an example Gist made through Sassmeister. Documentation is generated automatically via SassDoc.

#### Reset
+ reset-focus()   — _Resets the outline property when focussed_
+ reset-layout()   — _Resets the borders, margins and padding on the box-model_
+ reset-list()   — _Resets the list-style for list elements_
+ reset-table()   — _Resets a table's properties_
+ reset-table-cell()   — _Resets the properties of table cells_

#### Helpers
+ contains()   — _Checks if a list contains one or more defined values_
+ data()   — _Creates a straightforward data attribute selector_
+ debug()   — _Visually detect invalid markup_
+ list-reverse()   — _Reverses the values in a list_
+ list to string()   — _Converts a comma separated list to a "string"_
+ px-to-em()   — _Converts a fixed px value to a relative em_
+ px-to-rem()   — _Converts a fixed px value to a relative root em_
+ rem-to-px()   — _Converts a relative rem value to a fixed px value_
+ str-replace()   — _Replace all occurrences of a search string with the replacement_
+ str-list()   — _Converts a "string" like list to a comma seperated list_
+ strip-unit()   — _Strips the unit from a number_

#### Math
+ exponent()   — _Calculates the value of a number raised to the power of an exponent_
+ is-even()   — _Check if a number is even_
+ is-odd()   — _Check if a number is odd_

#### Layout
+ block-center()   — _Visually center a block-level element_
+ block-left()   — _Align a block-level element to the left without floating_
+ block-right()   — _Align a block-level element to the right without floating_
+ box-sizing()   — _Sets the box-sizing property on an element_
+ clearfix()   — _Forces an element to clear itself and its children_
+ grid()   — _Susy 2 grid library for semantic grids @see [Susy](http://susydocs.oddbird.net/en/latest/)_
+ layout()   — _Set the padding of margins of an element using a list or string_
+ position()   — _Shorthand for setting the position of an element_
+ size()   — _A size in relation to some reference_

#### Typography
+ adjust-to-baseline()   — _A line-height ratio that matches the baseline rhythm_
+ establish-baseline()   — _Set the base vertical rhythm_
+ font-face()   — _Shorthand font-face declaration_
+ font-size()   — _Set the font-size in rems with a px fallback_
+ headings()   — _Generate a list of headings_
+ letterpress()   — _Create a letterpress text effect_
+ link-hover()   — _Add the default hyperlink styling to an element_
+ link-unstyled()   — _Removes hyperlink styling from an element_
+ ratio()   — _Decimal value of a named ratio_
+ stack()   — _Return a full font-stack_
+ text-hide()   — _Hides text by either collapsing or indenting text off-canvas_
+ text-overflow()   — _Truncates too long text with an ellipsis_
+ text-selection()   — _Set the text highlight color_
+ type-scale()   — _Modular Scale for type setting to a semantic scale @see [Modular Scale](https://github.com/at-import/modular-scale)_
+ weight()   — _Decimal equivalent of a font weight_

#### User Interface
+ caret()   — _Create a caret in a specified direction_
+ circle()   — _Create a uniform circle_
+ dimension()   — _Set the dimensions of an element_
+ emboss()   — _Stylize an object to look slightly raised_
+ focus()   — _Set the outline style for focussed elements_
+ hidden()   — _Hide content visually and from screen readers_
+ impress()   — _Stylize an object to look slightly sunken_
+ invisible()   — _Hide content only visually, but have it available for screen readers_
+ list-inline()   — _An inline list with an optional delimiter_
+ material-shadow()   — _Create a material design inspired drop-shadow_
+ media-queries()   — _Create semantic breakpoints via Breakpoint-Sass @see [Breakpoint-Sass](http://breakpoint-sass.com/)_
+ photo-effect()   — _Stylize an image using one of the photo filters_
+ pseudo()   — _Creates a pseudo selector element_
+ responsive-image()   — _Keep images from scaling beyond the width of their parents_
+ square()   — _Create a square_

#### Colors
+ brand-color()   — _The primary color of a popular brand_
+ brightness()   — _The brightness of a color_
+ contrast-color()   — _The color with the highest contrast_
+ is-bright()   — _Checks if the brightness is greater than 60%_
+ gradient-diagonal()   — _Creates a uniform diagonal gradient at 45deg_
+ gradient-horizontal()   — _Creates a uniform horizontal gradient_
+ gradient-radial()   — _Creates a uniform radial gradient_
+ gradient-vertical()   — _Creates a uniform vertical gradient_
+ palette()   — _A specific tint or shade within a palette_
+ random-color()   — _A random color_
+ shade()   — _A darker shade of a given color_
+ tint()   — _A lighter tint of a given color_

## Changelog
+ **1.0.0**
    - Initial production version
+ **2.0.0**
    - Merge with other Sass project _Pan-Cake_
