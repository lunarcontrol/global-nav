const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const pkg = require('../package.json');

gulp.task('web-server', ()=>{
    browserSync.init({
        open: false,
        port: pkg.gulp_config.server_port,
        server: {
            baseDir: pkg.gulp_config.build_path,
            directory: true
        },
        watchOptions: {
            ignoreInitial: true
        },
	    files: `${pkg.gulp_config.build_path}/**/*`,
        cors:true,
        reloadOnRestart: true
    });
});