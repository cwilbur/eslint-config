# Eslint plugins in eslint-config-cwilbur

## @babel/eslint-parser

```json
{
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "requireConfigFile": true,
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "ecmaFeatures": {
      "globalReturn": falser,
    },
    "babelOptions": {
      "babelrc": false,
      "configFile": false,
      // your babel options
      "presets": ["@babel/preset-env"],
    }
  }
}
```

## @babel/eslint-plugin

```json
{
  "plugins": [ "@babel" ],
  "rules": {
    "@babel/new-cap": "error",
    "@babel/no-invalid-this": "error",
    "@babel/no-unused-expressions": "error",
    "@babel/object-curly-spacing": "error",
    "@babel/semi": "error"
  }
}
```

## @html-eslint/eslint-plugin

Contributes rules:

### General

| rule                              | description                                                |     |
| --------------------------------- | ---------------------------------------------------------- | --- |
| @html-eslint/require-doctype      | Require `<!DOCTYPE HTML>` in html,                         | RF  |
| @html-eslint/no-duplicate-id      | Disallow to use duplicate id                               | R   |
| @html-eslint/no-inline-styles     | Disallow using inline style                                |     |
| @html-eslint/require-li-container | Enforce `<li>` to be in `<ul>`, `<ol>` or `<menu>`.        | R   |
| @html-eslint/no-obsolete-tags     | Disallow to use obsolete elements in HTML5                 | R   |
| @html-eslint/require-closing-tags | Require closing tags.                                      | RF  |
| @html-eslint/require-meta-charset | Enforce to use `<meta charset="...">` in `<head>`          |     |
| @html-eslint/no-target-blank      | Disallow usage of unsafe `target="_blank"`                 |     |
| @html-eslint/no-duplicate-attrs   | Disallow to use duplicate attributes                       | R   |
| @html-eslint/require-button-type  | Require use of button element with a valid type attribute. |     |
| @html-eslint/no-restricted-attrs  | Disallow specified attributes                              |     |

### SEO

| rule                                  | description                                            |     |
| ------------------------------------- | ------------------------------------------------------ | --- |
| @html-eslint/require-lang             | Require lang attribute at `<html>` tag                 | R   |
| @html-eslint/require-title            | Require `<title><title/>` in the `<head><head/>`       | R   |
| @html-eslint/no-multiple-h1           | Disallow multiple `<h1></h1>`.                         | R   |
| @html-eslint/require-meta-description | Require use of `<meta name="description">` in `<head>` |     |

### Accessibility

| rule                                  | description                                                   |     |
| ------------------------------------- | ------------------------------------------------------------- | --- |
| @html-eslint/require-img-alt          | Require alt attribute at `<img>` tag                          | R   |
| @html-eslint/no-skip-heading-levels   | Disallow skipping heading levels                              |     |
| @html-eslint/require-frame-title      | Require title in `<frame>`, `<iframe>`                        |     |
| @html-eslint/no-non-scalable-viewport | Disallow use of user-scalable=no in `<meta name="viewport">`. |     |
| @html-eslint/no-positive-tabindex     | Disallow use of positive tabindex.                            |     |
| @html-eslint/require-meta-viewport    | Enforce to use `<meta name="viewport">` in `<head>`           |     |
| @html-eslint/no-abstract-roles        | Disallow to use of abstract roles                             |     |
| @html-eslint/no-aria-hidden-body      | Disallow to use aria-hidden attributes on the body element.   |     |
| @html-eslint/no-accesskey-attrs       | Disallow to use of accesskey attribute                        |     |

### Styles

