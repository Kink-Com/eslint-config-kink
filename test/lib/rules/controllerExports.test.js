const { RuleTester } = require('eslint');
const Rule = require('eslint-plugin-kink/lib/rules/controllerExports');

const PARSER_BABEL = require.resolve('@babel/eslint-parser');

RuleTester.setDefaultConfig({
	parser: PARSER_BABEL,
	parserOptions: {
		requireConfigFile: false,
		ecmaVersion: 6,
	},
});

const ruleTester = new RuleTester();

const filename = '/src/controllers/myController.js';
const MESSAGE = 'Controllers must follow expected format. (See Notion)';

ruleTester.run('controller-exports', Rule, {
	valid: [
		{
			code: `module.exports = async function MyController(request, response) { }`,
			filename: 'my-controller.js'
		},
		{
			code: `module.exports = async function MyController(request, response) { }`,
			filename: 'my_controller.js'
		},
		{
			code: `module.exports = async function MyController(request, response) { }`,
			filename: 'myController.js'
		},
		{
			code: `
				const path = require('path');
				const hello = 'world';
				const foo = 'bar';

				module.exports = async function MyController(request, response) {
					return response.render('index', { hello, foo });
				};
			`,
			filename: 'myController.js'
		}
	],
	invalid: [
		{
			code: `
			/**
			 * Renders the email confirmation change page
			 *
			 * @param  {object} request express request object
			 * @param  {object} response express response object
			 */
			const changeEmailConfirmGet = (request, response) => {
				let params = {};

				if (request.query.token) {
					params = {
						member: request.session.member,
						identToken: request.query.token,
						pageTitle: 'Confirm Email Change',
					};
					response.render('./account/change-email-confirm', params);
				} else {
					response.redirect('/');
				}
			};

			module.exports = changeEmailConfirmGet;
			`,
			errors: [
				{
					message: `Controllers must export a single async named function. (\`module.exports = async function MyController(request, response) { }\`)`,
					type: 'Identifier',
				},
			],
			filename,
		},
		{
			code: `module.exports = function MyController(request, response) { }`,
			output: `module.exports = async function MyController(request, response) { }`,
			errors: [
				{
					message: MESSAGE,
					type: 'FunctionExpression',
				},
			],
			filename,
		},
		{
			code: 'module.exports = async (request, response) => {}',
			output: 'module.exports = async function MyController(request, response) {}',
			errors: [
				{
					message: MESSAGE,
					type: 'ArrowFunctionExpression',
				},
			],
			filename,
		},
		{
			code: 'module.exports = async function NotMyController(request, response) {}',
			output: 'module.exports = async function MyController(request, response) {}',
			errors: [
				{
					message: MESSAGE,
					type: 'FunctionExpression',
				},
			],
			filename,
		},
		{
			code: `module.exports = async function myController(request, response) {
				// function body
			}`,
			output: `module.exports = async function MyController(request, response) {
				// function body
			}`,
			errors: [
				{
					message: MESSAGE,
					type: 'FunctionExpression',
				},
			],
			filename,
		},
		{
			code: `const helloWorld = async function MyController(request, response) {
				// Hello world!
			};

			module.exports = helloWorld;`,
			output: `const helloWorld = async function MyController(request, response) {
				// Hello world!
			};

			module.exports = helloWorld;`,
			errors: [
				{
					message: `Controllers must export a single async named function. (\`module.exports = async function MyController(request, response) { }\`)`,
					type: 'Identifier',
				},
			],
			filename,
		},
		{
			code: `module.exports.myController = async function MyController(request, response) { }`,
			output: `module.exports.myController = async function MyController(request, response) { }`,
			errors: [
				{
					message: `Controllers must export a single async named function. (\`module.exports = async function MyController(request, response) { }\`)`,
				},
			],
			filename,
		},
		{
			code: `
				const hello = 'world';
				const foo = 'bar';

				module.exports = { hello, world };
			`,
			output: `
				const hello = 'world';
				const foo = 'bar';

				module.exports = { hello, world };
			`,
			errors: [
				{
					message: `Controllers must export a single async named function. (\`module.exports = async function MyController(request, response) { }\`)`,
					type: 'ObjectExpression',
				},
			],
			filename,
		},
		{
			code: `
				module.exports = async function MyController(request, response) { };
				module.exports.fooBar = async function FooBar(request, response) { };
			`,
			output: `
				module.exports = async function MyController(request, response) { };
				module.exports.fooBar = async function FooBar(request, response) { };
			`,
			errors: [
				{
					message: `Controllers must export a single async named function. (\`module.exports = async function MyController(request, response) { }\`)`,
					type: 'FunctionExpression',
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
					message: `Controllers must export a single async named function. (\`module.exports = async function MyController(request, response) { }\`)`,
					type: 'Identifier',
				},
			],
			filename,
		},
	],
});
