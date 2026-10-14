// const produtos = ["Mouse", "Teclado", "Monitor", "Webcam", "Impressora"];
// const precos = [50, 120, 850, 180, 600];
// const formatoMoeda = new Intl.NumberFormat("pt-BR", {
//     style: "currency",
//     currency: "BRL",
// });

// console.log(`Quantidade de produtos cadastrados: ${produtos.length}`);

// console.log("\nProdutos e preços:");
// for (let i = 0; i < produtos.length; i++) {
//     console.log(`${i + 1}. ${produtos[i]} - ${formatoMoeda.format(precos[i])}`);
// }

// if (produtos.includes("Webcam")) {
//     console.log("\nWebcam está cadastrada.");
// } else {
//     console.log("\nWebcam não está cadastrada.");
// }

// const indiceMonitor = produtos.indexOf("Monitor");
// if (indiceMonitor !== -1) {
//     console.log(`Índice de Monitor no array: ${indiceMonitor}`);
// } else {
//     console.log("Monitor não está cadastrado.");
// }

// const indiceTeclado = produtos.indexOf("Teclado");
// if (indiceTeclado !== -1) {
//     precos[indiceTeclado] = 135;
//     console.log(`\nPreço do Teclado atualizado para ${formatoMoeda.format(precos[indiceTeclado])}.`);
// }

// produtos.push("Headset");
// precos.push(220);
// console.log(`Produto adicionado: ${produtos[produtos.length - 1]}.`);

// const produtoRemovido = produtos.pop();
// const precoRemovido = precos.pop();
// console.log(`Produto removido: ${produtoRemovido} - ${formatoMoeda.format(precoRemovido)}.`);

// console.log("\nProdutos com preço maior ou igual a R$ 200,00:");
// for (let i = 0; i < produtos.length; i++) {
//     if (precos[i] >= 200) {
//         console.log(`${produtos[i]} - ${formatoMoeda.format(precos[i])}`);
//     }
// }

// const somaPrecos = precos.reduce((soma, preco) => soma + preco, 0);
// console.log(`\nSoma dos preços: ${formatoMoeda.format(somaPrecos)}`);

// const produtosEmOrdemAlfabetica = [...produtos].sort((a, b) =>
//     a.localeCompare(b, "pt-BR")
// );
// console.log("\nProdutos em ordem alfabética:");
// console.log(produtosEmOrdemAlfabetica.join(", "));

const produtos = ["Mouse", "Teclado", "Monitor", "Webcam", "Impressora"];
const precos = [50, 120, 850, 180, 600];
console.log("1. Quantidade:", produtos.length);
console.log("\n2. Produtos e preços:");
for (let i = 0; i < produtos.length; i++) {
console.log(`${i + 1}. ${produtos[i]} - R$ ${precos[i].toFixed(2)}`);
}
console.log("\n3. Webcam cadastrada?", produtos.includes("Webcam") ? "Sim" : "Não");
console.log("Webcam inexistente?", produtos.includes("Webcam Pro") ? "Sim" : "Não");
console.log("4. Índice de Monitor:", produtos.indexOf("Monitor"));
const indiceTeclado = produtos.indexOf("Teclado");
if (indiceTeclado !== -1) {
precos[indiceTeclado] = 135;
}
console.log("5. Novo preço do Teclado: R$", precos[indiceTeclado].toFixed(2));
produtos.push("Headset"); 
precos.push(220);
console.log("6. Produto adicionado:", produtos[produtos.length - 1]);
const removido = produtos.pop();
precos.pop();
console.log("7. Produto removido:", removido);
console.log("\n8. Produtos com preço a partir de R$ 200:");
for (let i = 0; i < produtos.length; i++) { 
if (precos[i] >= 200) { 
console.log(`${produtos[i]} - R$ ${precos[i].toFixed(2)}`);
}
} 
let soma = 0;
for (let i = 0; i < precos.length; i++) { 
soma += precos[i]; 
} 
console.log("\n9. Soma dos preços: R$", soma.toFixed(2));
const nomesOrdenados = [...produtos].sort();
console.log("\n10. Nomes em ordem alfabética:");
for (let i = 0; i < nomesOrdenados.length; i++) {
console.log(nomesOrdenados[i]);
}
const media = soma / precos.length;
console.log("\nExtra. Preço médio: R$", media.toFixed(2));
