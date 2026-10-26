import { number, confirm } from '@inquirer/prompts';


const ingresso = await confirm({message: 'Tem ingresso? ->', required: true});

const idade = await number({
    message: 'Idade?',
    min: 0,
    max: 120,
    required: true, 
})
const acompanhado = await confirm({ message: 'Está acompanhado? ->', required:true});

const mensagem = ((ingresso) && (idade >= 18 || acompanhado)) ? "Entrada liberada!" : "Vai embora :)";

console.log(mensagem);

// const panda = await confirm({ message: 'Você é um panda? ->', required:true});
// const luta = await confirm({ message: 'Você luta Kung Fu? ->', required:true});
// const guerreiro = await confirm({ message: 'Você é o Dragão Guerreiro? ->', required:true});
// const mensagem = ((panda) && (luta) && (guerreiro)) ? "Skadosh!" : "Você só é um grande e gordo panda!";
// console.log(mensagem);