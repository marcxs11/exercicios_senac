// Uma classe é uma estrutura que define como determinados objetos poderão ser criados e quais comportamentos compartilharão.
// Cada produto é uma instância da classe Produto.

// Instância é um objeto criado a partir de uma classe.

// DESAFIO 1

// class Pessoa {
// cumprimentar() {
// console.log("Olá. Muito prazer em te conhecer!");

// }
// }

// const pessoa1 = new Pessoa();

// pessoa1.cumprimentar();

// DESAFIO 2

// class Aluno {
//     constructor(nome, idade, cargo) {
//         this.nome = nome;
//         this.idade = idade;
//         this.cargo = cargo;
//     }

//     apresentar() {
//         console.log(`${this.nome} - ${this.idade} - ${this.cargo}`);
//     }
// }

// const aluno1 = new Aluno(
//     "Carlos",
//     "20 anos",
//     "Aluno"
// );

// aluno1.apresentar();

// Crie o aluno Carlos, 20 anos
// Apresente as propriedades

// DESAFIO 3

// class Categoria {
//     constructor(nome, tipo, uso) {
//         this.nome = nome;
//         this.tipo = tipo;
//         this.uso = uso;

//     }

// apresentar() {
//         console.log(`${this.nome} - ${this.tipo} - ${this.uso}`);
//     }
// }

//     const categoria1 = new Categoria(
//           "Folha",
//           "Papelaria",
//           "Manual"

//     );

//     categoria1.apresentar();
// Crie três instâncias diferentes
// Apresente seus nomes

// DESAFIO 4

// class Produto {
//     constructor(preco, quantidade) {
//         this.preco = preco;
//         this.quantidade = quantidade;
//     }

//     calcularTotal() {
//         return this.preco * this.quantidade;
//     }
// }

// const produto1 = new Produto(80, 5);
// console.log(produto1.calcularTotal());

// DESAFIO 5

// class Funcionario {
//     constructor(nome, cargo, salario) {
//         this.nome = nome;
//         this.cargo = cargo;
//         this.salario = salario;
//     }

//     apresentar() {
//         console.log(`Nome: ${this.nome} - Cargo: ${this.cargo} - Salário: R$ ${this.salario}`);
//     }
// }

// const funcionario1 = new Funcionario("Ana", "Atendente", 1800);
// funcionario1.apresentar();

// DESAFIO 6

// class Produto {
//     constructor(preco) {
//         this.preco = preco;
//     }

//     atualizarPreco(novoPreco) {
//         if (!Number.isFinite(novoPreco) || novoPreco < 0) {
//             return false;
//         }

//         this.preco = novoPreco;
//         return true;
//     }
// }

// const produto = new Produto(80);
// console.log("Atualização para 90:", produto.atualizarPreco(90), "- Preço:", produto.preco);
// console.log("Atualização para -10:", produto.atualizarPreco(-10), "- Preço:", produto.preco);
// console.log("Atualização para texto:", produto.atualizarPreco("100"), "- Preço:", produto.preco);

// DESAFIO 7

// class Cliente {
//     constructor(nome) {
//         this.nome = nome;
//     }
// }

// const cliente = new Cliente("Paula");
// console.log(cliente.nome);

// DESAFIO 8

class Estoque {
    constructor(quantidade) {
        if (!Number.isInteger(quantidade) || quantidade < 0) {
            throw new RangeError("A quantidade deve ser um inteiro não negativo.");
        }

        this.quantidade = quantidade;
    }
}

for (const quantidade of [10, -5, 2.5]) {
    try {
        const item = new Estoque(quantidade);
        console.log(`Quantidade válida: ${item.quantidade}`);
    } catch (erro) {
        if (!(erro instanceof RangeError)) {
            throw erro;
        }

        console.log(`Quantidade inválida: ${quantidade}`);
    }
}
