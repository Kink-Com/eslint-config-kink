'use strict';

module.exports = {
	extends: [
		'plugin:node/recommended'
	],
	plugins: [
		'dependencies',
		'jsdoc',
		'mocha',
		'node',
		'promise',
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
		// https://github.com/airbnb/javascript#blocks--cuddled-elses
		'brace-style': [
			'error',
			'1tbs'
		],

		// http://eslint.org/docs/rules/camelcase
		// https://github.com/airbnb/javascript#naming--camelCase
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
				before: false,
				after: true
			}
		],

		// http://eslint.org/docs/rules/comma-style
		// https://github.com/airbnb/javascript#commas--leading-trailing
		'comma-style': [
			'error',
			'last'
		],

		// http://eslint.org/docs/rules/curly
		curly: [
			'error',
			'all'
		],

		// https://www.npmjs.com/package/eslint-plugin-dependencies#dependenciescase-sensitive
		'dependencies/case-sensitive': 1,

		// https://www.npmjs.com/package/eslint-plugin-dependencies#dependenciesno-cycles
		'dependencies/no-cycles': 1,

		// https://www.npmjs.com/package/eslint-plugin-dependencies#dependenciesno-unresolved
		// Duplicates node/no-missing-require
		'dependencies/no-unresolved': 0,

		// https://www.npmjs.com/package/eslint-plugin-dependencies#dependenciesrequire-json-ext
		'dependencies/require-json-ext': 1,

		// http://eslint.org/docs/rules/dot-notation
		'dot-notation': [
			'warn',
			{
				allowKeywords: true,
				allowPattern: '^[a-z]+(_[a-z]+)+$'
			}
		],

		// http://eslint.org/docs/rules/eqeqeq
		// https://github.com/airbnb/javascript#comparison--eqeqeq
		eqeqeq: [
			'error',
			'always'
		],

		// http://eslint.org/docs/rules/func-call-spacing
		'func-call-spacing': [
			'error',
			'never'
		],

		// http://eslint.org/docs/rules/id-length
		'id-length': [
			'warn',
			{
				exceptions: ['e', 'i', 'j', '_', '$']
			}
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
		// Requires that block description and tag description are written in complete sentences.
		// Turning off for now, there's a large amount of the codebase that does not adhere to this standard.
		'jsdoc/require-description-complete-sentence': 0,

		// https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-hyphen-before-param-description
		// Disabling due to institutional history / preference.
		'jsdoc/require-hyphen-before-param-description': 0,

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

		// https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/handle-done-callback.md
		'mocha/handle-done-callback': 'error',

		// https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-exclusive-tests.md
		'mocha/no-exclusive-tests': 'error',

		// https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-return-and-callback.md
		'mocha/no-return-and-callback': 'error',

		// https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-sibling-hooks.md
		'mocha/no-sibling-hooks': 'error',

		// https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-synchronous-tests.md
		'mocha/no-synchronous-tests': 'error',

		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/exports-style.md
		'node/exports-style': ['error', 'module.exports'],

		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
		'node/no-unpublished-require': 'off',

		// http://eslint.org/docs/rules/no-alert
		'no-alert': 'error',

		// http://eslint.org/docs/rules/no-bitwise
		'no-bitwise': 'error',

		// http://eslint.org/docs/rules/no-caller
		'no-caller': 'error',

		// http://eslint.org/docs/rules/no-compare-neg-zero.html
		'no-compare-neg-zero': 'error',

		// http://eslint.org/docs/rules/no-const-assign.html
		'no-const-assign': 'error',

		// http://eslint.org/docs/rules/no-delete-var
		'no-delete-var': 'error',

		// http://eslint.org/docs/rules/no-dupe-args
		'no-dupe-args': 'error',

		// http://eslint.org/docs/rules/no-dupe-keys
		'no-dupe-keys': 'error',

		// http://eslint.org/docs/rules/no-duplicate-case
		'no-duplicate-case': 'error',

		// http://eslint.org/docs/rules/no-else-return
		'no-else-return': 'error',

		// http://eslint.org/docs/rules/no-empty
		'no-empty': 'error',

		// http://eslint.org/docs/rules/no-empty-character-class
		'no-empty-character-class': 'error',

		// http://eslint.org/docs/rules/no-empty-pattern
		'no-empty-pattern': 'error',

		// https://eslint.org/docs/rules/no-ex-assign
		'no-ex-assign': 'error',

		// http://eslint.org/docs/rules/no-extra-boolean-cast
		'no-extra-boolean-cast': 'error',

		// https://eslint.org/docs/rules/no-extra-semi
		'no-extra-semi': 'error',

		// https://eslint.org/docs/rules/no-fallthrough
		'no-fallthrough': 'error',

		// https://eslint.org/docs/rules/no-invalid-regexp
		'no-invalid-regexp': [
			'error',
			{ allowConstructorFlags: ['u', 'y'] }
		],

		// https://eslint.org/docs/rules/no-irregular-whitespace
		'no-irregular-whitespace': 'error',

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

		// http://eslint.org/docs/rules/no-new-symbol
		'no-new-symbol': 'error',

		// http://eslint.org/docs/rules/no-redeclare
		'no-redeclare': 'error',

		// https://github.com/nodejs/node/blob/8191af5b292aa5d5f07492105781b6cf1d91c42f/.eslintrc.yaml#L104
		'no-restricted-syntax': [2, {
			selector: 'CallExpression[callee.name=\'setTimeout\'][arguments.length<2]',
			message: 'setTimeout() must be invoked with at least two arguments.'
		}, {
			selector: 'CallExpression[callee.name=\'setInterval\'][arguments.length<2]',
			message: 'setInterval() must be invoked with at least 2 arguments.'
		}, {
			selector: 'ThrowStatement > CallExpression[callee.name=/Error$/]',
			message: 'Use new keyword when throwing an Error.'
		}],

		// http://eslint.org/docs/rules/no-self-assign
		'no-self-assign': [
			'error',
			{
				props: true
			}
		],

		// https://eslint.org/docs/rules/no-this-before-super
		'no-this-before-super': 'error',

		// https://eslint.org/docs/rules/no-throw-literal
		'no-throw-literal': 'error',

		// http://eslint.org/docs/rules/no-var
		// https://github.com/airbnb/javascript#references--disallow-var
		'no-var': 'error',

		// http://eslint.org/docs/rules/no-undef
		// https://github.com/airbnb/javascript#variables--const
		'no-undef': 'error',

		// http://eslint.org/docs/rules/no-undef-init
		'no-undef-init': 'error',

		// http://eslint.org/docs/rules/no-unreachable
		'no-unreachable': 'error',

		// http://eslint.org/docs/rules/no-unused-labels
		'no-unused-labels': 'error',

		// http://eslint.org/docs/rules/no-useless-escape
		'no-useless-escape': 'error',

		// http://eslint.org/docs/rules/no-useless-return
		'no-useless-return': 'error',

		// http://eslint.org/docs/rules/no-unused-vars
		'no-unused-vars': [
			'error',
			{
				args: 'after-used',
				caughtErrors: 'all',
				vars: 'all',
				varsIgnorePattern: 'should|expect'
			}
		],

		// https://eslint.org/docs/rules/no-unexpected-multiline
		'no-unexpected-multiline': 'error',

		// https://eslint.org/docs/rules/no-unsafe-finally
		'no-unsafe-finally': 'error',

		// http://eslint.org/docs/rules/no-void
		'no-void': 'error',

		// https://eslint.org/docs/rules/object-curly-spacing
		'object-curly-spacing': [
			'error',
			'always'
		],

		// http://eslint.org/docs/rules/object-shorthand
		// https://github.com/airbnb/javascript#es6-object-shorthand
		'object-shorthand': 'error',

		// http://eslint.org/docs/rules/one-var
		// https://github.com/airbnb/javascript#variables--one-const
		'one-var': [
			'error',
			'never'
		],

		// https://eslint.org/docs/rules/padding-line-between-statements
		'padding-line-between-statements': [
			'Error',
			{ blankLine: 'always', prev: 'directive', next: '*' },
			{ blankLine: 'never', prev: 'directive', next: 'directive' }
		],

		// http://eslint.org/docs/rules/prefer-const
		// https://github.com/airbnb/javascript#variables--const
		// If a variable is never reassigned, using the const declaration is better.
		// TODO: Turned off for now; revisit.
		'prefer-const': 'off',

		// http://eslint.org/docs/rules/prefer-promise-reject-errors
		'prefer-promise-reject-errors': 'error',

		// http://eslint.org/docs/rules/prefer-template
		'prefer-template': 'error',

		// https://www.npmjs.com/package/eslint-plugin-promise#rule-always-return
		'promise/always-return': 'warn',

		// https://www.npmjs.com/package/eslint-plugin-promise#rule-catch-or-return
		'promise/catch-or-return': 'warn',

		// https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-new-statics.md
		'promise/no-new-statics': 'error',

		// https://www.npmjs.com/package/eslint-plugin-promise#rule-no-return-wrap
		'promise/no-return-wrap': 'warn',

		// https://www.npmjs.com/package/eslint-plugin-promise#param-names
		'promise/param-names': 'error',

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
					ClassDeclaration: false,
					ArrowFunctionExpression: false
				}
			}
		],

		// http://eslint.org/docs/rules/quotes
		quotes: [
			'warn',
			'single'
		],

		// http://eslint.org/docs/rules/require-yield
		'require-yield': 'error',

		// https://github.com/nodesecurity/eslint-plugin-security#detect-buffer-noassert
		'security/detect-buffer-noassert': 1,

		// https://github.com/nodesecurity/eslint-plugin-security#detect-child-process
		'security/detect-child-process': 1,

		// https://github.com/nodesecurity/eslint-plugin-security#detect-disable-mustache-escape
		'security/detect-disable-mustache-escape': 1,

		// https://github.com/nodesecurity/eslint-plugin-security#detect-eval-with-expression
		'security/detect-eval-with-expression': 1,

		// https://github.com/nodesecurity/eslint-plugin-security#detect-new-buffer
		'security/detect-new-buffer': 1,

		// https://github.com/nodesecurity/eslint-plugin-security#detect-no-csrf-before-method-override
		'security/detect-no-csrf-before-method-override': 1,

		// https://github.com/nodesecurity/eslint-plugin-security#detect-non-literal-fs-filename
		'security/detect-non-literal-fs-filename': 1,

		// https://github.com/nodesecurity/eslint-plugin-security#detect-non-literal-regexp
		'security/detect-non-literal-regexp': 1,

		// https://github.com/nodesecurity/eslint-plugin-security#detect-non-literal-require
		'security/detect-non-literal-require': 1,

		// https://github.com/nodesecurity/eslint-plugin-security#detect-object-injection
		'security/detect-object-injection': 0,

		// https://github.com/nodesecurity/eslint-plugin-security#detect-possible-timing-attacks
		'security/detect-possible-timing-attacks': 1,

		// https://github.com/nodesecurity/eslint-plugin-security#detect-pseudoRandomBytes
		'security/detect-pseudoRandomBytes': 1,

		// https://github.com/nodesecurity/eslint-plugin-security#detect-unsafe-regex
		'security/detect-unsafe-regex': 1,

		// http://eslint.org/docs/rules/semi
		semi: [
			'error',
			'always'
		],

		// https://eslint.org/docs/rules/semi-spacing
		'semi-spacing': 'error',

		// http://eslint.org/docs/rules/spaced-comment
		'spaced-comment': [
			'error',
			'always'
		],

		// https://eslint.org/docs/rules/space-in-parens
		'space-in-parens': [
			'error',
			'never'
		],

		// http://eslint.org/docs/rules/space-infix-ops
		'space-infix-ops': [
			'error'
		],

		// http://eslint.org/docs/rules/space-before-blocks
		'space-before-blocks': 'error',

		// http://eslint.org/docs/rules/space-before-function-paren
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'ignore'
			}
		],

		// http://eslint.org/docs/rules/strict
		strict: [
			'error',
			'global'
		],

		// https://eslint.org/docs/rules/template-curly-spacing
		'template-curly-spacing': [
			'error',
			'never'
		],

		// http://eslint.org/docs/rules/use-isnan
		'use-isnan': 'error',

		// http://eslint.org/docs/rules/valid-jsdoc
		'valid-jsdoc': [
			'error',
			{
				requireParamDescription: true,
				requireReturnDescription: true,
				requireReturn: false,
				requireReturnType: true,
				// Institutional history / preference.
				prefer: {
					return: 'return'
				}
			}
		],

		// http://eslint.org/docs/rules/valid-typeof
		'valid-typeof': 'error',

		// http://eslint.org/docs/rules/wrap-iife
		'wrap-iife': [
			'error',
			'inside'
		]
	},
	settings: {
		jsdoc: {
			tagNamePreference: {
				returns: 'return'
			}
		}
	}
};
