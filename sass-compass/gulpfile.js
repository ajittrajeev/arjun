var gulp        = require('gulp');
var browserSync = require('browser-sync').create();




var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('sass/Pages/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'));
    console.log("Hey");

});
// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('reload', function (done) {
    browserSync.reload();
    done();
});

// use default task to launch Browsersync and watch JS files
gulp.task('change', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.

    (gulp.series("sass")());


    gulp.watch('sass/**/*.scss',gulp.series(  'sass','reload'));


    gulp.watch('public/img/**/*.*',gulp.series(  'reload'));
    gulp.watch('public/**/*.html',gulp.series(  'reload'));


});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('watch-dir', function (done) {
    browserSync.reload();
    done();
});



// use default task to launch Browsersync and watch JS files
gulp.task('change2', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.




    gulp.watch("public/**/*.*",gulp.series(  'watch-dir'));


    gulp.watch('sass/Pages/**/*.scss',gulp.series(  'sass','watch-dir'));

    gulp.watch(["public/img/**/*.*",'"public/**/*.html"'],gulp.series(  'watch-dir'));
});



