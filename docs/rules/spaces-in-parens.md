# Forked (spaces-in-parens)

This ESLint rule is a fork of the original `spaces-in-parens` by Jonathan Rajavuori. There is a slight modification in the source to allow for an additional exception which does not fit with the original ethos of this rule. However, due to the nature of my teams style preference we felt that modifying this rule suited our needs and we don't mind being a little loose with this in a fork.

Original ESLint rule documentation is [available here](http://eslint.org/docs/rules/space-in-parens.html).

This fork essentially allows for the below style to be valid where a negative assertion is given spacing to make it stand out when reading through the source.

```js
if ( ! condition) {
    // do something
}

```

We have renamed the rule here to **spaces-in-parens** to avoid any conflicts. Ideally you would not include the original rule.

---

# Disallow or enforce spaces inside of parentheses (spaces-in-parens)

Some style guides require or disallow spaces inside of parentheses:

```js
foo( 'bar' );
var x = ( 1 + 2 ) * 3;

foo('bar');
var x = (1 + 2) * 3;
```

## Rule Details

This rule will enforce consistency of spacing directly inside of parentheses, by disallowing or requiring one or more spaces to the right of `(` and to the left of `)`. In either case, `()` will still be allowed.

### Options

There are two options for this rule:

* `"always"` enforces a space inside of parentheses
* `"never"` enforces zero spaces inside of parentheses (default)

Depending on your coding conventions, you can choose either option by specifying it in your configuration:

```json
"spaces-in-parens": [2, "always"]
```

#### always

When `"always"` is set, the following patterns are considered problems:

```js
/*eslint spaces-in-parens: [2, "always"]*/

foo( 'bar'); /*error There must be a space inside this paren.*/
foo('bar' ); /*error There must be a space inside this paren.*/
foo('bar');  /*error There must be a space inside this paren.*/

var foo = (1 + 2) * 3;             /*error There must be a space inside this paren.*/
(function () { return 'bar'; }()); /*error There must be a space inside this paren.*/
```

The following patterns are not considered problems:

```js
/*eslint spaces-in-parens: [2, "always"]*/

foo();

foo( 'bar' );

var foo = ( 1 + 2 ) * 3;
( function () { return 'bar'; }() );
```

#### never

When `"never"` is used, the following patterns are considered problems:

```js
/*eslint spaces-in-parens: [2, "never"]*/

foo( 'bar');  /*error There should be no spaces inside this paren.*/
foo('bar' );  /*error There should be no spaces inside this paren.*/
foo( 'bar' ); /*error There should be no spaces inside this paren.*/

var foo = ( 1 + 2 ) * 3;             /*error There should be no spaces inside this paren.*/
( function () { return 'bar'; }() ); /*error There should be no spaces inside this paren.*/
```

The following patterns are not considered problems:

```js
/*eslint spaces-in-parens: [2, "never"]*/

foo();

foo('bar');

var foo = (1 + 2) * 3;
(function () { return 'bar'; }());
```

#### Exceptions

An object literal may be used as a third array item to specify exceptions, with the key `"exceptions"` and an array as the value. These exceptions work in the context of the first option. That is, if `"always"` is set to enforce spacing, then any "exception" will *disallow* spacing. Conversely, if `"never"` is set to disallow spacing, then any "exception" will *enforce* spacing.

The following exceptions are available: `["{}", "[]", "()", "!", "empty"`].

For example, given `"spaces-in-parens": [2, "always", { "exceptions": ["{}"] }]`, the following patterns are considered problems:

```js
/*eslint spaces-in-parens: [2, "always", { "exceptions": ["{}"] }]*/

foo( {bar: 'baz'} );    /*error There should be no spaces inside this paren.*/
foo( 1, {bar: 'baz'} ); /*error There should be no spaces inside this paren.*/
```

The following patterns are not considered problems:

```js
/*eslint spaces-in-parens: [2, "always", { "exceptions": ["{}"] }]*/

foo({bar: 'baz'});
foo( 1, {bar: 'baz'});
```

Or, given `"spaces-in-parens": [2, "never", { "exceptions": ["{}"] }]`, the following patterns are considered problems:

```js
/*eslint spaces-in-parens: [2, "never", { "exceptions": ["{}"] }]*/

foo({bar: 'baz'});    /*error There must be a space inside this paren.*/
foo(1, {bar: 'baz'}); /*error There must be a space inside this paren.*/
```

The following patterns are not considered problems:

