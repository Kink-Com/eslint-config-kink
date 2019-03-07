module.exports = {
	extends: [
		'kink',
	],
	env: {
		browser: false,
		jquery: false,
		mocha: false,
		mongo: true,
		node: true,
	},
	rules: {
		'no-console': 'off',
		'node/shebang': 'off',
		'no-process-exit': 'off',
	},
};
