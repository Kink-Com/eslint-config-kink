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

const MESSAGE = 'Controllers must be called with a root context of `data` (`response.render("index", { data: { foo } })`)';
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
		},
		{
			code: `
				const path = require('path');
				const foo = 'bar';

				module.exports = async function MyController(request, response) {
					return response.render('report', {
						...request.body,
						sectionType: 'report',
						pageTitle: 'Report a Concern',
						message: 'Thank you for reporting your concern with us. We take these reports extremely seriously.',
					});
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
