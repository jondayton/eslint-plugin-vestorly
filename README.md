# eslint-plugin-vestorly

ESLint rules for Vestorly

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-vestorly`:

```
$ npm install eslint-plugin-vestorly --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-vestorly` globally.

## Usage

Add `vestorly` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "vestorly"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "vestorly/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





