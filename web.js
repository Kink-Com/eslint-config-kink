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
	parserOptions: {
		sourceType: 'script',
	},
	rules: {
		// https://eslint.org/docs/rules/id-blacklist
		// Added as a step to avoid scripts triggering ad-blockers.
		'id-blacklist': [
			2, // This indicates severity, NOT a blacklisted value.
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
