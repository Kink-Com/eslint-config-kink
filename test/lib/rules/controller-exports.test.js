const { RuleTester } = require('eslint');
const Rule = require('#rules/controller-exports');

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
					type: 'FunctionExpression',
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
		}
	]
});
