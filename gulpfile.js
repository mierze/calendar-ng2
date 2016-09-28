var gulp = require('gulp'),
    sass = require('gulp-sass'),
    useRef = require('gulp-useref'),
    paths = {
        'sassRoot': 'app/style/index.scss',
        'sass': 'app/**/*.scss',
        'statics': ['index.html', 'app/**/*.html', 'app/**/*.js'],
        'destination': 'public'
    };

gulp.task('watch', watch)
    .task('build', build)
    .task('buildStatics', buildStatics)
    .task('buildStyle', buildStyle);



function watch() {
    gulp.watch(paths.sass, ['buildStyle']);
    gulp.watch(paths.statics, ['buildStatics']);
}

function build() {
    buildStatics();
    buildStyle();
}

function buildStatics() {
    return gulp.src(paths.statics)
        .pipe(gulp.dest(paths.destination));
}

function buildStyle() {
    return gulp.src(paths.sassRoot)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.destination));
}
