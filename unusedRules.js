#!/usr/bin/env node

/* eslint node/shebang: 0, no-process-exit: 0, security/detect-non-literal-require: 0, no-console: 0 */

'use strict';

const argv = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');
const { table } = require('table');
const forEach = require('lodash/forEach');
const get = require('lodash/get');
const has = require('lodash/has');
const ruleFinder = require('eslint-find-rules')('./index.js');

// Help.
if (argv.h === true) {
	console.log(chalk.underline('ESLint unused rules report'));
	console.log('  -p <plugin> - filter by plugin, like "eslint"');
	console.log('  -r <value> - filter by whether a rule is recommended, like "yes"');
	console.log('  -v <value> - filter by recommend value, like "error"');
	console.log();
	process.exit(0);
}

const rows = [];
const countsByPlugin = {};

const recommendedRules = {
	eslint: require('eslint/conf/eslint-recommended').rules,
	// eslint-plugin-dependencies has no recommended.
	// eslint-plugin-jsdoc has no recommended.
	mocha: require('eslint-plugin-mocha').configs.recommended.rules,
	node: require('eslint-plugin-node/lib/configs/recommended.json').rules,
	promise: require('eslint-plugin-promise').configs.recommended.rules,
	security: require('eslint-plugin-security').configs.recommended.rules
};

const unused = ruleFinder.getUnusedRules();

unused.forEach(rule => {
	// Determine if the rule is a plugin or not.
	const isPlugin = rule.includes('/');
	// Determine the name of the rule.
	const name = rule;
	// Determine the name of the plugin.
	const plugin = isPlugin ? rule.split('/')[0] : 'eslint';

	// Filter by plugin.
	if (argv.p && argv.p !== plugin) {
		return;
	}

	// Determine documentation page.
	let url = `https://eslint.org/docs/rules/${rule}`;

	if (isPlugin) {
		// Use plugin homepage.
		const projectJson = require(`${process.cwd()}/node_modules/eslint-plugin-${plugin}/package.json`);
		url = projectJson.homepage || '?';
	}

	// Determine path to plugin.
	const rulePath = `${plugin}.${name}`;

	// Determine whether the rule is recommended.
	const recommendedBoolean = has(recommendedRules, rulePath);
	let recommended = recommendedBoolean ? 'yes' : 'no';

	// Filter by recommended value.
	if (argv.r && argv.r !== recommended) {
		return;
	}

	// Format recommendations; highlight if it is.
	if (recommendedBoolean) {
		recommended = chalk.red(recommended);
	}

	// Determine the value of the recommendation.
	let recommendedValue = get(recommendedRules, rulePath, '');
	let recommendedColor;

	// Normalize the recommended value.
	if (recommendedValue === 'error' || recommendedValue === 2) {
		recommendedValue = 'error';
		recommendedColor = 'red';
	} else if (recommendedValue === 'warn' || recommendedValue === 1) {
		recommendedValue = 'warn';
		recommendedColor = 'yellow';
	} else if (recommendedValue === 'off' || recommendedValue === 0) {
		recommendedValue = 'off';
		recommendedColor = 'green';
	}

	// Filter by recommended value.
	if (argv.v && argv.v !== recommendedValue) {
		return;
	}

	// Format recommended value.
	if (recommendedColor) {
		recommendedValue = chalk[recommendedColor](recommendedValue);
	}

	// Update counts post filtering.
	if (typeof countsByPlugin[plugin] === 'undefined') {
		countsByPlugin[plugin] = 0;
	}
	countsByPlugin[plugin] += 1;

	// Build the row.
	rows.push([ plugin, name, recommended, recommendedValue, url]);
});

// Render report.
console.log(chalk.blue('Unused Rules'));

const countsReport = [];

if (rows.length) {
	// Header.
	rows.unshift([ chalk.bold('plugin'), chalk.bold('name'), chalk.bold('recommended'), chalk.bold('recommended value'), chalk.bold('url')]);
	console.log(table(rows));
	forEach(countsByPlugin, (count, plugin) => countsReport.push(`${count} in ${plugin}`));
} else {
	console.log();
	countsReport.push('None.');
}

console.log(`${chalk.bold('Counts:')} ${countsReport.join(', ')}`);
console.log();
