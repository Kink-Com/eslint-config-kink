const { RuleTester } = require('eslint');
const Rule = require('#rules/controller-context');

const PARSER_BABEL = require.resolve('@babel/eslint-parser');

RuleTester.setDefaultConfig({
	parser: PARSER_BABEL,
	parserOptions: {
		requireConfigFile: false,
		ecmaVersion: 6,
	},
});

const ruleTester = new RuleTester();

const MESSAGE = 'Controllers must be called with a root context of `data`';
const filename = '/src/controllers/myController.js';

ruleTester.run('controller-context', Rule, {
	valid: [
		{
			code: `
				const path = require('path');
				const foo = 'bar';

				module.exports = async function MyController(request, response) {
					return response.render('index', { data: { foo } });
				}
			`,
			filename,
		},
		{
			code: `
				const path = require('path');
				const foo = 'bar';

				module.exports = async function MyController(request, response) {
					return response.json({ foo });
				}
			`,
			filename,
		},
	],
	invalid: [
		{
			code: `
				const path = require('path');
				const foo = 'bar';

				module.exports = async function MyController(request, response) {
					return response.render('index', { foo });
				}
			`,
			errors: [
				{
					message: MESSAGE,
					type: 'ObjectExpression',
				},
			],
			filename,
		}
	]
});
