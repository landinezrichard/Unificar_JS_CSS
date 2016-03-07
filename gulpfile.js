/*
* Dependencias
*/

var gulp = require('gulp'),
	useref = require('gulp-useref'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify'),
	nano   = require('gulp-cssnano');

/*
* Rutas de los archivos 
*/ 

var paths = {
	html:{
		main : 'dev/index.html',
		dest : 'public'
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
	.pipe(useref.assets())
	.pipe(gulpif('*.js', uglify()))
	.pipe(gulpif('*.css', nano()))
	.pipe(useref.restore())
	.pipe(useref())
	.pipe(gulp.dest('./dist'));
});