const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const css = require('gulp-clean-css');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const minify = require('gulp-js-minify');
const sass = require('gulp-sass');
const uglify = require('gulp-uglifyes');
const browserSync = require('browser-sync');


const cleanDist = () => {
    return gulp.src('dist/*/').pipe(clean());
}

const sassBuild = () => {
    return gulp.src('src/sass/main.sass')    
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(css())
            .pipe(gulp.dest('dist/css/'));
}

const jsBuild = () => {
    return gulp.src('src/js/*.js')
            .pipe(concat('main.js'))
            .pipe(uglify())
            .pipe(minify())
            .pipe(gulp.dest('dist/js/'))
}

const imgBuild = () => {
    return gulp.src('src/img/*')
            .pipe(imagemin())
            .pipe(gulp.dest('dist/img/'))
}

const refreshPage = (done) => {
    browserSync.init({
        server: "./"
    });

    gulp.watch("src/sass/*.sass", sassBuild).on('change', browserSync.reload);
    gulp.watch("src/js/*.js", jsBuild).on('change', browserSync.reload);
    gulp.watch("src/img/*", imgBuild).on('change', browserSync.reload);
    gulp.watch("index.html").on('change', browserSync.reload);
    done();
};


gulp.task('build', gulp.series(cleanDist, sassBuild, jsBuild, imgBuild));
gulp.task('dev', refreshPage);