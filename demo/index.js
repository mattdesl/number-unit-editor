var opts = {
    min: 0,
    max: 100,
    value: 5,
    decimals: 0,
    unit: 'px', //default unit
    validUnits: ['px','%'] //we can limit units like so
}

var spinner = require('../')(opts)

var fs = require('fs')
var style = fs.readFileSync(__dirname+'/style.css', 'utf8')
require('insert-css')(style)

var classes = require('dom-classes')

require('domready')(function() {
	var container = document.createElement("div")
	document.body.appendChild(container)

    spinner.value = '25%'

	//add spinner
    classes.add(spinner.element, 'spinner')
    container.appendChild(spinner.element)
})