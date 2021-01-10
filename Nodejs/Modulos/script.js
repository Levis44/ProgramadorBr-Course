let calc = require('./calc');


let args = process.argv.slice(2);

let a = Number(args[1]);
let b = Number(args[2]);
let c = "";

let type = args[0];


if(type == 's') {
    c = calc.soma(a, b);
} else if (type == 'm') {
    c = calc.mult(a, b);
} else {
    c = 'Opção inválida';
}

console.log(c); 