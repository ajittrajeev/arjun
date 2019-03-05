var gulp        = require('gulp');
var browserSync = require('browser-sync').create();



// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('watch-dir', function (done) {
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
    gulp.watch("public/**/*.*",gulp.series(  'watch-dir'));
});