```js
/*eslint spaces-in-parens: [2, "never", { "exceptions": ["{}"] }]*/

foo( {bar: 'baz'} );
foo(1, {bar: 'baz'} );
```

Given `"spaces-in-parens": [2, "always", { "exceptions": ["[]"] }]`, the following patterns are considered problems:

```js
/*eslint spaces-in-parens: [2, "always", { "exceptions": ["[]"] }]*/

foo( [bar, baz] );    /*error There should be no spaces inside this paren.*/
foo( [bar, baz], 1 ); /*error There should be no spaces inside this paren.*/
```

The following patterns are not considered problems:

```js
/*eslint spaces-in-parens: [2, "always", { "exceptions": ["[]"] }]*/

foo([bar, baz]);
foo([bar, baz], 1 );
```

Or, given `"spaces-in-parens": [2, "never", { "exceptions": ["[]"] }]`, the following patterns are considered problems:

```js
/*eslint spaces-in-parens: [2, "never", { "exceptions": ["[]"] }]*/

foo([bar, baz]);    /*error There must be a space inside this paren.*/
foo([bar, baz], 1); /*error There must be a space inside this paren.*/
```

The following patterns are not considered problems:

```js
/*eslint spaces-in-parens: [2, "never", { "exceptions": ["[]"] }]*/

foo( [bar, baz] );
foo( [bar, baz], 1);
```

Given `"spaces-in-parens": [2, "always", { "exceptions": ["()"] }]`, the following patterns are considered problems:

```js
/*eslint spaces-in-parens: [2, "always", { "exceptions": ["()"] }]*/

foo( ( 1 + 2 ) );    /*error There should be no spaces inside this paren.*/
foo( ( 1 + 2 ), 1 ); /*error There should be no spaces inside this paren.*/
```

The following patterns are not considered problems:

```js
/*eslint spaces-in-parens: [2, "always", { "exceptions": ["()"] }]*/

foo(( 1 + 2 ));
foo(( 1 + 2 ), 1 );
```

Or, given `"spaces-in-parens": [2, "never", { "exceptions": ["()"] }]`, the following patterns are considered problems:

```js
/*eslint spaces-in-parens: [2, "never", { "exceptions": ["()"] }]*/

foo((1 + 2));    /*error There must be a space inside this paren.*/
foo((1 + 2), 1); /*error There must be a space inside this paren.*/
```

The following patterns are not considered problems:

```js
/*eslint spaces-in-parens: [2, "never", { "exceptions": ["()"] }]*/

foo( (1 + 2) );
foo( (1 + 2), 1);
```

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

The `"empty"` exception concerns empty parentheses, and works the same way as the other exceptions, inverting the first option.

For example, given `"spaces-in-parens": [2, "always", { "exceptions": ["empty"] }]`, the following patterns are considered problems:

```js
/*eslint spaces-in-parens: [2, "always", { "exceptions": ["empty"] }]*/

foo( ); /*error There should be no spaces inside this paren.*/
```

The following patterns are not considered problems:

```js
/*eslint spaces-in-parens: [2, "always", { "exceptions": ["empty"] }]*/

foo();
```

Or, given `"spaces-in-parens": [2, "never", { "exceptions": ["empty"] }]`, the following patterns are considered problems:

```js
/*eslint spaces-in-parens: [2, "never", { "exceptions": ["empty"] }]*/

foo(); /*error There must be a space inside this paren.*/
```

The following patterns are not considered problems:

```js
/*eslint spaces-in-parens: [2, "never", { "exceptions": ["empty"] }]*/

foo( );
```

You can include multiple entries in the `"exceptions"` array. For example, given `"spaces-in-parens": [2, "always", { "exceptions": ["{}", "[]"] }]`, the following patterns are considered problems:

```js
/*eslint spaces-in-parens: [2, "always", { "exceptions": ["{}", "[]"] }]*/

bar( {bar:'baz'} );          /*error There should be no spaces inside this paren.*/
baz( 1, [1,2] );             /*error There should be no spaces inside this paren.*/
foo( {bar: 'baz'}, [1, 2] ); /*error There should be no spaces inside this paren.*/
```

The following patterns are not considered problems:

```js
/*eslint spaces-in-parens: [2, "always", { "exceptions": ["{}", "[]"] }]*/

bar({bar:'baz'});
baz( 1, [1,2]);
foo({bar: 'baz'}, [1, 2]);
```

## When Not To Use It

You can turn this rule off if you are not concerned with the consistency of spacing between parentheses.

## Related Rules

* [space-in-brackets](http://eslint.org/docs/rules/space-in-brackets) (deprecated)
