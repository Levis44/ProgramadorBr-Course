let calc = {

    mult: (x, y) => {
        return x * y;
    },

    soma: (a, b) => {
        return a + b;
    }
}

module.exports = calc;


// ouu
// usando o module como objeto e atribuindo um método

module.exports.somar = function somar(x, y) { return x + y}
module.exports.multi = function multi(x, y) { return x * y}


// ----------------------------------------------------------
//
// usaria no outro arquivo assim =>
//
// let calc = require('./calc');
//
// console.log(calc.multi(4, 5));
// console.log(calc.somar(4, 5));

// ou até =>
//
// let multi = require('./calc').multi;
// let somar = require('./calc').somar;
//
// console.log(multi(4, 5));
// console.log(somar(4, 5));