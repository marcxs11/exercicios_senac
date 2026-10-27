class Aluno {
    // #nota;  
    constructor(nome, idade, nota) {
        this.nome = nome,
        this.idade = idade,
        this.nota = nota
    }
}

const aluno = new Aluno("João", 18, 9);
const aluno1 = new Aluno("Maria", 17, 8);
const aluno2 = new Aluno("Pedro", 19, 7);

console.log(aluno);
console.log(aluno1);
console.log(aluno2);