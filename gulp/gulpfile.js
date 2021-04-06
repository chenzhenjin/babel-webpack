/*
 * @Author: chenzhenjin
 * @Email: BrotherStudy@163.com
 * @Date: 2021-04-06 15:21:08
 * @LastEditTime: 2021-04-06 16:53:36
 * @Descripttion: 模块描述
 */
const gulp = require("gulp");
const gulpConcat = require("gulp-concat");
// const through2 = require("through2");
const format = require("./plugins/format.js");
gulp.task("concat", () => {
  return gulp
    .src("./20210406/*.txt")
    .pipe(gulpConcat("20210406.txt"))
    .pipe(gulp.dest("./demo/"))
    .on("end", () => {
      console.log("concat 合并完成");
    });
});
gulp.task(
  "format",
  gulp.series("concat", () => {
    return gulp
      .src("./demo/20210406.txt")
      .pipe(format())
      .pipe(gulp.dest("./demo/"))
      .on("end", () => {
        console.log("format, 清除空行");
      });
  })
);
gulp.task("watch", () => {
  gulp
    .watch(
      "./20210406/*.txt",
      gulp.series("format", (cb) => {
        cb();
      })
    )
    .on("change", () => {
      console.log("watch 文件被改变");
    });
});
