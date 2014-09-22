var domval = require('dom-value')
var Base = require('number-editor')
var inherits = require('inherits')
var clamp = require('clamp')
var getUnit = require('parse-unit')

var tmp = [0, '']

function filter(valid, unit) {
	return valid && valid.indexOf(unit) === -1
}

function UnitEditor(opt) {
	if (!(this instanceof UnitEditor))
		return new UnitEditor(opt)
	opt = opt||{}

	this.validUnits = opt.validUnits || null
	this.unit = typeof opt.unit === 'string' ? opt.unit : ''

	if (filter(this.validUnits, this.unit))
		this.unit = ''

	Base.call(this, opt)
	
    this.element.removeAttribute("inputmode", "numeric")
    this.element.removeAttribute("pattern")
    this.element.setAttribute('type', 'text')
}

inherits(UnitEditor, Base)

UnitEditor.prototype._constrain = function(value) {
	if (typeof value === 'string') 
		value = this._parse(value)
    var newVal = clamp(Number(value), this.min, this.max)
    if (isNaN(newVal))
        newVal = this._value

    if (this.decimals === 0)
        newVal = Math.round(newVal)
    return newVal
}

UnitEditor.prototype._display = function(value) {
    return value.toFixed(this.decimals) + this.unit
}

UnitEditor.prototype._parse = function(str) {
	str = typeof str === 'string' ? str : String(domval(this.element))
	var unit = getUnit(str, tmp)

	//if we want to filter units
	if (filter(this.validUnits, unit[1]))
		unit[1] = ''
	
	this.unit = unit[1]
	return unit[0]
}

Object.defineProperty(UnitEditor.prototype, "display", {
	get: function() {
		return this._display(this._value)
	},
	set: function(value) {
		this.value = this._parse(value)
	}
})

module.exports = UnitEditor