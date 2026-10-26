// class Produto {
//   #preco;

//   constructor(nome, preco) {
//     this.nome = nome;
//     this.#preco = preco;
//   }

//   moeda(valor) {
//     return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
//   }

//   apresentar() {
//     console.log(`Produto: ${this.nome}`);
//     console.log(`Preço: ${this.moeda(this.#preco)}`);
//   }
// }

// const produto = new Produto('Teclado', 80);
// const produto1 = new Produto('Mouse', 60);

// produto.apresentar();
// produto1.apresentar();

// try {
//   Function('produto', 'return produto.#preco')(produto);
// } catch (erro) {
//   if (!(erro instanceof SyntaxError)) {
//     throw erro;
//   }

//   console.error(`Acesso direto ao campo privado: ${erro.message}`);
// }

// EXEMPLO


// class Produto {
//     #quantidade;

//     constructor(nome, quantidade) {
//         this.nome = nome;
//         this.quantidade = quantidade;
//     }

//     get quantidade() {
//         return this.#quantidade;
//     }

//     set quantidade(valor) {
//         if (!Number.isInteger(valor) || valor < 0) {
//             throw new Error("Quantidade inválida.");
//         }

//         this.#quantidade = valor;
//     }
// }

// const produto = new Produto("Teclado", 5);

// try {
//     produto.quantidade = -3;
// } catch (erro) {
//     console.log("Erro:", erro.message);
// }

// console.log("Quantidade atual:", produto.quantidade);

import { select } from '@inquirer/prompts';

async function exibirMenu() {
  const opcaoSelecionada = await select({
    message: 'Escolha uma opção:',
    choices: [
      { name: 'Cadastrar', value: 'Cadastrar' },
      { name: 'Consultar', value: 'Consultar' },
      { name: 'Sair', value: 'Sair' },
      { name: 'Relatório', value: 'Relatório' },
    ],
  });

  console.log(`Opção selecionada: \n ${opcaoSelecionada}`);
}

await exibirMenu();
