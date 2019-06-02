function Calculator() {
    Calculator.prototype = Object.create(Object.prototype);
    Calculator.prototype.constructor = Calculator;
    Calculator.prototype.toNumber = function(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    };
    this.res = 0;
    this.add = function(x) {
        if (this.toNumber(x)) {
            this.res += x;
        }
        return this;
    };
    this.subtract = function(x) {
        if (this.toNumber(x)) {
            this.res -= x;
        }
        return this;
    };
    this.multiply = function(x) {
        if (this.toNumber(x)) {
            this.res *= x;
        }
        return this;
    };
    this.divide = function(x) {
        if (this.toNumber(x)) {
            this.res /= x;
        }
        return this;
    };
    this.reset = function() {
        this.res = 0;
        return this;
    };
    this.getResult = function() {
        return this.res;
    };
    this.setState = function(x) {
        if (this.toNumber(x)) {
            this.res = x;
        }
        return this;
    };
};
var calculator = new Calculator();
module.exports = calculator;