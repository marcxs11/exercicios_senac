// function exibirMatriz(matriz) {
// for (let i = 0; i < matriz.length; i++) {
//     let linha = '';
//     for (let j = 0; j < matriz[i].length; j++) {
// linha += matriz[i][j] + '  ';
// }
// console.log(linha);
// }
// }

const notas = [
    [9, 6, 8, 7],
    [5, 8, 5, 9],
    [6, 7, 8, 9]
];
// exibirMatriz(notas);

function somarMatriz(matriz) {
let soma = 0;
for (let i = 0; i < matriz.length; i++) {
for (let j = 0; j < matriz[i].length; j++) {
soma += matriz[i][j];
}
}
return soma;
}

function mediaMatriz(matriz) {
let quantidade = 0;
for (let i = 0; i < matriz.length; i++) {
quantidade += matriz[i].length;
}
return somarMatriz(matriz) / quantidade;
}

function maiorValor(matriz) {
let maior = matriz[0][0];
for (let i = 0; i < matriz.length; i++) {
for (let j = 0; j < matriz[i].length; j++) {
if (matriz[i][j] > maior) {
maior = matriz[i][j];
}
}
}
return maior; 
}

function menorValor(matriz) {
let menor = matriz[0][0];
for (let i = 0; i < matriz.length; i++) {
for (let j = 0; j < matriz[i].length; j++) {
if (matriz[i][j] < menor) {
menor = matriz[i][j];
}
}
}
return menor;
}

console.log("Soma: " + somarMatriz(notas));
console.log("Média: " + mediaMatriz(notas));
console.log("Maior valor: " + maiorValor(notas));
console.log("Menor valor: " + menorValor(notas));