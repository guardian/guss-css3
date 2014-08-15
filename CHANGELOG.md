## 2.2.0 (2014-08-15)

- [new] Flexbox display and direction mixins
```scss
@include flex-display;
@include flex-direction(row | row-reverse | column | column-reverse)
```

## 2.1.2 (2014-08-08)

- Inline documentation uses [SassDoc](https://github.com/SassDoc/sassdoc) notation.
- Improve inline documentation for `position: sticky`

Thanks to @HugoGiraudel for his precious help!

## 2.1.1 (2014-06-24)

- [new] [`animation-delay`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay) property mixin

## 2.1.0 (2014-05-02)

- [new] [`column-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/column-width) property mixin, to suggest an optimal column width to the browser
- [fix] [`rem`](https://github.com/guardian/guss-rem) function is no longer a dependency
- [misc] mixins are ordered alphabetically

## 2.0.0 (2014-04-17)

- [deprecated] remove `simple-gradient` mixin which is too application specific
to be in this library
- [deprecated] remove unused `transition-delay` mixin
- [deprecated] `rounded-corners` (use `border-radius` instead)
- [new] add `border-radius` mixin (with shim for % units in older WebKits)

## 1.0.1 (2013-12-13)

- [new] Transition delay mixin: `@include transition-delay(.3s);`

## 1.0.0 (2013-12-13)

Public release.
