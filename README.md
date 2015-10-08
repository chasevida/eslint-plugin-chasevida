# eslint-plugin-chasevida

[![Build Status](https://img.shields.io/travis/chasevida/eslint-plugin-chasevida/master.svg?style=flat-square)](https://travis-ci.org/chasevida/eslint-plugin-chasevida)

A variation/fork of the ESLint `space-in-parens` rule by Jonathan Rajavuori that adds additional exceptions.

This fork essentially allows for the below style to be valid where a negative assertion is given spacing to make it stand out when reading through the source.

```js
if ( ! condition) {
    // do something
}

```

We have renamed the rule here to **spaces-in-parens** to avoid any conflicts. Ideally you would not include the original rule. The original ESLint rule documentation is [available here](http://eslint.org/docs/rules/space-in-parens.html).

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-spaces-in-parens`:

```
$ npm install eslint-plugin-chasevida --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-chasevida` globally.

## Usage

Add `spaces-in-parens` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "chasevida"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "chasevida/spaces-in-parens":   [2, "never", { "exceptions": ["!"] }]
    }
}
```

## Supported Rules

This rule extends the core functionality of [space-in-parens](http://eslint.org/docs/rules/space-in-parens.html) and should be referred to for core functionality and implementation.

The additional exceptions this plugins supports are outlined below:

Given `"spaces-in-parens": [2, "never", { "exceptions": ["!"] }]`, the following patterns are considered problems:

```js
/*eslint spaces-in-parens: [2, "never", { "exceptions": ["!"] }]*/

if (!condition);    /*error There must be a leading space inside this paren.*/
if ( ! condition ); /*error There must be only a leading space inside this paren.*/
```

The following patterns are not considered problems:

```js
/*eslint spaces-in-parens: [2, "never", { "exceptions": ["!"] }]*/

if ( ! condition);
if ( !condition);
```
