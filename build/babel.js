var path = require('path');
var rootDir = path.join(__dirname, '../..');

module.exports = function (gulp, $, resources) {
    gulp.task('babel', () => {
        return gulp.src(resources.js)
            .pipe($.babel({
                presets: ['es2015']
            }))
            .pipe($.concat('angular-easy-popover.js'))
            .pipe(gulp.dest(resources.out))
            .pipe(gulp.dest(resources.docs))
            .pipe($.uglify())
            .pipe($.rename(function(path) {
                path.extname = ".min.js"
            }))
            .pipe(gulp.dest(resources.out));
    });
};