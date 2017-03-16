# Method or property does not have correct documentation (method-property-documentation)

Methods and properties should be documented with YUIdoc-compliant comments.


## Rule Details

Examples of **incorrect** code for this rule:

```js

Component.extend({
  one: 'two'
});

```

Examples of **correct** code for this rule:

```js

Component.extend({
  /**
   @property one
   */
  one: 'two'
});

```

## When Not To Use It

Can be disabled for test files.

## Further Reading

[YUIDoc Syntax](http://yui.github.io/yuidoc/syntax/)
