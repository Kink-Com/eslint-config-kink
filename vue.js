module.exports = {
	extends: [
		'kink',
		'plugin:vue/recommended',
		'plugin:jsdoc',
	],
	env: {
		browser: true,
		jquery: false,
		mocha: false,
		mongo: false,
		node: false,
	},
	plugins: [
		'jsdoc-vuejs',
	],
	rules: {
		// Conflict with Node 6 and Vue; remove when we upgrade to Node 8.	
		'node/no-unsupported-features': 0,
		'node/no-unsupported-features/es-syntax': 'off',
		// https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-tag-names
		'jsdoc/check-tag-names': [
			0, // severity 
			{
				definedTags: [
					'vue-prop',
					'vue-data',
					'vue-computed',
					'vue-event',
				],
			},
		],
		// `html-indent` does not currently support spaces & since we are all
		// tabs everywhere, let's keep it that way!
		'vue/html-indent': 0,
		
	},
	// source: {
	// 	includePattern: '\\.(vue|js)$',
	// },
};
