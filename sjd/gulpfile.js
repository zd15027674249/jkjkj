var gulp = require('gulp'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	cssnano = require('gulp-cssnano'),
	uglify = require('gulp-uglify');
gulp.task('sa',function(){
	console.log("sss");
})
gulp.task("sass",function(){
	return gulp.src("sass/*.scss").pipe(sass()).pipe(rename({"":".mini"})).pipe(cssnano()).pipe(gulp.dest('css'));
});
gulp.task("watch",function(){
	gulp.watch(['sass/*.scss'],['sass']);
})