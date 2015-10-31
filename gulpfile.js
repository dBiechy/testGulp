var gulp = require('gulp');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');


gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({
    	stream:true
    }))
});


// gulp.task('sass:watch', function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// });

gulp.task('autoprefix', function () {
    return gulp.src('./css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('browserSync', function(){

	browserSync({
		server:{
			baseDir:'./'
		}
	})
});


gulp.task('watch', ['browserSync', 'sass', 'autoprefix'],   function(){
	gulp.watch('./sass/**/*.scss',['sass']);
})

