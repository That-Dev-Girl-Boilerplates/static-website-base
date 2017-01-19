# Static Website Base

This repository is my personal standard base for any static website.  It can and will be modified to suit a particular project.

## What's here?

There is a single `index.html` file in the root directory.  All style and script files are located in the `assets/` directory.

Styles are written in Sass in the `assets/_sass/` directory.  Each file is compiled and minified into the `assets/css` directory.

Scripts are located in the `assets/_scripts` directory.  All Javascript files are compiled, minified, and consolidated into a single `scripts.min.js` file in the `assets/js` directory.

The `assets/js` directory also contains a minified copy of jQuery 2.2.4.

## Setting this up

1. Fork or clone this repository.
2. In the repository directory, run `npm install`.
3. Run the `gulp` script to watch for Sass and Javascript changes.
