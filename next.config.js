const withImages = require('next-images')
module.exports = withImages({
	serverRuntimeConfig: {
		MONGODB_URI: 'mongodb://127.0.0.1:27017',
		MONGODB_DB: 'helloworld',
	},
	publicRuntimeConfig: {},
	webpack(config, options) {
		const { dir, defaultLoaders } = options
		config.resolve.extensions.push('.ts', '.tsx')
		config.module.rules.push({
			test: /\\.+(ts|tsx)$/,
			include: [dir],
			exclude: /node_modules/,
			use: [defaultLoaders.babel, { loader: 'ts-loader', options: { transpileOnly: true } }],
		})
		return config
	},
})
