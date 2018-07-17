const gulp = require('gulp'),
      babelify = require('babelify'),
      browserify = require('browserify'),
      clean = require('gulp-clean-css'),
      concat = require('gulp-concat'),
      rename = require('gulp-rename'),
      sass = require('gulp-sass'),
      source = require('vinyl-source-stream'),
      streamify = require('gulp-streamify'),
      uglify = require('gulp-uglify'),
      watch = require('gulp-watch');

// Array of JS files, in order by dependency.
const jsFiles = [
  'node_modules/jquery/dist/jquery.min.js',
  'assets/source/js/base/set-jquery.js',
  'assets/source/js/component/example.js'
];

// JS build task.
gulp.task('js', () => {
	browserify({
    	entries: jsFiles,
    	debug: true
  	})
    .transform(babelify.configure({
      presets: ['env']
    }))
    .bundle()
    .pipe(source('scripts.min.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('assets/build/js'));
});

// CSS build task.
gulp.task('css', function() {
	return gulp.src('assets/source/scss/styles.scss')
		.pipe(sass().on('error', sass.logError))
    .pipe(clean())
    .pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('assets/build/css'));
});

// Watcher task.
gulp.task('watch', function() {
	gulp.watch('assets/source/scss/**/*.scss', ['css']);
	gulp.watch('assets/source/js/*.js', ['js']);
});

// Default task.
gulp.task('default', ['watch', 'css', 'js']);
