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
npm install git+ssh://git@github.com/Kink-Com/eslint-config-kink -D
```

### Backend

In the project root, add/replace any `.eslintrc.*` file with a single `.eslintrc.json` with the following contents:

```javascript
{
  "extends": "kink"
}
```

### Frontend

For frontend projects, also add `./public/.eslintrc.json` with the following:

```javascript
{
  "extends": "kink/web"
}
```

## Use

Optimally, you should configure your editor to automatically lint all files.

See http://eslint.org/docs/user-guide/integrations to determine how to best configure your editor.

To execute ESLint directly:

```bash
./node_modules/.bin/eslint .
```

## Development

To see unused rules:

```bash
node ./debugRules.js
```

For more details about maintaining these standards, see http://eslint.org/docs/developer-guide/shareable-configs
