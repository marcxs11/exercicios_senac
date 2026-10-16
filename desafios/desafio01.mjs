// DESAFIO 01

// import inquirer from "inquirer";

// const respostas = await inquirer.prompt([
//   {
//     type: "input",
//     name: "nome",
//     message: "Qual é o nome do aluno?",
//   },
//   {
//     type: "input",
//     name: "email",
//     message: "Qual é o e-mail do aluno?",
//   },
//   {
//     type: "input",
//     name: "curso",
//     message: "Qual curso o aluno deseja fazer?",
//   },
//   {
//     type: "input",
//     name: "cidade",
//     message: "Em qual cidade o aluno mora?",
//   },
//   {
//     type: "input",
//     name: "telefone",
//     message: "Qual é o telefone do aluno?",
//   },
// ]);

// console.log("\n=== Ficha de Aluno ===");
// console.log(`Nome:     ${respostas.nome}`);
// console.log(`E-mail:   ${respostas.email}`);
// console.log(`Curso:    ${respostas.curso}`);
// console.log(`Cidade:   ${respostas.cidade}`);
// console.log(`Telefone: ${respostas.telefone}`);

// DESAFIO 02

// import { number } from "@inquirer/prompts";

// const preco = await number({
//   message: "Qual é o preço do produto?",
//   required: true,
//   validate: (valor) =>
//     valor >= 0 || "O preço não pode ser negativo.",
// });

// const percentualDesconto = await number({
//   message: "Qual é o percentual de desconto?",
//   required: true,
//   validate: (valor) =>
//     (valor >= 0 && valor <= 100) ||
//     "O percentual deve estar entre 0 e 100.",
// });

// const desconto = (preco * percentualDesconto) / 100;
// const precoFinal = preco - desconto;

// console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
// console.log(`Preço final: R$ ${precoFinal.toFixed(2)}`);

// DESAFIO 4

import { select } from "@inquirer/prompts";

const perguntas = [
  {
    pergunta: "Qual componente é conhecido como o cérebro do computador?",
    alternativas: [
      { name: "Monitor", value: "A" },
      { name: "Processador (CPU)", value: "B" },
      { name: "Teclado", value: "C" },
      { name: "Impressora", value: "D" },
    ],
    respostaCorreta: "B",
  },
  {
    pergunta: "Qual destes dispositivos é usado para armazenar arquivos?",
    alternativas: [
      { name: "Mouse", value: "A" },
      { name: "Microfone", value: "B" },
      { name: "SSD", value: "C" },
      { name: "Webcam", value: "D" },
    ],
    respostaCorreta: "C",
  },
  {
    pergunta: "Qual programa é utilizado para navegar na internet?",
    alternativas: [
      { name: "Navegador", value: "A" },
      { name: "Calculadora", value: "B" },
      { name: "Editor de imagens", value: "C" },
      { name: "Bloco de notas", value: "D" },
    ],
    respostaCorreta: "A",
  },
  {
    pergunta: "O que significa a sigla Wi-Fi?",
    alternativas: [
      { name: "Um tipo de impressora", value: "A" },
      { name: "Uma conexão de rede sem fio", value: "B" },
      { name: "Um programa de edição de texto", value: "C" },
      { name: "Um componente de armazenamento", value: "D" },
    ],
    respostaCorreta: "B",
  },
  {
    pergunta: "Qual destas opções é um sistema operacional?",
    alternativas: [
      { name: "Google Chrome", value: "A" },
      { name: "Microsoft Word", value: "B" },
      { name: "Windows", value: "C" },
      { name: "Adobe Photoshop", value: "D" },
    ],
    respostaCorreta: "C",
  },
];

let acertos = 0;

for (const [indice, item] of perguntas.entries()) {
  const resposta = await select({
    message: `Pergunta ${indice + 1}: ${item.pergunta}`,
    choices: item.alternativas,
  });

  if (resposta === item.respostaCorreta) {
    acertos++;
  }
}

console.log(`\nPontuação final: ${acertos} de ${perguntas.length} acertos.`);


// DESAFIO 05

