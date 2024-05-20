module.exports = {
	rules: {
		'controller-context': require('./lib/rules/controllerContext'),
		'controller-exports': require('./lib/rules/controllerExports'),
	},
};
