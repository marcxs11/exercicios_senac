import inquirer from "inquirer"; 
let total = 0; 
let qtdbarato = 0; 
let qtdmedio = 0; 
let qtdcaro = 0; 
const resposta = await inquirer.prompt([ 
{
type: "input",
name: "quantidade",
message: "Quantos produtos?"
}
]);

const quantidade = Number(resposta.quantidade); 
for (let x = 1; x <= quantidade; x++) { 
const dados = await inquirer.prompt([
{
type: "input",
name: "nome",
message: `Nome do produto ${x}:`
},
{
type: "input",
name: "preco",
message: "Preço (R$):"
}
]);

const preco = Number(dados.preco); 
total += preco; 
if (preco <= 50) { 
console.log("Categoria: Barato");
qtdbarato++;
} else if (preco <= 100) { 
console.log("Categoria: Médio");
qtdmedio++;
} else { 
console.log("Categoria: Caro");
qtdcaro++;
}
}

console.log("\n--- RESUMO ---");
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Baratos: ${qtdbarato}`);
console.log(`Médios: ${qtdmedio}`);

console.log(`Caros: ${qtdcaro}`);