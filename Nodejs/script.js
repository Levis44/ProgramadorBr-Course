// argumentos

let args = process.argv.slice(2);

let a = Number(args[1]);
let b = Number(args[2]);
let c = "";

let type = args[0];


if(type == 's') {
    c = soma(a, b);
} else if (type == 'm') {
    c = mult(a, b);
} else {
    c = 'Opção inválida';
}

function soma(a, b) {
    return a + b;
}

function mult(x, y) {
    return x * y;
}

console.log(c); 