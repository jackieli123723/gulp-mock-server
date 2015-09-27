var gulp = require('gulp');
var mockServer = require('./src/index');

gulp.task('mock', function() {
    gulp.src('.')
    .pipe(mockServer({
        livereload: {
            enable: false
        },
        directoryListing: true,
        port: 8090,
        open: true
    }));
});

//注册一个默认任务
gulp.task('default', ['mock']);
