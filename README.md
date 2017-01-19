# Static Website Base

This repository is my personal standard base for any static website.  It can and will be modified to suit a particular project.

## Getting Started
1. Fork or clone this repository.
2. In the repository directory, run `npm install`.
3. Run the `gulp` script to watch for Sass and Javascript changes.

## Asset Directories

Directory | Description
--- | ---
`/assets/_sass/` | Location of all Sass files. The Gulp script will compile and minify each file.
`/assets/_scripts/` | Location of all Javascript files. The Gulp script will compile, minify, and concatenate all files into a single `scripts.min.js` file.
`/assets/css/` | Location of the compiled CSS files.
`/assets/js/` | Location of the compiled Javascript file.
