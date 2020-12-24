// Carne - 400g por pessoa + de 6 horas - 650g 
// Cerveja - 1200ml por pessoa + de 6 horas - 2000ml
// Refrigerante/agua - 1000ml por pessoa + de 6 horas - 1500ml

// crianças valem por 1/2


let inputAdultos = document.querySelector("#adultos");
let inputCriancas = document.querySelector("#criancas");
let inputDuracao = document.querySelector("#duracao");
let resultado = document.querySelector("#resultado");

let carne;
let cerveja;
let bebidas;



function calcular() {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    carne = 400;
    cerveja = 1200;
    bebidas = 1000;

    qtdElementos(duracao);
    

    let qtdTotalCarne = carne * adultos + (carne / 2 * criancas);
    let qtdTotalBebidas = bebidas * adultos + (bebidas / 2 * criancas);
    let qtdTotalCerveja = cerveja * adultos;

    exibir(qtdTotalCarne, qtdTotalBebidas, qtdTotalCerveja);
    
}

function exibir(qtdTotalCarne, qtdTotalBebidas, qtdTotalCerveja) {
    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Garrafas de 2L de Bebida</p>`
}

function qtdElementos(duracao) {
    if(duracao >= 6) {
        carne = 650;
        cerveja = 2000;
        bebidas = 1500;
        
    }
}





