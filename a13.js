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
