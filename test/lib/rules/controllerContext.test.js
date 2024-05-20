const { RuleTester } = require('eslint');
const Rule = require('eslint-plugin-kink/lib/rules/controllerContext');

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
		{
			code: `
				const path = require('path');
				module.exports = async function MyController(request, response) {
					const result = {
						data: {
							foo: 'bar',
						},
					};

					return response.render('index', result);
				};
			`,
			filename,
		}
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
		},
		{
			code: `
			const moment = require('moment');

/**
 * Retrieve page containing report form
 *
 * @param {object} _ express request object
 * @param {object} response express response object
 */
const getReportPage = async (_, response) => {
	// Don't add cache control headers as we're printing the user email and
	// username in the form elements. This could (in theory) lead to some privacy concerns
	response.set('X-Robots-Tag', 'noindex');

	const renderData = {
		date: moment().format('MM/DD/YYYY'),
		pageTitle: 'Report a Concern',
		section: 'report',
		sectionType: 'report',
	};

	// Add reCaptcha
	response.locals.recaptcha = true;

	return response.render('report', renderData);
};

module.exports = getReportPage;`,
			errors: [
				{
					message: MESSAGE,
					type: 'ObjectExpression',
				},
			],
			filename,
		},
	]
});
