let mix = require('laravel-mix');
require('laravel-mix-blade-reload');

mix
//.setPublicPath('dist')
// .js('./main.js', 'dist')
.sass('./sass/style.scss', 'dist')
.bladeReload({path:'./*.html'});