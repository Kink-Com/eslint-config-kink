'use strict';

module.exports = {
	extends: [
		'kink'
	],
	env: {
		browser: true,
		jquery: true,
		mocha: true,
		mongo: false,
		node: false
	},
	rules: {
	// Whitelisting done for 'alternative promise chains'.
		'promise/catch-or-return': [
			'warn',
			{
				terminationMethod: ['catch', 'done']
			}
		]
	}
};
