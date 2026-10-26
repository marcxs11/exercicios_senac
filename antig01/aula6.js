import { number } from '@inquirer/prompts'

// const nd = await number({
//     message: "Digite um número para tabuada!"
// })

// console.log(`Tabuada do ${nd}`)
// console.log("=" .repeat (15))
// for (let i = 1; i <= 20; i++) {
//     console.log(`${i} x ${nd} = ${i*nd}`)
// }



//  let contador = 1; // Variável de controle (inicío)
//         while (contador <= 15) {console.log(`Volta atual do loop: ${contador}`);
//         contador++;
//         }

//         console.log("Loop finalizado com sucesso! 🏁 ")

// exercício1

// let nv = 0;

// let porc = 20;

// for (let nb = 0; nb <= 100; nb=nb + porc) {

//     console.log(`Porcentagem atual da bateria: ${nb}`);
//     console.log(`Carregando...`)

// };

let lit = await number({message: "Quantos litros você quer abastecer? "})
let cb = 5.8;
let total = lit * cb;
let x = total;

for (let i = 5; i <= lit; i+=5) {
    console.log(`Abastecendo ${i} litro(s)...
     Total a pagar: R$ ${i*cb}`);
}

console.log(`Total a pagar: R$ ${total}`)

const cashback = ((x-5) >= 30 )
? "Parabéns! Você acaba de receber 50 pontos de cashback!"
: `Faltam $(30 - (x-5)) litro(s) para você ganhar cashback.`

console.log(cashback);