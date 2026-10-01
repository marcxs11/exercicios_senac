import { number } from '@inquirer/prompts';

const idade = await number({message: 'Insira sua idade:' });
console.log(idade);

if (idade >= 18) {
     console.log("☑️ Acesso liberado!: Seja bem vindo!"); 
} else
     { console.log("❎ Acesso negado.: Vai pra casa criança.");
}