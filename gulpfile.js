var gulp = require("gulp"),
  gutil = require("gulp-util"),
  minifycss = require("gulp-minify-css"),
  minifyhtml = require("gulp-minify-html"),
  path = require("path"),
  sass = require("gulp-sass");

var env = "prod",
  outputDir = "./dist/";

//style dir
gulp.task("styles", function() {
  gulp
    .src(["./css/style.css", "./css/favicon.ico"])
    .pipe(
      minifycss({
        compatiblity: "ie8"
      })
    )
    .pipe(gulp.dest("./dist/css/"))
    .on("error", gutil.log);
});

gulp.task("assets", function() {
  gulp
    .src(["./src/font/iconfont*"])
    .pipe(gulp.dest("./dist/css/"))
})

gulp.task("html", function() {
  gulp
    .src("index.html")
    .pipe(minifyhtml())
    .pipe(gulp.dest(outputDir))
    .on("error", gutil.log);
});

gulp.task("dist", ["styles", "html", "assets"]);
