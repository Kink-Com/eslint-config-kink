const path = require('path');

/**
 * When we are rendering a controller, we require a root context of `data` to be passed as the root method.
 * @see https://www.notion.so/kinkdotcom/Kink-com-NodeJS-Application-Structure-b7aad69b5d5440b28a47a7432e58ee86
*/
module.exports = {
	meta: {
		type: 'problem',
		docs: {
			description: 'Controllers must be called with a root context of `data` when rendering views',
			category: 'Best Practices',
			recommended: false
		},
		schema: [], // no options
		messages: {
			contextError: 'Controllers must be called with a root context of `data`'
		}
	},
	create: function (context) {
		return {
			CallExpression(node) {
				if (
					node.callee.type === 'MemberExpression' &&
					node.callee.object.name === 'response' &&
					node.callee.property.name === 'render'
				) {
					const args = node.arguments;
					if (args.length === 2 && args[1].type === 'ObjectExpression') {
						const secondArg = args[1];
						const hasDataProperty = secondArg.properties.some(
							property => property.key.name === 'data'
						);
						if (!hasDataProperty) {
							context.report({
								node: secondArg,
								messageId: 'contextError'
							});
						}
					}
				}
			}
		};
	}
};
