# number-unit-editor

[![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

This extends [number-editor](https://nodei.co/npm/number-editor/) to allow for units like `px`, `%`, `in`, etc. This effectively makes it very similar to the CSS value editors in Chrome Dev Tools. 

```js
var opts = {
    min: 0,
    max: 100,
    value: 5,
    decimals: 0,
    unit: 'px', //default unit to show
}

require('domready')(function() {
	var spinner = require('number-editor')(opts)
    document.body.appendChild(spinner.element)
})
```

## Usage

[![NPM](https://nodei.co/npm/number-unit-editor.png)](https://nodei.co/npm/number-unit-editor/)

The API and constructor options are the same as [number-editor](https://nodei.co/npm/number-editor/). 

#### `editor = createEditor([options])`

In addition to the base `number-editor` options:

- `unit`: the default unit string to append
- `validUnits`: an array of units to accept, if undefined any unit is accepted

#### `editor.value`

A getter/setter for the number value. The returned value will be a number, but if you set this as a string it will parse it appropriately.

```js
//e.g. say the display currently shows "50px"
console.log(spinner.value) // prints 50
spinner.value = 25  // changes value to 25px
spinner.value = '25' // changes value to 25 (no unit)
```

#### `editor.display`

A getter/setter for the string display. When passing strings, you should include the unit. 

```console.log( spinner.display ) // prints "50px"```

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/number-unit-editor/blob/master/LICENSE.md) for details.
