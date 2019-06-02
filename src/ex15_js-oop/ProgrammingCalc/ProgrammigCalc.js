function ProgrammingCalc() {
    Calculator.call(this);
}
ProgrammingCalc.prototype = Object.create(Calculator.prototype);
ProgrammingCalc.prototype.constructor = ProgrammingCalc;
ProgrammingCalc.prototype.decToBin = function(value) {
    if (this.toNumber(value)) {
        this.res = value.toString(2);
    }
    return this;
}
ProgrammingCalc.prototype.random = function () {
    this.res = Math.random();
    return this;
}