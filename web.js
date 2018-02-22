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

		// https://eslint.org/docs/rules/id-blacklist
		'id-blacklist': [
			2,
			'ad',
			'ads',
			'banner',
			'banners',
			'social'
		],

		// Whitelisting done for 'alternative promise chains'.
		'promise/catch-or-return': [
			'warn',
			{
				terminationMethod: ['catch', 'done']
			}
		]
	}
};
