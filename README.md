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
npm install eslint eslint-plugin-jsdoc eslint-plugin-promise eslint-plugin-security git+ssh://git@github.com/Kink-Com/eslint-config-kink -D
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

### Protractor E2E

For end-to-end testing with Protactor, two steps are required:

```bash
npm install --save-dev eslint-plugin-protractor
```

Create `./test/e2e/.eslintrc.json`:

```javascript
{
  "extends": "kink/e2e"
}
```

## Use

Optimally, you should configure your editor to automatically lint all files.

See http://eslint.org/docs/user-guide/integrations to determine how to best configure your editor.

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
npm run -s eslint
```

## Upgrading

Occasionally, new dependencies will be added and it will be necessary to upgrade the local packages. 

Due to the use of `peerDependencies`, this unfortunately is not automatic and you'll get some jarring error messages, like:

```
warning "eslint-config-kink@1.0.14" has incorrect peer dependency "eslint-plugin-jsdoc@>= 3.1.0".
warning "eslint-config-kink@1.0.14" has unmet peer dependency "eslint-plugin-promise@>= 3.5.0".
```

To fix this, use `npm upgrade` on any missing / outdated package:

```
npm upgrade eslint-plugin-jsdoc
npm upgrade eslint-plugin-promise
```

## Maintaining these standards

http://eslint.org/docs/developer-guide/shareable-configs
