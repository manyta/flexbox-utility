const gulp = require('gulp'); // подключили gulp
const autoprefixer = require('gulp-autoprefixer');

gulp.task('test', function (){
    console.log("Hello World!");
});

gulp.task('autoprefixer', function (){
    gulp.src('source/css/*.css') // забираем файл который будем обрабатывать
        .pipe(autoprefixer({  // запуск автопрефексира с настройками
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css')) // куда выгружен файл
});

gulp.task('watch', ["autoprefixer"], function (){
    gulp.watch('source/css/*.css', ["autoprefixer"]);
})