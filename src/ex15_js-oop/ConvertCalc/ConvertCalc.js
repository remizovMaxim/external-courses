function ConvertCalc() {
    Calculator.call(this);
}

ConvertCalc.prototype = Object.create(Calculator.prototype);
ConvertCalc.prototype.constructor = ConvertCalc;

ConvertCalc.prototype.EurToRub = function(value) {
    if (this.toNumber(value)) {
        this.res = (value*71).toFixed(4);
    }
    return this;
}

ConvertCalc.prototype.RubToEur = function(value) {
    if (this.toNumber(value)) {
        this.res = (value/71).toFixed(4);
    }
    return this;
}