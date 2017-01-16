# kink-eslint

Kink.com [ESLint](http://eslint.org/) standards.

## Installation within a project

[Uninstall ESLint globally](https://github.com/eslint/eslint/issues/1877).

```bash
npm uninstall eslint -g
rm ~/.eslintrc
```

Add the following to the project's `package.json`:

```json
"devDependencies": {
  "eslint": "^3.13.1",
  "eslint-plugin-jsdoc": "^2.4.0",
  "eslint-config-kink": "github:kink-com/eslint-config-kink"
}
```

In the project root, add/replace any `.eslintrc.*` file with a single `.eslintrc.json` with the following contents:

```javascript
{
  "extends": "kink"
}
```

Install:

```bash
npm install
```

## Use

Optimally, you should configure your editor to automatically lint all files.

To execute ESLint directly:

```bash
./node_modules/.bin/eslint .
```

As an alternative, you can add a script to your package.json:

```json
"scripts": {
  "eslint": "eslint ."
}
```

Run the script:

```bash
npm run eslint --silent
```

## Development

http://eslint.org/docs/developer-guide/shareable-configs
