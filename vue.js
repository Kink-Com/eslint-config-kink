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
	}
};
