import { input, number } from '@inquirer/prompts';
const nome = await input({ message: 'Qual seu nome?' });
const resposta = await input({ message: 'Qual sua motivação?'})

let idade = await number({
    message: 'Qual sua idade?',
    min: 0,
    max: 120,
    required: true,
});

let idade_depois = idade + 1;

console.log("Bem vindo de volta, " + nome + "!");
console.log("Sua motivação é " + resposta);
// console.log(typeof idade);
console.log("Ano que vem, você terá " + idade_depois + " anos.");

