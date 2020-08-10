const gulp       = require( 'gulp' ),
      browserify = require( 'browserify' ),
      buffer     = require( 'vinyl-buffer' ),
      concat     = require( 'gulp-concat' ),
      sass       = require( 'gulp-sass' ),
      sassLint   = require( 'gulp-sass-lint' ),
      source     = require( 'vinyl-source-stream' ),
      uglify     = require( 'gulp-uglify' );

// Array of JS files, in order by dependency.
const jsFiles = [
  'node_modules/jquery/dist/jquery.min.js',
  'assets/source/js/base/set-jquery.js',
  'assets/source/js/component/example.js'
];

// JS build task.
gulp.task( 'js', () => {
  return browserify( { entries: jsFiles } )
    .transform( 'babelify', { presets: [ '@babel/preset-env' ] } )
    .bundle()
    .pipe( source( 'scripts.min.js' ) )
    .pipe( buffer() )
    .pipe( uglify() )
    .pipe( gulp.dest( 'assets/build/js' ) );
} );

// CSS build task.
gulp.task( 'css', () => {
  return gulp.src( 'assets/source/scss/styles.scss' )
    .pipe( sass( { outputStyle: 'compressed' } ) )
    .pipe( gulp.dest( 'assets/build/css' ) );
} );

// Default task.
gulp.task( 'default', gulp.series( 'js', 'css' ) );
