// console.log ("Sistema funcionando!");


// class Aluno {
// apresentar() {
//         console.log("Olá! Sou um aluno.");
//     }
// }

// const aluno1 = new Aluno();
// const aluno2 = new Aluno();

// aluno1.apresentar();
// aluno2.apresentar();

// class Aluno {
//     constructor(nome) {   CONSTRUCTOR
//         this.nome = nome;
//     }
// }

// class Aluno {
//     constructor(nome) {
//         this.nome = nome;
//     }

//     apresentar() {
//         console.log(`Meu nome é ${this.nome}`);  EXEMPLO COM CONSTRUCTOR 
//     }
// }

// const aluno1 = new Aluno("Carlos");
// const aluno2 = new Aluno("Mariana");

// aluno1.apresentar();
// aluno2.apresentar();

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

const produto1 = new Produto("Mouse", 50);
const produto2 = new Produto("Teclado", 80);

console.log(produto1.nome);
console.log(produto2.nome);

