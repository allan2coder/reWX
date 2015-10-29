//导入工具包
var gulp = require('gulp'),
    less = require('gulp-less');

//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', function () {
    gulp.src('dev/less/main.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('dev/css'));//将会在src/css下生成index.css
});

//调用多模块（编译less后压缩css）
var cssmin = require('gulp-minify-css');
gulp.task('compressCss', function () {
    gulp.src('dev/less/main.less')
        .pipe(less())
        .pipe(cssmin()) //兼容IE7及以下需设置compatibility属性 .pipe(cssmin({compatibility: 'ie7'}))
        .pipe(gulp.dest('dev/css'));
});

//监听事件（自动编译less）
gulp.task('default', function () {
    gulp.watch('dev/**/*.less', ['compressCss']); //当所有less文件发生改变时，调用testLess任务
});

// 将bower的库文件对应到指定位置
gulp.task('buildlib',function(){
  gulp.src('./bower_components/**')
      .pipe(gulp.dest('./dev/lib/'))
});

gulp.task('dev', ['default','buildlib']);

