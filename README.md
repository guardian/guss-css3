# Guss CSS3 Mixins

Part of the [Guss](https://github.com/guardian/guss) collection.

[View the docs](http://guardian.github.io/guss-css3/)

## Features

Provides Sass mixins for the most frequently used CSS3 features.

## Installation

You will need

 * [Node.js](http://nodejs.org/)
 * [Bower](http://bower.io/)
```
$ npm install -g bower
```

Then install this component with

```
$ bower install guss--css3 --save
```

## Usage

```
@import 'bower_components/guss-css3/src/_-css3'

@include keyframes(fadeIn) {
    0%   { opacity: 0; }
    100% { opacity: 1; }
}

.element {
    @include animation(fadeIn 5s ease-out);
    @include animation-delay(1s);
    @include background-size(100% 60%);
    @include border-radius(30px);
    @include box-shadow(none);
    @include box-sizing(border-box);
    @include column-width(300px);
    @include flex($flex-grow: 0, $flex-shrink: 1, $flex-basis: auto);
    @include flex-basis(auto);
    @include flex-direction(column);
    @include flex-display;
    @include flex-grow(0);
    @include rotate(90deg);
    @include sticky;
    @include transform(scale(1.3));
    @include transform-origin(0 50%);
    @include transition(width .2s ease-in-out);
}
```

## Development

On top of the above requirements, you will also need

 * [Ruby](https://www.ruby-lang.org/en/)
 * [Bundler](http://bundler.io/)
```
$ gem install bundler
```
 * [Grunt CLI](http://gruntjs.com/getting-started#installing-the-cli)
```
$ npm install -g grunt-cli
```

Then, in root, install the dependecies

```
$ bundle install
$ npm install
$ bower install
```

To validate the source

```
$ grunt validate
```

To build the docs (output to the `docs` dir)

```
$ grunt docs
```

To release the component

```
$ grunt release
```

By default a patch release. Also `major` and `minor` targets available, e.g.

```
$ grunt release:minor
```
