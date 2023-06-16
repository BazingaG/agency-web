'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass')(require('node-sass'));
sass.compiler = require('node-sass');
var browserSync = require('browser-sync').create();
const del = require('del');

var base_path = './web/themes/custom/agency';
var paths = {
  css: {
    src: base_path+'/lib/sass/*.scss',
    dest: base_path+'/css'
  },
  js: {
    src: base_path+'/lib/js/*.js',
    dest: base_path+'/js'
  },
  html: {
    src: base_path+'/lib/templates/*.twig',
    dest: base_path+'/templates'
  },
  img: {
    src: base_path+'/lib/images/*{.svg,.png}',
    dest: base_path+'/images'
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

function html () {
  return gulp
    .src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest));
};

function images() {
  return gulp
    .src(paths.img.src)
    .pipe(gulp.dest(paths.img.dest));
}

function reload(done) {
  browserSync.reload();
  done();
}

function clean() {
  (async() => {
    const deleteFiles = await del([paths.css.dest, paths.html.dest, paths.js.dest, paths.img.dest]);
    console.log('Deleted files:\n', deleteFiles.join('\n'));
  })();
}

function watch(done) {
  browserSync.init({
    injectChanges: true,
    open: false,
    proxy: 'agency-web.ddev.site',
    socket: {
        domain: 'localhost:3000'
    },
    files: [paths.css.src, paths.js.src, paths.html.src]
  });

  gulp.watch(paths.html.src, gulp.series(html, reload));
  gulp.watch([paths.css.src, paths.js.src], gulp.series(styles, scripts, reload));
  done();
}

exports.watch = watch;
var build = gulp.parallel(clean, styles, scripts, html, images, watch);

exports.default = build;