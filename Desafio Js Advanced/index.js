// Fazer um código que execute a mesma função do map() e reduce()

// map
let arr = [1, 2, 3, 4, 5];
let dobro = arr.map(a => a * 2);
console.log(dobro);

// map => js
let arrDobro = [];
function dobro(arr) {
    for (var i = 0; i < arr.length; i++) {
        arrDobro.push(arr[i] * 2);
    }
    return arrDobro
}
console.log(dobro(arr));

//reduce 
let soma = arr.reduce((acumulator, currentValue) => acumulator + currentValue, 0);
console.log(soma);

// reduce => js
function somar(arr, inicial) {
    let somador = 0;
    inicial != 0 ? somador = inicial : somador = somador
    for (var i = 0; i < arr.length; i++) {
        somador += arr[i];
    }
    return somador
}
console.log(somar(arr, 0))





