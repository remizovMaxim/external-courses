var Calculator = {
    res: 0,
    toNumber: function(value) {
        return !isNaN(parseFloat(value));
    },
    add: function(x) {
        if (this.toNumber(x)) {
            this.res += x;
        }
        return this;
    },
    subtract: function(x) {
        if (this.toNumber(x)) {
            this.res -= x;
        }
        return this;
    },
    multiply: function(x) {
        if (this.toNumber(x)) {
            this.res *= x;
        }
        return this;
    },
    divide: function(x) {
        if (this.toNumber(x)) {
            this.res /= x;
        }
        return this;
    },
    reset: function() {
        this.res = 0;
        return this;
    },
    getResult: function() {
        return this.res;
    },
    setState: function(x) {
        if (this.toNumber(x)) {
            this.res = x;
        }
        return this;
    },
    fetchData: function(callback) {
        setTimeout(function() {
            callback(500);
        }, 1000);
        return this;
    }
};
module.exports = Calculator;