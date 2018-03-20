'use strict';

const chalk = require('chalk');
const { table } = require('table');
const forEach = require('lodash/forEach');
const getRuleFinder = require('eslint-find-rules');
const ruleFinder = getRuleFinder('./index.js');

const rows = [];
const counts = {};

const unused = ruleFinder.getUnusedRules();

console.log(chalk.blue('Unused Rules'));

unused.forEach((rule) => {
	const isPlugin = rule.includes('/');
	const name = rule;
	const plugin = isPlugin ? rule.split('/')[0] : 'core';

	if (typeof counts[plugin] === 'undefined') {
		counts[plugin] = 0;
	}
	counts[plugin] += 1;

	let url = `https://eslint.org/docs/rules/${rule}`;

	if (isPlugin) {
		const projectJson = require(`${process.cwd()}/node_modules/eslint-plugin-${plugin}/package.json`); // eslint-disable-line security/detect-non-literal-require
		url = projectJson.homepage || '?';
	}

	rows.push([ name, plugin, url]);
});

rows.unshift([ chalk.bold('name'), chalk.bold('plugin'), chalk.bold('url')]);

console.log(table(rows));

const report = [];

forEach(counts, (count, plugin) => report.push(`${count} in ${plugin}`));

console.log(`${chalk.bold('Counts:')} ${report.join(', ')}`);
