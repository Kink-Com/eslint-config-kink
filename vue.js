'use strict';

module.exports = {
	extends: [
		'kink',
		'plugin:vue/recommended'
	],
	env: {
		browser: true,
		jquery: false,
		mocha: false,
		mongo: false,
		node: false
	},
	rules: {
		// Conflict with Node 6 and Vue; remove when we upgrade to Node 8.
		'node/no-unsupported-features': 0
	}
};
