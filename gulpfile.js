var gulp       = require('gulp');
var sass       = require('gulp-sass');
var minifyCSS  = require('gulp-minify-css');
var uglify     = require('gulp-uglify');
var concat     = require('gulp-concat');
var watch      = require('gulp-watch');

gulp.task('default', ['watch', 'css', 'js']);

gulp.task('watch', function() {
	gulp.watch('assets/_sass/*.scss', ['css']);
	gulp.watch('assets/_scripts/*.js', ['js']);
});

gulp.task('css', function() {
	return gulp.src('assets/_sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(minifyCSS())
		.pipe(gulp.dest('assets/css'));
});

gulp.task('js', function() {
	return gulp.src([
		'assets/_scripts/base.js'
	])
	    .pipe(concat('scripts.min.js'))
	    .pipe(uglify())
	    .pipe(gulp.dest('assets/js'));
});
