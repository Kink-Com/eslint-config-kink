module.exports = {
	extends: [
		'kink',
		'plugin:vue/recommended',
	],
	env: {
		browser: true,
		jquery: false,
		mocha: false,
		mongo: false,
		node: false,
	},
	parserOptions: {
		sourceType: 'script',
	},
	rules: {
		// Conflict with Node 6 and Vue; remove when we upgrade to Node 8.
		'node/no-unsupported-features': 0,
		// `html-indent` does not currently support spaces & since we are all
		// tabs everywhere, let's keep it that way!
		'vue/html-indent': 0,
		'node/no-unsupported-features/es-syntax': 'off',
	},
};
