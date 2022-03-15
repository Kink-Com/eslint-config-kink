module.exports = {
	extends: ["airbnb", "airbnb/hooks", "prettier"],
	plugins: [],
	env: {
		es6: true,
		browser: true,
		jest: true,
	},
	parserOptions: {
		ecmaVersion: 12,
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: "module",
	},
	rules: {
		indent: [2, "tab"],
		"prettier/prettier": "error",
		"react/jsx-uses-vars": "error",
		"react/prop-types": ["error", { ignore: ["children"] }],
		"object-shorthand": [
			2,
			"always",
			{
				ignoreConstructors: false,
				avoidQuotes: false, // force to use ":" if the fuction name is in Quotes ex: "bar-baz": fucntions (){}
			},
		],
		"max-len": [
			2,
			120,
			{
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreComments: true,
			},
		],
		"consistent-return": 0,

		"prefer-destructuring": [
			2,
			{ array: false, object: false },
			{ enforceForRenamedProperties: false },
		],
		"function-paren-newline": 0,
		"no-plusplus": 1,
		"no-param-reassign": 1,
		strict: [2, "safe"],
		"valid-jsdoc": [
			2,
			{
				requireReturn: false,
				requireParamDescription: false,
				requireReturnDescription: false,
			},
		],

		"arrow-parens": 0,
		"class-methods-use-this": 0,
		"eslint-plugin/consistent-output": 0,
		"eslint-plugin/require-meta-schema": 0,
		"eslint-plugin/require-meta-type": 0,
		"global-require": 0,
		"import/no-extraneous-dependencies": 0,
		"import/prefer-default-export": 0,
		"no-mixed-operators": 0,
		"no-tabs": 0,
		"react/jsx-props-no-spreading": 0,
		"react/require-default-props": 0,
	},
};
