// 1. Escreva uma função que receba dois números e retorne o maior deles
// 2. Escreva uma função que receba um Array com 3 números e imprima eles em ordem
// 3. Escreva uma função que receba um Array com 5 números e retorne o maior deles
// 4. Escreva uma função que receba um Array com 5 números e retorne a média deles
// 5. Escreva uma função que receba um número e imprima se ele é par ou ímpar
// 6. Escreva um programa que vá de 0 a 100 e imprima o número na tela caso não seja múltiplo de 4. Para cada número que seja múltiplo de 4 imprima "pi" no lugar
// 7. Escreva uma função que receba um objeto e imprima suas propriedades
// 8. Escreva uma função que receba uma data e retorne um objeto com as propriedades dia, mês e ano Referentes a essa data.
// 9. Escreva um programa que receba um array de objetos com as propriedades altura e idade e imprima: A maior e menor altura e a média da idade
// 10. Escreva um programa que imprima o seguinte padrão
// *
// * *
// * * *
// * * * *
// * * * * *

// -------------------------------------------------------------------------------------//

// Resolution exercise 1

function biggerNumber(num1, num2) {
    return Math.max(num1, num2)
}

biggerNumber(6, 3)

// -------------------------------------------------------------------------------------//

// Resolution exercise 2

var myArray = [3, 2, 4];

function arrayOrder(arr) {
    var orderedArray = arr.sort((a ,b)=>a-b)
    for (let num of orderedArray) {
        console.log(num)
    }
}

// or

let sortedArray = arr => {return arr.sort((a ,b)=>a-b)}
console.log(sortedArray(myArray))

arrayOrder(myArray)

// -------------------------------------------------------------------------------------//

// Resolution exercise 3

var myArr = [20, 7, 3, 2, 1, 8, 9];

function biggerInArray(arr) {
     
    const orderedArray = arr.sort((a, b) => b-a);
    
    return orderedArray[0]

}

biggerInArray(myArr)

// -------------------------------------------------------------------------------------//

// Resolution exercise 4

var myArr = [20, 7, 3, 2, 1, 8, 9];

function media(arr) {
     var soma = 0;
     for (let num of arr) {
           soma += num;
     }

     var media = soma / arr.length

     return media
}

// -------------------------------------------------------------------------------------//

// Resolution exercise 5

function evenOrOdd(num) {
    return num % 2 == 0 ? "É par" : "É ímpar";
}

// -------------------------------------------------------------------------------------//

// Resolution exercise 6

function pi() {
    for (var i = 0; i < 101; i++) {
        if (i % 4 == 0) {
            console.log("pi")
        } else {
            console.log(i)
        }
    }
}

pi()

// -------------------------------------------------------------------------------------//

// Resolution exercise 7

const myObject = {
    name: "Nicolas",
    hair: "Brown",
    height: "1,83"
}

function properties(object) {
    console.log(Object.keys(object))
}

// or

function properties2(object) {
    for (let propertie in object) {
        console.log(propertie)
    }
}

properties(myObject)

// -------------------------------------------------------------------------------------//

// Resolution exercise 8
var meses = ['Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro']
    

function date(dia) {
    const day = dia.getDate();
    const month = meses[dia.getMonth()];
    const year = dia.getFullYear();

    return console.log(day, month, year)
}

date(new Date(Date.now()))

// or

function data(d){
   return {
        dia:d.getDate(),
        mes: meses[d.getMonth()],
        ano: d.getFullYear()
    }
}

console.log(data(new Date(Date.now())))

// -------------------------------------------------------------------------------------//

// Resolution exercise 9

var arrayOfObjects = [
    {
        height: 182,
        age: 20
    },

    {
        height: 162,
        age: 50
    },

    {
        height: 190,
        age: 30
    },

    {
        height: 210,
        age: 100
    },

    {
        height: 150,
        age: 2
    }
];

function analysis(arr) {
    var maiorAltura = 0;
    var menorAltura = 999;
    var idades = []

    for (var object of arr) {

        if (object.height > maiorAltura) {
            maiorAltura = object.height

        } else if (object.height < menorAltura) {
            menorAltura = object.height
        }
        
        idades.push(object.age)
    }

    function mediaArray(arr) {
        var soma = 0;
        for (let num of arr) {
              soma += num;
        }
   
        var media = soma / arr.length
   
        return media
   }

    console.log("A maior altura é: " + maiorAltura)
    console.log("A menor altura é: " +menorAltura)
    console.log("A média entre as idades é: " + mediaArray(idades))

    
}

// -------------------------------------------------------------------------------------//

// Resolution exercise 10

function spikes() {
    for (var i = 1; i < 6; i++) {
        let string = ""
        for (var j = 1; j <= i; j++){
            string += "* "
        }
        console.log(string)
    }
}

spikes()

// -------------------------------------------------------------------------------------//
