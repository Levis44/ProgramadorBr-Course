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
    
    var orderedArray = arr.sort((a,b)=>a-b)
    for (let num of orderedArray) {
        console.log(num)
    }
}
arrayOrder(myArray)

// -------------------------------------------------------------------------------------//

// Resolution exercise 3

var myArray = [20, 7, 3, 2, 1, 8, 9];

function biggerInArray(arr) {
     
    const orderedArray = arr.sort((a, b) => b-a);
    
    return orderedArray[0]

}

biggerInArray(myArray)

// -------------------------------------------------------------------------------------//