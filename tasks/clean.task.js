const gulp = require('gulp')
const del = require('del')

gulp.task('clean', async function() {
    del(['dist', 'debug.log', 'src/_includes/styles/main.css'])
})