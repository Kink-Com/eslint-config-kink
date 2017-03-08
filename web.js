'use strict';

module.exports = {
	extends: [
		'kink'
	],
	env: {
		browser: true,
		es6: false,
		jquery: true,
		mocha: true,
		mongo: false,
		node: false
	},
	parserOptions: {
		ecmaVersion: 5
	},
	rules: {
		// http://eslint.org/docs/rules/no-var
		'no-var': 'off',
		// http://eslint.org/docs/rules/object-shorthand
		'object-shorthand': 'off',
		// http://eslint.org/docs/rules/prefer-const
		'prefer-const': 'off',
		// http://eslint.org/docs/rules/one-var
		'one-var': [
			'error',
			'always'
		],
		// http://eslint.org/docs/rules/prefer-template
		'prefer-template': 'off'
	}
};
