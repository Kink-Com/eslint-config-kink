const path = require('path');

const CONTROLLER_ERROR_MESSAGE = 'Controllers must follow expected format. (See Notion)';

/**
 * Enforce specific export format for controllers
 * @see https://www.notion.so/kinkdotcom/Kink-com-NodeJS-Application-Structure-b7aad69b5d5440b28a47a7432e58ee86
*/
module.exports = {
	meta: {
		type: 'problem',
		docs: {
			description: 'Enforce specific export format for controllers',
			category: 'Best Practices',
			recommended: false
		},
		fixable: 'code',
		schema: [] // no options
	},
	create: function (context) {
		const filename = path.basename(context.getFilename(), '.js');

		// Title Case the filename (first letter as well), fixing any snake_case or kebab-case
		const expectedFunctionName = filename.replace(/[-_](.)/g, (_, c) => c.toUpperCase()).replace(/^./, c => c.toUpperCase());

		return {
			AssignmentExpression(node) {
				const exportNode = node.right;

				if (node.left.type !== 'MemberExpression' || node.left.object.name !== 'module' || node.left.property.name !== 'exports') {
					context.report({
						node: exportNode,
						message: `Controllers must export a single async named function. (\`module.exports = async function ${expectedFunctionName}(request, response) { }\`)`,
					});

					return;
				}

				if (exportNode.type !== 'FunctionExpression' && exportNode.type !== 'ArrowFunctionExpression') {
					context.report({
						node: exportNode,
						message: `Controllers must export a single async named function. (\`module.exports = async function ${expectedFunctionName}(request, response) { }\`)`,
					});

					return;
				}

				/**
				 * We must have a single async function exported
				 * - If the function is not async, add async keyword
				 * - If the function is an arrow function, convert it to a function expression
				 * - If the function is not named, add the filename as the name
				 * - If the function is named, ensure it matches the filename
				*/
				if (
					!exportNode.async ||
					!exportNode.id ||
					exportNode.id.name !== expectedFunctionName ||
					exportNode.type === 'ArrowFunctionExpression'
				) {
					context.report({
						node: exportNode,
						message: CONTROLLER_ERROR_MESSAGE,
						fix(fixer) {
							const sourceCode = context.getSourceCode().getText(exportNode);
							const params = sourceCode.slice(sourceCode.indexOf('(', 0) + 1, sourceCode.indexOf(')', 0));
							let remaining;

							if (exportNode.type === 'ArrowFunctionExpression') {
								remaining = sourceCode.slice(sourceCode.indexOf('=>', 0) + 2);
							} else {
								remaining = sourceCode.slice(sourceCode.indexOf(params) + params.length + 1);
							}

							return fixer.replaceText(exportNode, `async function ${expectedFunctionName}(${params})${remaining}`);
						}
					});

					return;
				}
			}
		};
	}
};
