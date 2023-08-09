const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({
	output: {
		// publicPath: '/vl/public/',
		// publicPath: '/test/public/',
		publicPath: '/',
		chunkFilename: 'js/components/[name].js',
	}
});

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

// mix.webpackConfig({
// 	output: {
// 		publicPath: '/vl/',
// 		publicPath: '/',
// 		chunkFilename: 'superadmin/js/components/[name].js',
// 	}
// });

// mix.js('resources/js/superadmin/app.js', 'public/superadmin/js')
//    .sass('resources/sass/superadmin/app.scss', 'public/superadmin/css');