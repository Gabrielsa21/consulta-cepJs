const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('scripts', () => {
        console.log('rodando task scripts');
        //gulp.src('src/**/*.js')
        gulp.src(['src/jquery-3.2.1.js','src/cep.js'])
        .pipe(babel({presets:['es2015']}))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build'));
});
