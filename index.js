'use strict';

module.exports = {
	plugins: [
		'jsdoc',
		'security'
	],
	env: {
		browser: false,
		es6: true,
		jquery: false,
		mocha: true,
		mongo: true,
		node: true
	},
	parserOptions: {
		ecmaVersion: 6
	},
	rules: {
		// http://eslint.org/docs/rules/brace-style
		'brace-style': [
			'error',
			'1tbs'
		],
		// http://eslint.org/docs/rules/camelcase
		camelcase: [
			'error',
			{
				properties: 'always'
			}
		],
		// http://eslint.org/docs/rules/comma-dangle
		'comma-dangle': [
			'error',
			'never'
		],
		// http://eslint.org/docs/rules/comma-spacing
		'comma-spacing': [
			'error',
			{
				'before': false,
				'after': true
			}
		],
		// http://eslint.org/docs/rules/comma-style
		'comma-style': [
			'error',
			'last'
		],
		// http://eslint.org/docs/rules/curly
		curly: [
			'error',
			'all'
		],
		// http://eslint.org/docs/rules/dot-notation
		'dot-notation': [
			'warn',
			{
				allowKeywords: true,
				allowPattern: '^[a-z]+(_[a-z]+)+$'
			}
		],
		// http://eslint.org/docs/rules/eqeqeq
		eqeqeq: [
			'error',
			'always'
		],
		// http://eslint.org/docs/rules/func-call-spacing
		'func-call-spacing': [
			'error',
			'never'
		],
		// http://eslint.org/docs/rules/indent
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		// https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names
		'jsdoc/check-param-names': 1,
		// https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-tag-names
		'jsdoc/check-tag-names': 1,
		// https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-types
		'jsdoc/check-types': 1,
		// https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-newline-after-description
		'jsdoc/newline-after-description': 1,
		// https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description-complete-sentence
		'jsdoc/require-description-complete-sentence': 1,
		// https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-hyphen-before-param-description
		'jsdoc/require-hyphen-before-param-description': 1,
		// https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param
		'jsdoc/require-param': 1,
		// https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-description
		'jsdoc/require-param-description': 1,
		// https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-type
		'jsdoc/require-param-type': 1,
		// https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-description
		'jsdoc/require-returns-description': 1,
		// https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-type
		'jsdoc/require-returns-type': 1,
		// eslint.org/docs/rules/key-spacing
		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true,
				mode: 'strict'
			}
		],
		// http://eslint.org/docs/rules/linebreak-style
		'linebreak-style': [
			'error',
			'unix'
		],
		// http://eslint.org/docs/rules/new-cap
		'new-cap': [
			'error',
			{
				capIsNew: false
			}
		],
		// http://eslint.org/docs/rules/no-alert
		'no-alert': 'error',
		// http://eslint.org/docs/rules/no-bitwise
		'no-bitwise': 'error',
		// http://eslint.org/docs/rules/no-caller
		'no-caller': 'error',
		// http://eslint.org/docs/rules/no-const-assign.html
		'no-const-assign': 'error',
		// http://eslint.org/docs/rules/no-dupe-args
		'no-dupe-args': 'error',
		// http://eslint.org/docs/rules/no-dupe-keys
		'no-dupe-keys': 'error',
		// http://eslint.org/docs/rules/no-duplicate-case
		'no-duplicate-case': 'error',
		// http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
		'no-mixed-spaces-and-tabs': [
			'error',
			'smart-tabs'
		],
		// http://eslint.org/docs/rules/no-multi-spaces
		'no-multi-spaces': 'error',
		// http://eslint.org/docs/rules/no-multiple-empty-lines
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1
			}
		],
		// http://eslint.org/docs/rules/no-var
		'no-var': 'error',
		// http://eslint.org/docs/rules/no-undef
		'no-undef': 'error',
		// http://eslint.org/docs/rules/no-undef-init
		'no-undef-init': 'error',
		// http://eslint.org/docs/rules/no-unreachable
		'no-unreachable': 'error',
		// http://eslint.org/docs/rules/no-unused-vars
		'no-unused-vars': [
			'error',
			{
				args: 'after-used',
				caughtErrors: 'all',
				vars: 'all'
			}
		],
		// http://eslint.org/docs/rules/no-void
		'no-void': 'error',
		// http://eslint.org/docs/rules/object-shorthand
		'object-shorthand': 'error',
		// http://eslint.org/docs/rules/one-var
		'one-var': [
			'error',
			'never'
		],
		// http://eslint.org/docs/rules/prefer-const
		// If a variable is never reassigned, using the const declaration is better.
		// TODO: Turned off for now; revisit.
		'prefer-const': 'off',
		// http://eslint.org/docs/rules/prefer-template
		'prefer-template': 'error',
		// http://eslint.org/docs/rules/quote-props
		'quote-props': [
			'error',
			'as-needed'
		],
		// http://eslint.org/docs/rules/require-jsdoc
		'require-jsdoc': [
			'error',
			{
				require: {
					FunctionDeclaration: true,
					MethodDefinition: true,
					ClassDeclaration: true,
					ArrowFunctionExpression: false
				}
			}
		],
		// http://eslint.org/docs/rules/quotes
		quotes: [
			'warn',
			'single'
		],
		// https://github.com/nodesecurity/eslint-plugin-security#detect-unsafe-regex
		'security/detect-unsafe-regex': 1,
		// https://github.com/nodesecurity/eslint-plugin-security#detect-non-literal-regexp
		'security/detect-non-literal-regexp': 1,
		// https://github.com/nodesecurity/eslint-plugin-security#detect-non-literal-require
		'security/detect-non-literal-require': 1,
		// https://github.com/nodesecurity/eslint-plugin-security#detect-non-literal-fs-filename
		'security/detect-non-literal-fs-filename': 1,
		// https://github.com/nodesecurity/eslint-plugin-security#detect-eval-with-expression
		'security/detect-eval-with-expression': 1,
		// https://github.com/nodesecurity/eslint-plugin-security#detect-pseudoRandomBytes
		'security/detect-pseudoRandomBytes': 1,
		// https://github.com/nodesecurity/eslint-plugin-security#detect-possible-timing-attacks
		'security/detect-possible-timing-attacks': 1,
		// https://github.com/nodesecurity/eslint-plugin-security#detect-no-csrf-before-method-override
		'security/detect-no-csrf-before-method-override': 1,
		// https://github.com/nodesecurity/eslint-plugin-security#detect-buffer-noassert
		'security/detect-buffer-noassert': 1,
		// https://github.com/nodesecurity/eslint-plugin-security#detect-child-process
		'security/detect-child-process': 1,
		// https://github.com/nodesecurity/eslint-plugin-security#detect-disable-mustache-escape
		'security/detect-disable-mustache-escape': 1,
		// https://github.com/nodesecurity/eslint-plugin-security#detect-object-injection
		'security/detect-object-injection': 0,
		// https://github.com/nodesecurity/eslint-plugin-security#detect-new-buffer
		'security/detect-new-buffer': 1,
		// http://eslint.org/docs/rules/semi
		semi: [
			'error',
			'always'
		],
		// http://eslint.org/docs/rules/spaced-comment
		'spaced-comment': [
			'error',
			'always'
		],
		// http://eslint.org/docs/rules/space-infix-ops
		'space-infix-ops': [
			'error'
		],
		// http://eslint.org/docs/rules/space-before-function-paren
		'space-before-function-paren': [
			'error',
			'never'
		],
		// http://eslint.org/docs/rules/strict
		strict: [
			'error',
			'global'
		],
		// http://eslint.org/docs/rules/wrap-iife
		'wrap-iife': [
			'error',
			'inside'
		],
		// http://eslint.org/docs/rules/valid-jsdoc
		'valid-jsdoc': [
			'error',
			{
				requireReturn: false
			}
		]
	}
};
