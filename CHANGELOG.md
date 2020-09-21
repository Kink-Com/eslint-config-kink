# CHANGELOG.md

## v2.4.0 - 2020.09.17

- Added [`mocha/no-async-describe`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-async-describe.md)
- Added [`mocha/no-global-tests`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-global-tests.md)
- Added [`mocha/no-identical-title`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-identical-title.md)
- Added [`mocha/no-nested-tests`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-nested-tests.md)
- Explicitly turned off [`mocha/no-setup-in-describe`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-setup-in-describe.md) (technically correct, but impractical given the size of our codebase)
- Turned off [`you-dont-need-lodash-underscore/omit`](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_omit) (impractical)
- Added [`eslint-plugin-compat`](https://github.com/amilajack/eslint-plugin-compat) to `web`
- Package updates

## v2.3.0 - 2020.04.30

- Updating `ecmaVersion` to `2018`
- Updating dependency `eslint-plugin-jsdoc` to latest
- Updating dependency `chalk` to latest

## v2.2.2 - 2020.02.13

- Prepared for public release.

## v2.2.1 - 2020.02.05

- Remove `parserOptions` config from vue.js

## v2.2.0 - 2020.01.30

- Added [`no-async-promise-executor`](https://eslint.org/docs/rules/no-async-promise-executor)
- Added [`no-misleading-character-class`](https://eslint.org/docs/rules/no-misleading-character-class)
- Added [`no-prototype-builtins`](https://eslint.org/docs/rules/no-prototype-builtins)
- Added [`no-shadow-restricted-names`](https://eslint.org/docs/rules/no-shadow-restricted-names)
- Added [`no-with`](https://eslint.org/docs/rules/no-with)
- Package updates

## v2.1.1 - 2019.11.07

- Package updates

## v2.1.0 - 2019.10.25

- Added [`keyword-spacing`](https://eslint.org/docs/rules/keyword-spacing)
- Added [`prefer-const`](https://eslint.org/docs/rules/prefer-const)
- Removed [`eslint-plugin-dependencies`](https://www.npmjs.com/package/eslint-plugin-dependencies) ([abandoned](https://github.com/zertosh/eslint-plugin-dependencies/issues/23))
- Package updates

## v2.0.1 - 2019.07.01

- Updated `ecmaVersion` to `2017`
- Upgraded `eslint-plugin-jsdoc`, `eslint-plugin-promise`, `eslint-plugin-unicorn`

## v2.0.0 - 2019.06.07

- **BREAKING CHANGE** - Removed Node 6 support
- Added `eslint-plugin-unicorn`
- Added [`unicorn/filename-case`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/filename-case.md)
- Whitelisted incompatible features in `web.js` (babel will handle)
- Upgraded `eslint`, `eslint-plugin-jsdoc`, `eslint-plugin-promise`, `eslint-plugin-you-dont-need-lodash-underscore`, `table`

## v1.10.0 - 2019.03.07

- Set `parserOptions` `sourceType` to `module` in `index` (default), `script` in `vue` and `web`
- Updated `no-multiple-empty-lines` rule to include `maxBOF` and `maxEOF` options
- Updated `comma-dangle` to require `always-multiline` for arrays and objects
- Updated `eslint` to `5.15.x`, `eslint-plugin-jsdoc` to `4.1.x`, `eslint-plugin-mocha` to `5.3.x`, `eslint-plugin-vue` to `5.2.x`

## v1.9.0 - 2019.01.18

- Updated `eslint-plugin-jsdoc` to v4, `eslint-plugin-node` to v8
- Added [`global-require`](https://eslint.org/docs/rules/global-require)
- Added [`keyword-spacing`](https://eslint.org/docs/rules/keyword-spacing)
- Added [`for-direction`](https://eslint.org/docs/rules/for-direction)
- Added [`getter-return`](https://eslint.org/docs/rules/getter-return)
- Added [`eslint-plugin-you-dont-need-lodash-underscore`](https://www.npmjs.com/package/eslint-plugin-you-dont-need-lodash-underscore) and `you-dont-need-lodash-underscore:all-warn` ruleset

## v1.8.1 - 2018.11.20

- Adds whitelist rule for es-syntax to vue.js

## v1.8.0 - 2018.09.27

- Updated `eslint` to v5, `eslint-plugin-node` to v7, `eslint-plugin-promise` to v4, and `eslint-plugin-vue` to v5, `table` to v5

## v1.7.3 - 2018.08.24

- Disabled `vue/html-indent` in `vue.js`

## v1.7.2 - 2018.07.20

- Removed nsp from CircleCI config and package.json

## v1.7.1 - 2018.07.12

- Added [`only-multiline`](https://eslint.org/docs/rules/comma-dangle#only-multiline) to `comma-dangle`

## v1.7.0 - 2018.05.03

- Added [`constructor-super`](https://eslint.org/docs/rules/constructor-super)
- Added [`no-case-declarations`](https://eslint.org/docs/rules/no-case-declarations)
- Added [`no-class-assign`](https://eslint.org/docs/rules/no-class-assign)
- Added [`no-cond-assign`](https://eslint.org/docs/rules/no-cond-assign)
- Added [`no-console`](https://eslint.org/docs/rules/no-console) as a warning
- Added [`no-constant-condition`](https://eslint.org/docs/rules/no-constant-condition)
- Added [`no-control-regex`](https://eslint.org/docs/rules/no-control-regex)
- Added [`no-debugger`](https://eslint.org/docs/rules/no-debugger) as a warning
- Added [`no-dupe-class-members`](https://eslint.org/docs/rules/no-dupe-class-members)
- Added [`no-func-assign`](https://eslint.org/docs/rules/no-func-assign)
- Added [`no-global-assign`](https://eslint.org/docs/rules/no-global-assign)
- Upgraded `eslint-plugin-mocha` to [5.x](https://github.com/lo1tuma/eslint-plugin-mocha/releases/tag/5.0.0)

## v1.6.0 - 2018.04.19

- Added [`no-unsafe-negation`](https://eslint.org/docs/rules/no-unsafe-negation)
- Added [`no-sparse-arrays`](https://eslint.org/docs/rules/no-sparse-arrays)
- Added [`no-regex-spaces`](https://eslint.org/docs/rules/no-regex-spaces)
- Added [`no-octal`](https://eslint.org/docs/rules/no-octal)
- Added [`no-obj-calls`](https://eslint.org/docs/rules/no-obj-calls)
- Added [`no-inner-declarations`](https://eslint.org/docs/rules/no-inner-declarations)
- Added [`mocha/no-pending-tests`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-pending-tests.md)

## v1.5.1 - 2018.04.13

- Disabled `node/no-unsupported-features` in `vue.js`

## v1.5.0 - 2018.04.11

- Added `vue.js` that uses [`eslint-plugin-vue`](https://github.com/vuejs/eslint-plugin-vue/)
- Added [`no-fallthrough`](https://eslint.org/docs/rules/no-fallthrough)
- Added [`no-irregular-whitespace`](https://eslint.org/docs/rules/no-irregular-whitespace)
- Added [`no-unexpected-multiline`](https://eslint.org/docs/rules/no-unexpected-multiline)
- Added [`no-redeclare`](https://eslint.org/docs/rules/no-redeclare)
- Added [`no-new-symbol`](https://eslint.org/docs/rules/no-new-symbol)
- Added [`no-extra-boolean-cast`](https://eslint.org/docs/rules/no-extra-boolean-cast)
- Added [`valid-typeof`](https://eslint.org/docs/rules/valid-typeof)
- Added [`use-isnan`](https://eslint.org/docs/rules/use-isnan)
- Added [`require-yield`](https://eslint.org/docs/rules/require-yield)
- Added [`no-unused-labels`](https://eslint.org/docs/rules/no-unused-labels)
- Added [`no-unsafe-finally`](https://eslint.org/docs/rules/no-unsafe-finally)
- Added [`no-this-before-super`](https://eslint.org/docs/rules/no-this-before-super)
- Added [`mocha/no-exclusive-tests`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-exclusive-tests.md)

## v1.4.2 - 2018.03.29

- Added [`no-empty`](https://eslint.org/docs/rules/no-empty)
- Added [`no-delete-var`](https://eslint.org/docs/rules/no-delete-var)
- Added [`no-empty-character-class`](https://eslint.org/docs/rules/no-empty-character-class)
- Added [`no-ex-assign`](https://eslint.org/docs/rules/no-ex-assign)
- Added [`no-invalid-regexp`](https://eslint.org/docs/rules/no-invalid-regexp)

## v1.4.1 - 2018.03.27

- Added [`object-curly-spacing`](https://eslint.org/docs/rules/object-curly-spacing)
- Added [`space-in-parens`](https://eslint.org/docs/rules/space-in-parens)
- Added [`template-curly-spacing`](https://eslint.org/docs/rules/template-curly-spacing)

## v1.4.0 - 2018.03.20

- Updated [`eslint-plugin-node`](https://github.com/mysticatea/eslint-plugin-node/releases/tag/v6.0.0)
- Added [`eslint-plugin-dependencies`](https://www.npmjs.com/package/eslint-plugin-dependencies)
- Added [`no-throw-literal`](https://eslint.org/docs/rules/no-throw-literal)
- Added [`no-restricted-syntax`](https://eslint.org/docs/rules/no-restricted-syntax) rules from Node.js core for requiring new for Error creation, `setTimeout` and `setInterval`
- Added [`promise/promise/no-new-statics`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-new-statics.md)
- Added `./unusedRules.js` report
- Removed `e2e.js` (no longer used)

## v1.3.2 - 2018.02.23

- Added http://eslint.org/docs/rules/id-blacklist to `web.js`


## v1.3.1 - 2017.12.15

- Added [`promise/catch-or-return`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/catch-or-return.md) to `web.js`

## v1.3.0 - 2017.11.2

- Updated
  - index.js
     - eslint-plugin-mocha
     - eslint-plugin-node
     - additional rules regarding promises

## v1.2.1 - 2017.09.19

  - Updated
    - package.json
      - version and dependencies

## v1.2.0 - 2017.09.19

  - Updated
    - index.js
      - 'promise/no-return-wrap': 'off',
    - package.json
      - version and dependencies

## v1.1.0 - 2017.08.31

  - Added
    - .eslintrc.json
    - .travis.yml

  - Updated
    - index.js
        - no-com-are-neg-zero
        - no-extra-semi
        - padding-line-between-statements
        - semi-spacing

    - package.json
       - version and dependencies

## v1.0.17 - 2017.08.10

  - Updated
    - package.json
    - web.js

## v1.0.16 - 2017.07.25

  - Updated
    - Readme.md
      - Removing reference to yarn

## v1.0.15

  - Updated
    - index.js
      - promise rules

    - package.json
      - version increase

## v1.0.14 - 2017.06.01

  - Updated
    - README.md
      - Yarn reference removed

    - index.js
      - promise rules added

    - package.json
      - version and dependencies

## v1.0.13 - 2017.05.13

  -Updated
    - index.js
      - no-empty-pattern
      - no-self-assign
      - no-useless-return
    - package.json
      - version increase

## v1.0.12 - 2017.05.04
  -Updated
    - package.json
      - version increase

## v1.0.11 - 2017.03.31

  -Updated
    - added variable name min length with exceptions (warning)
    - package.json
      - version increase

THERE BE DRAGONS HERE

## v1.0.1 - 2017.02.09

- Added https://www.npmjs.com/package/eslint-plugin-security
- Added http://eslint.org/docs/rules/no-const-assign.html

## v1.0.0 - 2017.01.16

- Initial version, manually ported from the internal wiki.
