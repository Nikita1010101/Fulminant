const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExterctPlugin = require('mini-css-extract-plugin')
const PostcssPresetEnv = require('postcss-preset-env')
const DovenvWebpack = require('dotenv-webpack')

const mode = process.env.NODE_ENV || 'development'
const devMode = mode === 'development'
const target = devMode ? 'web' : 'browserslist'
const devtool = devMode ? 'source-map' : undefined

module.exports = {
	context: __dirname,
	node: {
		__filename: true
	},
	mode,
	target,
	devtool,
	resolve: {
		extensions: ['.css', '.scss', '.js'],
		// alias: {
		// 	'Fulminant-Component': path.resolve(
		// 		__dirname,
		// 		'core',
		// 		'models',
		// 		'component',
		// 		'component.state.js'
		// 	),
		// 	'Fulminant-State': path.resolve(
		// 		__dirname,
		// 		'core',
		// 		'state',
		// 		'state.config.js'
		// 	),
		// 	'Fulminant-Router': path.resolve(
		// 		__dirname,
		// 		'core',
		// 		'models',
		// 		'router',
		// 		'router.state.js'
		// 	),
		// 	'Fulminant-VirtualDOM': path.resolve(
		// 		__dirname,
		// 		'core',
		// 		'models',
		// 		'virtual-dom',
		// 		'virtual-dom.state.js'
		// 	)
		// }
	},
	cache: {
		type: 'filesystem',
		cacheDirectory: path.resolve(__dirname, 'node_modules', '.temporary_cache')
	},
	devServer: {
		historyApiFallback: true,
		port: 5000
	},
	entry: ['@babel/polyfill', path.resolve(__dirname, 'core')],
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		filename: 'app.[contenthash].js',
		publicPath: '/'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html')
		}),
		new MiniCssExterctPlugin({
			filename: 'styles.[contenthash].js'
		}),
		new DovenvWebpack()
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader'
			},
			{
				test: /\.global.css$/i,
				use: [
					devMode ? 'style-loader' : MiniCssExterctPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [PostcssPresetEnv()]
							}
						}
					}
				]
			},
			{
				test: /\.s(a|c)ss$/i,
				use: [
					// devMode ? 'style-loader' : MiniCssExterctPlugin.loader,
					// 'css-loader',
					// {
					// 	loader: 'postcss-loader',
					// 	options: {
					// 		postcssOptions: {
					// 			plugins: [PostcssPresetEnv()]
					// 		}
					// 	}
					// },
					'sass-to-string',
					"sass-loader",
					// {
          //   options: {
          //     sassOptions: {
          //       outputStyle: "compressed",
          //     },
          //   },
          // },
					// 'resolve-url-loader',
				]
			},
			{
				test: /\.m?js/i,
				exclude: /(node_modules|bower_component)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
}
