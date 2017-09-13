/**
 * Created by simplon on 25/07/17.
 */

//gulp.task = assigner une tache
//gulp.src = chercher le/les fichier.s à importer
//gulp.dest = la destination du/des fichier.s

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');




gulp.task('sass', function(){
  gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'))
});



gulp.task('watch', function(){
  gulp.watch('scss/*.scss', ['sass']);
});
