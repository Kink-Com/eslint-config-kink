# eslint-config-kink

Kink.com [ESLint](http://eslint.org/) standards.

## Installation within a project

[Uninstall ESLint globally](https://github.com/eslint/eslint/issues/1877).

```bash
npm uninstall eslint -g
rm ~/.eslintrc
```

Add new `devDependencies` to your project:

```bash
npm i eslint eslint-plugin-jsdoc kink-com/eslint-config-kink -D
```

In the project root, add/replace any `.eslintrc.*` file with a single `.eslintrc.json` with the following contents:

```javascript
{
  "extends": "kink"
}
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

## Maintaining these standards

http://eslint.org/docs/developer-guide/shareable-configs
