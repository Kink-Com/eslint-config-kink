module.exports = {
	extends: ["airbnb", "airbnb/hooks"],
	plugins: [],
	env: {
		es6: true,
		node: true,
		browser: true,
	},
	parserOptions: {
		ecmaVersion: 6,
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: "script",
	},
	rules: {
		indent: [2, "tab"],
		"comma-dangle": [2, "always-multiline"],
		"object-shorthand": [
			2,
			"always",
			{
				ignoreConstructors: false,
				avoidQuotes: false, // this is the override vs airbnb
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
		"no-tabs": 0,
		"eslint-plugin/consistent-output": 0,
		"eslint-plugin/require-meta-schema": 0,
		"eslint-plugin/require-meta-type": 0,
		"react/jsx-props-no-spreading": "off",
	},
};
