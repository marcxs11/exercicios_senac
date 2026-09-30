import { number, confirm } from '@inquirer/prompts';


const ingresso = await confirm({message: 'Tem ingresso?', required: true});
const acompanhado = await confirm({ message: 'Está acompanhado?' })