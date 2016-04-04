/*
* Dependencias
*/

var gulp = require('gulp'),
	useref = require('gulp-useref'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify'),
	nano   = require('gulp-cssnano'),
	gutil  = require('gulp-util');

/*
* Rutas de los archivos 
*/ 

var paths = {
	html:{
		main : 'dev/**/*.html',
		dest : 'public/'
	},
	css:{
		main  : 'dev/css/estilos.styl',
		watch : 'dev/**/*.css',
		dest  : 'public/css/'
	},
	js:{
		main  : 'dev/app.js',
		watch : 'dev/**/*.js',
		dest  : 'public/js/'
	}
};

gulp.task('compress', function () {
	return gulp.src(paths.html.main)
	.pipe(useref())
	.pipe(gulpif('*.js', uglify()))
	.on('error', gutil.log)
	.pipe(gulpif('*.css', nano()))
	.on('error', gutil.log)	
	.pipe(gulp.dest(paths.html.dest));
});

/*
* Tarea por defecto
*/

gulp.task('default', ['compress']);

/*
*	Para usar, poner en elhtml, un comentario así:

		// build:js ../js/combined.js
		script("text/javascript", src="../js/jquery-2.2.1.min.js")
		script("text/javascript", src="../js/owl.carousel.min.js")
		script("text/javascript", src="../js/functions.js")
		// endbuild

	lo mismo si se necesita el css
}
*/