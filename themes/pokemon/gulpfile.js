// gulp.task('cssrename', function () {
//   return gulp.src('./css/style.css')
//     .pipe(rename('style.min.css'))
//     .pipe(gulp.dest('./css'));
// });

// gulp.task('sass-dev:watch', function () {
//   gulp.watch([
//     './scss/*.scss',
//     './scss/**/*.scss',
//   ], gulp.series(['build']));
// });

// gulp.task('sass:watch', function () {
//   gulp.watch([
//     './scss/*.scss',
//     './scss/**/*.scss',
//   ], gulp.series(['build-prod']));
// });

const gulp = require("gulp");
const minifycss = require("gulp-minify-css");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require("sass"));

gulp.task("sass", () => {
  return gulp
    .src("./scss/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./css"));
});

gulp.task("cssmin", function () {
  return gulp
    .src("./css/style.css")
    .pipe(minifycss({ keepSpecialComments: 0 }))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("./css"));
});

gulp.task("build", gulp.series(["sass", "cssmin"]));

gulp.task("default", gulp.series(["build"]));
