import {number} from '@inquirer/prompts'

let nota = await number ({message: "Nota final? ", required: true});
if (nota >= 6) {
    console.log("Aprovado.");
}

else if (nota >= 5) {
    console.log("Em recuperação.")
}

else {
    console.log("Reprovado.")
}