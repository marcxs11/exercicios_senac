import {number, input, inquirer} from '@inquirer/prompts'

let total = 0;
let brt = 0;
let med = 0;
let car = 0;

const resposta = await inquirer.prompt([
    {
        type: "input",
        name: "quantidade",
        message: "Quantos produtos serão cadastrados?"
    }
]);

const quantidade = number(resposta.quantidade);

for (let i = 1; i <= quantidade; i++) {

const dados = await inquirer.prompt([
    {
        type: "input",
        name: "nome",
        message: "Nome do produto ${i}:"
    },
    {
        type: "input",
        name: "preço",
        message: "Preço (R$): "
    }
]);

const preço = number(dados.preço);
total += preço;

if (preço <= 50) {
    console.log("Categoria: Barato");
    quantidadebrt++;

} else if(preço <= 100) {
    console.log("Categoria: Médio");
    quantidademed++;

} else {
    console.log("Categoria: Caro")
}




}
