# An opinionated `xo` config
![](https://postinstaller-badge.now.sh/@andreaspizsa/xo)
![](https://badgen.net/xo/status/@andreaspizsa/xo) ![](https://badgen.net/xo/indent/@andreaspizsa/xo) ![](https://badgen.net/xo/semi/@andreaspizsa/xo)

## Install

```sh
npm add -D @andreaspizsa/eslint-config-xo
```

Automatically adds the package to `xo.extends` using [postinstaller](https://github.com/postinstaller/postinstaller).

## Settings

```json
{
  "semicolon": false,
  "space": true,
  "func-names": "off",
  "no-negated-condition": "warn",
  "operator-linebreak": [
    "error",
    "before",
    {
      "overrides": {
        "x?": "ignore",
        "x:": "ignore"
      }
    }
  ]
}
```

#### Allows Named Functions

```js
function a() {
  return function namedFunction() { // standard xo would complain here
    return b
  }
}
```

#### Allows Negated Conditions

Negated conditions are fine if there’s a rather short block - often a one-liner - followed by a longer block. Getting the "short block" out of the way reduces cognitive load.

**Good**
```js
function a(b) {
  if(!b) {
    log('b is empty')
  } else {
    // do
    // something
    // more complicated
    // in a longer
    // block
  }
}
```

By default, xo favors this:

**Bad**

```js
function a(b) {
  if(b) {
    // do
    // something
    // more complicated
    // in a longer
    // block
  } else {
    log('b is empty')
  }
}
```

#### Operator Line Break

I prefer

**Good**

```js
  const result = isThisConditionActuallyTrue()
    ? doThisOperation()
    : elseThisOperation()
```

over

**Bad**
```js
  const result = isThisConditionActuallyTrue() ?
    doThisOperation() :
    elseThisOperation()
```