| rule                                  | description                                                       |     |
| ------------------------------------- | ----------------------------------------------------------------- | --- |
| @html-eslint/no-extra-spacing-attrs   | Disallow an extra spacing around attributes                       | RF  |
| @html-eslint/element-newline          | Enforce newline between elements.                                 | RF  |
| @html-eslint/indent                   | Enforce consistent indentation                                    | RF  |
| @html-eslint/quotes                   | Enforce consistent quoting attributes with double(") or single(') | RF  |
| @html-eslint/id-naming-convention     | Enforce consistent naming id attributes                           |     |
| @html-eslint/no-multiple-empty-lines  | Disallow multiple empty lines                                     |     |

## @html-eslint/parser

```json
{
  "plugins": ["@html-eslint"],
  "overrides": [
    {
      "files": [ "*.html" ],
      "parser": "@html-eslint/parser",
      "extends": [ "plugin:@html-eslint/recommended" ]
    }
  ]
}
```

## eslint-plugin-eslint-comments

### Best Practices

| rule                  | description                                                           |     |
| --------------------- | --------------------------------------------------------------------- | --- |
| disable-enable-pair   | require a eslint-enable comment for every eslint-disable comment      | R   |
| no-aggregating-enable | disallow a eslint-enable comment for multiple eslint-disable comments | R   |
| no-duplicate-disable  | disallow duplicate eslint-disable comments                            | R   |
| no-unlimited-disable  | disallow eslint-disable comments without rule names                   | R   |
| no-unused-disable     | disallow unused eslint-disable comments                               |     |
| no-unused-enable      | disallow unused eslint-enable comments                                | R   |

### Stylistic Issues

| rule                  | description                                               |     |
| --------------------- | --------------------------------------------------------- | --- |
| no-restricted-disable | disallow eslint-disable comments about specific rules     |     |
| no-use                | disallow ESLint directive-comments                        |     |
| require-description   | require include descriptions in ESLint directive-comments |     |

## eslint-plugin-html

Validates inline scripts in HTML.  Configuration, and issues like
dedenting.

## eslint-plugin-import-newlines

| rule    | description                                                                     |     |
| ------- | ------------------------------------------------------------------------------- | --- |
| enforce | enforces a maximum line length, a maximum number of imports in a line, or both. |     |

## eslint-plugin-import

### Static analysis

| rule                       | description                                                                          |
| -------------------------- | ------------------------------------------------------------------------------------ |
| no-unresolved              | Ensure imports point to a file/module that can be resolved.                          |
| named                      | Ensure named imports correspond to a named export in the remote file.                |
| default                    | Ensure a default export is present, given a default import.                          |
| namespace                  | Ensure imported namespaces contain dereferenced properties as they are dereferenced. |
| no-restricted-paths        | Restrict which files can be imported in a given folder                               |
| no-absolute-path           | Forbid import of modules using absolute paths                                        |
| no-dynamic-require         | Forbid require() calls with expressions                                              |
| no-internal-modules        | Prevent importing the submodules of other modules                                    |
| no-webpack-loader-syntax   | Forbid webpack loader syntax in imports                                              |
| no-self-import             | Forbid a module from importing itself                                                |
| no-cycle                   | Forbid a module from importing a module with a dependency path back to itself        |
| no-useless-path-segments   | Prevent unnecessary path segments in import and require statements                   |
| no-relative-parent-imports | Forbid importing modules from parent directories                                     |
| no-relative-packages       | Prevent importing packages through relative paths                                    |

### Helpful warnings

| rule                       | description                                                                          |
| -------------------------- | ------------------------------------------------------------------------------------ |
| export                     | Report any invalid exports, i.e. re-export of the same name                          |
| no-named-as-default        | Report use of exported name as identifier of default export                          |
| no-named-as-default-member | Report use of exported name as property of default export                            |
| no-deprecated              | Report imported names marked with @deprecated documentation tag                      |
| no-extraneous-dependencies | Forbid the use of extraneous packages                                                |
| no-mutable-exports         | Forbid the use of mutable exports with var or let.                                   |
| no-unused-modules          | Report modules without exports, or exports without matching import in another module |

### Module systems

| rule                     | description                                                    |               |
| ------------------------ | -------------------------------------------------------------- | ------------- |
| unambiguous              | Report potentially ambiguous parse goal (script vs. module)    | (unambiguous) |
| no-commonjs              | Report CommonJS require calls and module.exports or exports.*. |               |
| no-amd                   | Report AMD require and define calls.                           |               |
| no-nodejs-modules        | No Node.js builtin modules.                                    |               |
| no-import-module-exports | Forbid imports with CommonJS exports                           |               |

### Style guide

| rule                        | description                                                                |                        |
| --------------------------- | -------------------------------------------------------------------------- | ---------------------- |
| first                       | Ensure all imports appear before other statements                          |                        |
| exports-last                | Ensure all exports appear after other statements                           |                        |
| no-duplicates               | Report repeated import of the same module in multiple places               |                        |
| no-namespace                | Forbid namespace (a.k.a. "wildcard" *)                                     |                        |
| extensions                  | Ensure consistent use of file extension within the import path             |                        |
| order                       | Enforce a convention in module import order                                |                        |
| newline-after-import        | Enforce a newline after import statements                                  |                        |
| prefer-default-export       | Prefer a default export if module exports a single name                    |                        |
| max-dependencies            | Limit the maximum number of dependencies a module can have                 |                        |
| no-unassigned-import        | Forbid unassigned imports                                                  |                        |
| no-named-default            | Forbid named default exports                                               |                        |
| no-default-export           | Forbid default exports                                                     |                        |
| no-named-export             | Forbid named exports                                                       |                        |
| no-anonymous-default-export | Forbid anonymous values as default exports                                 |                        |
| group-exports               | Prefer named exports to be grouped together in a single export declaration |                        |
| dynamic-import-chunkname    | Enforce a leading comment with the webpackChunkName for dynamic imports    |                        |

## eslint-plugin-jasmine

| rule                          | recommended configuration                                |
| ----------------------------- | -------------------------------------------------------- |
| expect-matcher                | 1,                                                       |
| expect-single-argument        | 1,                                                       |
| missing-expect                | 0, 'expect()', 'expectAsync()'expectation function names |
| named-spy                     | 0                                                        |
| new-line-before-expect        | 1                                                        |
| new-line-between-declarations | 1                                                        |
| no-assign-spyon               | 0                                                        |
| no-describe-variables         | 0                                                        |
| no-disabled-tests             | 1                                                        |
| no-expect-in-setup-teardown   | 1, 'expect()', 'expectAsync()'expectation function names |
| no-focused-tests              | 2                                                        |
| no-global-setup               | 2                                                        |
| no-pending-tests              | 1                                                        |
| no-promise-without-done-fail  | 1                                                        |
| no-spec-dupes                 | 1, 'block'['block', 'branch']                            |
| no-suite-callback-args        | 2                                                        |
| no-suite-dupes                | 1, 'block'['block', 'branch']                            |
| no-unsafe-spy                 | 1                                                        |
| valid-expect                  | deprecated                                               |
| prefer-jasmine-matcher        | 1                                                        |
| prefer-promise-strategies     | 1                                                        |
| prefer-toHaveBeenCalledWith   | 1                                                        |
| prefer-toBeUndefined          | 0['always', 'never']                                     |

## eslint-plugin-json

| rule                           | description                               |
| ------------------------------ | ----------------------------------------- |
| undefined                      |                                           |
| enum-value-mismatch            |                                           |
| unexpected-end-of-comment      |                                           |
| unexpected-end-of-string       |                                           |
| unexpected-end-of-number       |                                           |
| invalid-unicode                |                                           |
| invalid-escape-character       |                                           |
| invalid-character              |                                           |
| property-expected              |                                           |
| comma-expected                 |                                           |
| colon-expected                 |                                           |
| value-expected                 |                                           |
| comma-or-close-backet-expected |                                           |
| comma-or-close-brace-expected  |                                           |
| trailing-comma                 |                                           |
| duplicate-key                  |                                           |
| comment-not-permitted          |                                           |
| schema-resolve-error           |                                           |
| unknown                        | (error that does not match previous ones) |

## eslint-plugin-lit-a11y

| rule                               | description |
| ---------------------------------- | ----------- |
| accessible-emoji                   |             |
| alt-text                           |             |
| anchor-has-content                 |             |
| anchor-is-valid                    |             |
| aria-activedescendant-has-tabindex |             |
| aria-attr-valid-value              |             |
| aria-attrs                         |             |
| aria-role                          |             |
| aria-unsupported-elements          |             |
| autocomplete-valid                 |             |
| click-events-have-key-events       |             |
| heading-has-content                |             |
| iframe-title                       |             |
| img-redundant-alt                  |             |
| mouse-events-have-key-events       |             |
| no-access-key                      |             |
| no-autofocus                       |             |
| no-distracting-elements            |             |
| no-invalid-change-handler          |             |
| no-redundant-role                  |             |
| role-has-required-aria-attrs       |             |
| role-supports-aria-attr            |             |
| scope                              |             |
| tabindex-no-positive               |             |
| valid-lang                         |             |

## eslint-plugin-lit

| rule                           | description |
| ------------------------------ | ----------- |
| attribute-value-entities       |             |
| binding-positions              |             |
| no-duplicate-template-bindings |             |
| no-invalid-escape-sequences    |             |
| no-invalid-html                |             |
| no-legacy-imports              |             |
| no-legacy-template-syntax      |             |
| no-private-properties          |             |
| no-property-change-update      |             |
| no-template-arrow              |             |
| no-template-bind               |             |
| no-template-map                |             |
| no-useless-template-literals   |             |
| no-value-attribute             |             |
| quoted-expressions             |             |

## eslint-plugin-mocha

| rule                     | description                                                              |     |
| ------------------------ | ------------------------------------------------------------------------ | --- |
| handle-done-callback     | enforces handling of callbacks for async tests                           | R   |
| max-top-level-suites     | limit the number of top-level suites in a single file                    | R   |
| no-async-describe        | disallow async functions passed to describe                              | RF  |
| no-exclusive-tests       | disallow exclusive mocha tests                                           | R   |
| no-exports               | disallow exports from test files                                         | R   |
| no-global-tests          | disallow global tests                                                    | R   |
| no-hooks                 | disallow hooks                                                           |     |
| no-hooks-for-single-case | disallow hooks for a single test or test suite                           |     |
| no-identical-title       | disallow identical titles                                                | R   |
| no-mocha-arrows          | disallow arrow functions as arguments to mocha globals                   | RF  |
| no-nested-tests          | disallow tests to be nested within other tests                           | R   |
| no-pending-tests         | disallow pending/unimplemented mocha tests                               | R   |
| no-return-and-callback   | disallow returning in a test or hook function that uses a callback       | R   |
| no-return-from-async     | disallow returning from an async test or hook                            |     |
| no-setup-in-describe     | disallow calling functions and dot operators directly in describe blocks | R   |
| no-sibling-hooks         | disallow duplicate uses of a hook at the same level inside a describe    | R   |
| no-skipped-tests         | disallow skipped mocha tests                                             | R   |
| no-synchronous-tests     | disallow synchronous tests                                               |     |
| no-top-level-hooks       | disallow top-level hooks                                                 | R   |
| prefer-arrow-callback    | prefer arrow function callbacks (mocha-aware)                            | F   |
| valid-suite-description  | match suite descriptions against a pre-configured regular expression     |     |
| valid-test-description   | match test descriptions against a pre-configured regular expression      |     |
| no-empty-description     | Disallow empty test descriptions                                         | R   |

## eslint-plugin-no-only-tests

| rule          | description                                      |     |
| ------------- | ------------------------------------------------ | --- |
| no-only-tests | disallows focused tests (it.only, describe.only) |     |

## eslint-plugin-node

Possible Errors

| rule                                  | description                                                         |     |
| ------------------------------------- | ------------------------------------------------------------------- | --- |
| no-callback-literal                   | ensure Node.js-style error-first callback pattern is followed       |     |
| no-exports-assign                     | disallow the assignment to exports                                  | R   |
| no-extraneous-import                  | disallow import declarations which import extraneous modules        | R   |
| no-extraneous-require                 | disallow require() expressions which import extraneous modules      | R   |
| no-missing-import                     | disallow import declarations which import non-existence modules     | R   |
| no-missing-require                    | disallow require() expressions which import non-existence modules   | R   |
| no-unpublished-bin                    | disallow bin files that npm ignores                                 | R   |
| no-unpublished-import                 | disallow import declarations which import private modules           | R   |
| no-unpublished-require                | disallow require() expressions which import private modules         | R   |
| no-unsupported-features/es-builtins   | disallow unsupported ECMAScript built-ins on the specified version  | R   |
| no-unsupported-features/es-syntax     | disallow unsupported ECMAScript syntax on the specified version     | R   |
| no-unsupported-features/node-builtins | disallow unsupported Node.js built-in APIs on the specified version | R   |
| process-exit-as-throw                 | make process.exit() expressions the same code path as throw         | R   |
| shebang                               | suggest correct usage of shebang                                    | RF  |

Best Practices

| rule              | description              |     |
| ----------------- | ------------------------ | --- |
| no-deprecated-api | disallow deprecated APIs | R   |

Stylistic Issues

| rule                            | description                                                      |     |
| ------------------------------- | ---------------------------------------------------------------- | --- |
| exports-style                   | enforce either module.exports or exports                         |     |
| file-extension-in-import        | enforce the style of file extensions in import declarations      | F   |
| prefer-global/buffer            | enforce either Buffer or require("buffer").Buffer                |     |
| prefer-global/console           | enforce either console or require("console")                     |     |
| prefer-global/process           | enforce either process or require("process")                     |     |
| prefer-global/text-decoder      | enforce either TextDecoder or require("util").TextDecoder        |     |
| prefer-global/text-encoder      | enforce either TextEncoder or require("util").TextEncoder        |     |
| prefer-global/url-search-params | enforce either URLSearchParams or require("url").URLSearchParams |     |
| prefer-global/url               | enforce either URL or require("url").URL                         |     |
| prefer-promises/dns             | enforce require("dns").promises                                  |     |
| prefer-promises/fs              | enforce require("fs").promises                                   |     |

## eslint-plugin-promise

Rules

| rule                      | description                                                                    |     |
| ------------------------- | ------------------------------------------------------------------------------ | --- |
| catch-or-return           | Enforces the use of catch() on un-returned promises.                           | R   |
| no-return-wrap            | Avoid wrapping values in Promise.resolve or Promise.reject when not needed.    | R   |
| param-names               | Enforce consistent param names and ordering when creating new promises.        | R   |
| always-return             | Return inside each then() to create readable and reusable Promise chains.      | R   |
| no-native                 | In an ES5 environment, make sure to create a Promise constructor before using. |     |
| no-nesting                | Avoid nested then() or catch() statements                                      | R   |
| no-promise-in-callback    | Avoid using promises inside of callbacks                                       | R   |
| no-callback-in-promise    | Avoid calling cb() inside of a then() (use nodeify instead)                    | R   |
| avoid-new                 | Avoid creating new promises outside of utility libs (use pify instead)         |     |
| no-new-statics            | Avoid calling new on a Promise static method                                   | RF  |
| no-return-in-finally      | Disallow return statements in finally()                                        | R   |
| valid-params              | Ensures the proper number of arguments are passed to Promise functions         | R   |
| prefer-await-to-then      | Prefer await to then()/catch()/finally() for reading Promise values            | R   |
| prefer-await-to-callbacks | Prefer async/await to the callback pattern                                     | R   |

## eslint-plugin-wc

### Potential Errors

| rule                      | description |     |
| ------------------------- | ----------- | --- |
| no-constructor-attributes |             |     |
| no-invalid-element-name   |             |     |
| no-self-class             |             |     |

### Best Practice

| rule                      | description |     |
| ------------------------- | ----------- | --- |
| attach-shadow-construtor  |             |     |
| guard-super-call          |             |     |
| no-closed-shadow-root     |             |     |
| no-constructo-params      |             |     |
| no-typos                  |             |     |
| require-listener-teardown |             |     |

## eslint-plugin-unicorn

| Name                                    | Description                                                                                                                                                                                   |       | Details |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ------- |
| better-regex                            | Improve regexes by making them shorter, consistent, and safer.                                                                                                                                | R F   |         |
| catch-error-name                        | Enforce a specific parameter name in catch clauses.                                                                                                                                           | R F   |         |
| consistent-destructuring                | Use destructured variables over properties.                                                                                                                                                   | R F M |         |
| consistent-function-scoping             | Move function definitions to the highest possible scope.                                                                                                                                      | R     |         |
| custom-error-definition                 | Enforce correct Error subclassing.                                                                                                                                                            | F     |         |
| empty-brace-spaces                      | Enforce no spaces between braces.                                                                                                                                                             | R F   |         |
| error-message                           | Enforce passing a message value when creating a built-in error.                                                                                                                               | R     |         |
| escape-case                             | Require escape sequences to use uppercase values.                                                                                                                                             | R F   |         |
| expiring-todo-comments                  | Add expiration conditions to TODO comments.                                                                                                                                                   | R     |         |
| explicit-length-check                   | Enforce explicitly comparing the length or size property of a value.                                                                                                                          | R F M |         |
| filename-case                           | Enforce a case style for filenames.                                                                                                                                                           | R     |         |
| import-style                            | Enforce specific import styles per module.                                                                                                                                                    | R     |         |
| new-for-builtins                        | Enforce the use of new for all builtins, except String, Number, Boolean, Symbol and BigInt.                                                                                                   | R F   |         |
| no-abusive-eslint-disable               | Enforce specifying rules to disable in eslint-disable comments.                                                                                                                               | R     |         |
| no-array-callback-reference             | Prevent passing a function reference directly to iterator methods.                                                                                                                            | R  M  |         |
| no-array-for-each                       | Prefer for…of over the forEach method.                                                                                                                                                        | R F M |         |
| no-array-method-this-argument           | Disallow using the this argument in array methods.                                                                                                                                            | R F M |         |
| no-array-push-push                      | Enforce combining multiple Array#push() into one call.                                                                                                                                        | R F M |         |
| no-array-reduce                         | Disallow Array#reduce() and Array#reduceRight().                                                                                                                                              | R     |         |
| no-await-expression-member              | Disallow member access from await expression.                                                                                                                                                 | R F   |         |
| no-console-spaces                       | Do not use leading/trailing space between console.log parameters.                                                                                                                             | R F   |         |
| no-document-cookie                      | Do not use document.cookie directly.                                                                                                                                                          | R     |         |
| no-empty-file                           | Disallow empty files.                                                                                                                                                                         | R     |         |
| no-for-loop                             | Do not use a for loop that can be replaced with a for-of loop.                                                                                                                                | R F   |         |
| no-hex-escape                           | Enforce the use of Unicode escapes instead of hexadecimal escapes.                                                                                                                            | R F   |         |
| no-instanceof-array                     | Require Array.isArray() instead of instanceof Array.                                                                                                                                          | R F   |         |
| no-invalid-remove-event-listener        | Prevent calling EventTarget#removeEventListener() with the result of an expression.                                                                                                           | R     |         |
| no-keyword-prefix                       | Disallow identifiers starting with new or class.                                                                                                                                              |       |         |
| no-lonely-if                            | Disallow if statements as the only statement in if blocks without else.                                                                                                                       | R F   |         |
| no-nested-ternary                       | Disallow nested ternary expressions.                                                                                                                                                          | R F   |         |
| no-new-array                            | Disallow new Array().                                                                                                                                                                         | R F M |         |
| no-new-buffer                           | Enforce the use of Buffer.from() and Buffer.alloc() instead of the deprecated new Buffer().                                                                                                   | R F M |         |
| no-null                                 | Disallow the use of the null literal.                                                                                                                                                         | R F M |         |
| no-object-as-default-parameter          | Disallow the use of objects as default parameters.                                                                                                                                            | R     |         |
| no-process-exit                         | Disallow process.exit().                                                                                                                                                                      | R     |         |
| no-static-only-class                    | Disallow classes that only have static members.                                                                                                                                               | R F   |         |
| no-thenable                             | Disallow then property.                                                                                                                                                                       | R     |         |
| no-this-assignment                      | Disallow assigning this to a variable.                                                                                                                                                        | R     |         |
| no-unreadable-array-destructuring       | Disallow unreadable array destructuring.                                                                                                                                                      | R F   |         |
| no-unreadable-iife                      | Disallow unreadable IIFEs.                                                                                                                                                                    | R     |         |
| no-unsafe-regex                         | Disallow unsafe regular expressions.                                                                                                                                                          |       |         |
| no-unused-properties                    | Disallow unused object properties.                                                                                                                                                            |       |         |
| no-useless-fallback-in-spread           | Disallow useless fallback when spreading in object literals.                                                                                                                                  | R F   |         |
| no-useless-length-check                 | Disallow useless array length check.                                                                                                                                                          | R F   |         |
| no-useless-promise-resolve-reject       | Disallow returning/yielding Promise.resolve/reject() in async functions or promise callbacks                                                                                                  | R F   |         |
| no-useless-spread                       | Disallow unnecessary spread.                                                                                                                                                                  | R F   |         |
| no-useless-switch-case                  | Disallow useless case in switch statements.                                                                                                                                                   | R  M  |         |
| no-useless-undefined                    | Disallow useless undefined.                                                                                                                                                                   | R F   |         |
| no-zero-fractions                       | Disallow number literals with zero fractions or dangling dots.                                                                                                                                | R F   |         |
| number-literal-case                     | Enforce proper case for numeric literals.                                                                                                                                                     | R F   |         |
| numeric-separators-style                | Enforce the style of numeric separators by correctly grouping digits.                                                                                                                         | R F   |         |
| prefer-add-event-listener               | Prefer .addEventListener() and .removeEventListener() over on-functions.                                                                                                                      | R F   |         |
| prefer-array-find                       | Prefer .find(…) over the first element from .filter(…).                                                                                                                                       | R F M |         |
| prefer-array-flat                       | Prefer Array#flat() over legacy techniques to flatten arrays.                                                                                                                                 | R F   |         |
| prefer-array-flat-map                   | Prefer .flatMap(…) over .map(…).flat().                                                                                                                                                       | R F   |         |
| prefer-array-index-of                   | Prefer Array#indexOf() over Array#findIndex() when looking for the index of an item.                                                                                                          | R F M |         |
| prefer-array-some                       | Prefer .some(…) over .filter(…).length check and .find(…).                                                                                                                                    | R F M |         |
| prefer-at                               | Prefer .at() method for index access and String#charAt().                                                                                                                                     | F M   |         |
| prefer-code-point                       | Prefer String#codePointAt(…) over String#charCodeAt(…) and String.fromCodePoint(…) over String.fromCharCode(…).                                                                               | R  M  |         |
| prefer-date-now                         | Prefer Date.now() to get the number of milliseconds since the Unix Epoch.                                                                                                                     | R F   |         |
| prefer-default-parameters               | Prefer default parameters over reassignment.                                                                                                                                                  | R F M |         |
| prefer-dom-node-append                  | Prefer Node#append() over Node#appendChild().                                                                                                                                                 | R F   |         |
| prefer-dom-node-dataset                 | Prefer using .dataset on DOM elements over calling attribute methods.                                                                                                                         | R F   |         |
| prefer-dom-node-remove                  | Prefer childNode.remove() over parentNode.removeChild(childNode).                                                                                                                             | R F M |         |
| prefer-dom-node-text-content            | Prefer .textContent over .innerText.                                                                                                                                                          | R  M  |         |
| prefer-event-target                     | Prefer EventTarget over EventEmitter.                                                                                                                                                         |       |         |
| prefer-export-from                      | Prefer export…from when re-exporting.                                                                                                                                                         | R F M |         |
| prefer-includes                         | Prefer .includes() over .indexOf() and Array#some() when checking for existence or non-existence.                                                                                             | R F M |         |
| prefer-json-parse-buffer                | Prefer reading a JSON file as a buffer.                                                                                                                                                       | F     |         |
| prefer-keyboard-event-key               | Prefer KeyboardEvent#key over KeyboardEvent#keyCode.                                                                                                                                          | R F   |         |
| prefer-logical-operator-over-ternary    | Prefer using a logical operator over a ternary.                                                                                                                                               | R  M  |         |
| prefer-math-trunc                       | Enforce the use of Math.trunc instead of bitwise operators.                                                                                                                                   | R F M |         |
| prefer-modern-dom-apis                  | Prefer .before() over .insertBefore(), .replaceWith() over .replaceChild(), prefer one of .before(), .after(), .append() or .prepend() over insertAdjacentText() and insertAdjacentElement(). | R F   |         |
| prefer-modern-math-apis                 | Prefer modern Math APIs over legacy patterns.                                                                                                                                                 | R F   |         |
| prefer-module                           | Prefer JavaScript modules (ESM) over CommonJS.                                                                                                                                                | R F M |         |
| prefer-native-coercion-functions        | Prefer using String, Number, BigInt, Boolean, and Symbol directly.                                                                                                                            | R F   |         |
| prefer-negative-index                   | Prefer negative index over .length - index for {String,Array,TypedArray}#slice(), Array#splice() and Array#at().                                                                              | R F   |         |
| prefer-node-protocol                    | Prefer using the node: protocol when importing Node.js builtin modules.                                                                                                                       | R F   |         |
| prefer-number-properties                | Prefer Number static properties over global ones.                                                                                                                                             | R F M |         |
| prefer-object-from-entries              | Prefer using Object.fromEntries(…) to transform a list of key-value pairs into an object.                                                                                                     | R F   |         |
| prefer-optional-catch-binding           | Prefer omitting the catch binding parameter.                                                                                                                                                  | R F   |         |
| prefer-prototype-methods                | Prefer borrowing methods from the prototype instead of the instance.                                                                                                                          | R F   |         |
| prefer-query-selector                   | Prefer .querySelector() over .getElementById(), .querySelectorAll() over .getElementsByClassName() and .getElementsByTagName().                                                               | R F   |         |
| prefer-reflect-apply                    | Prefer Reflect.apply() over Function#apply().                                                                                                                                                 | R F   |         |
| prefer-regexp-test                      | Prefer RegExp#test() over String#match() and RegExp#exec().                                                                                                                                   | R F   |         |
| prefer-set-has                          | Prefer Set#has() over Array#includes() when checking for existence or non-existence.                                                                                                          | R F M |         |
| prefer-spread                           | Prefer the spread operator over Array.from(…), Array#concat(…), Array#slice() and String#split('').                                                                                           | R F M |         |
| prefer-string-replace-all               | Prefer String#replaceAll() over regex searches with the global flag.                                                                                                                          | F     |         |
| prefer-string-slice                     | Prefer String#slice() over String#substr() and String#substring().                                                                                                                            | R F   |         |
| prefer-string-starts-ends-with          | Prefer String#startsWith() & String#endsWith() over RegExp#test().                                                                                                                            | R F M |         |
| prefer-string-trim-start-end            | Prefer String#trimStart() / String#trimEnd() over String#trimLeft() / String#trimRight().                                                                                                     | R F   |         |
| prefer-switch                           | Prefer switch over multiple else-if.                                                                                                                                                          | R F   |         |
| prefer-ternary                          | Prefer ternary expressions over simple if-else statements.                                                                                                                                    | R F   |         |
| prefer-top-level-await                  | Prefer top-level await over top-level promises and async function calls.                                                                                                                      | R  M  |         |
| prefer-type-error                       | Enforce throwing TypeError in type checking conditions.                                                                                                                                       | R F   |         |
| prevent-abbreviations                   | Prevent abbreviations.                                                                                                                                                                        | R F   |         |
| relative-url-style                      | Enforce consistent relative URL style.                                                                                                                                                        | R F M |         |
| require-array-join-separator            | Enforce using the separator argument with Array#join().                                                                                                                                       | R F   |         |
| require-number-to-fixed-digits-argument | Enforce using the digits argument with Number#toFixed().                                                                                                                                      | R F   |         |
| require-post-message-target-origin      | Enforce using the targetOrigin argument with window.postMessage().                                                                                                                            | M     |         |
| string-content                          | Enforce better string content.                                                                                                                                                                | F M   |         |
| template-indent                         | Fix whitespace-insensitive template indentation.                                                                                                                                              | R F   |         |
| text-encoding-identifier-case           | Enforce consistent case for text encoding identifiers.                                                                                                                                        | R F M |         |
| throw-new-error                         | Require new when throwing an error.                                                                                                                                                           | R F   |         |

## Add to package.json

```json
{ 
  "peerDependencies": {  
    "eslint-plugin-jasmine": "^4.1.3",
    "eslint-plugin-mocha": "^10.1.0",
    "eslint-plugin-n": "^15.2.4",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^6.0.0",
  }
}
```
