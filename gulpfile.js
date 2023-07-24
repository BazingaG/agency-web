'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass')(require('node-sass'));
sass.compiler = require('node-sass');
var browserSync = require('browser-sync').create();
const del = require('del');

var base_path = './web/themes/custom/agency';
var paths = {
  css: {
    src: base_path+'/lib/sass/**/*.scss',
    dest: base_path+'/css'
  },
  js: {
    src: base_path+'/lib/js/*.js',
    dest: base_path+'/js'
  },
  html: {
    src: base_path+'/templates/*.html.twig'
  },
  img: {
    src: base_path+'/images/*{.svg,.png}'
  }
}

function styles() {
    return gulp
      .src(paths.css.src)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest(paths.css.dest));
}

function scripts() {
    return gulp
      .src(paths.js.src)
      .pipe(gulp.dest(paths.js.dest));
}

function reload(done) {
  browserSync.reload();
  done();
}

function clean(done) {
  (async() => {
    const deleteFiles = await del([paths.css.dest, paths.js.dest]);
    console.log('Deleted files:\n', deleteFiles.join('\n'));
  })();
  done();
}

function watch() {
  browserSync.init({
    injectChanges: true,
    open: false,
    proxy: 'agency-web.ddev.site',
    socket: {
        domain: 'localhost:3000'
    },
    files: [paths.css.src, paths.js.src, paths.html.src]
  });

  gulp.watch([paths.css.src, paths.js.src], gulp.series(styles, scripts, reload));
  gulp.watch(paths.html.src, reload);
}

exports.watch = watch;
var build = gulp.parallel(clean, styles);

exports.default = build;