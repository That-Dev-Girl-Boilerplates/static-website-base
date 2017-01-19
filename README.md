# Static Website Base

This repository is my personal standard base for any static website.  It can and will be modified to suit a particular project.

## Getting Started
1. Fork or clone this repository.
2. In the repository directory, run `npm install`.
3. Run the `gulp` script to watch for Sass and Javascript changes.

## Asset Directories

Directory | Description
--- | ---
`/assets/_sass/` | Location of all Sass files. Sass files are divided into `base/`, `layout/`, and `component/` directories. The Gulp script will compile and minify each file.
`/assets/_scripts/` | Location of all Javascript files. Javascript files are divided into `vendor/` and `custom/` directories. Existing libraries go in the `vendor/` directory.  Your code goes in the `custom/` directory. The Gulp script will compile, minify, and concatenate all files into a single `scripts.min.js` file.  You will need to update `gulpfile.js` as you add additional JS files.
`/assets/css/` | Location of the compiled CSS files.
`/assets/js/` | Location of the compiled Javascript file.
