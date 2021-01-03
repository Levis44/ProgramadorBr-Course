// Fazer um código que execute a mesma função do map() e reduce()

// map
let arr = [1, 2, 3, 4, 5];
let dobro = arr.map(a => a * 2);
console.log(dobro);

// map => js
let arrDobro = [];
function dobro(arr) {
    for (let i in arr) {
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
    for (let i in arr) {
        somador += arr[i];
    }
    return somador
}
console.log(somar(arr, 0))

//filter
let myArr = [3, 5, 8, 10, 32, 2];

function biggerThan7(number) {
    return number > 6;
}

let filteredArr = myArr.filter(biggerThan7);
console.log(filteredArr);

// filter => js
let myArr = [3, 5, 8, 10, 32, 2];
let filteredArr = [];

const filterArr = arr => {
    for (let num of arr) {
        if (num > 7) {
            filteredArr.push(num);
        }
    }
    console.log(filteredArr);
}

filterArr(myArr);






