var gulp = require('gulp');
var gulpif = require('gulp-if');
var sprity = require('sprity');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('./public'));



gulp.task('sprites', function () {
  return sprity.src({
    src: './public/sprites/*.{png,jpg}',
    style: './style.css',
  })
  .pipe(gulpif('*.png', gulp.dest('./public/img/'), gulp.dest('./public/')))
});

app.listen(PORT, () => console.log(`Server started on port`, PORT));
