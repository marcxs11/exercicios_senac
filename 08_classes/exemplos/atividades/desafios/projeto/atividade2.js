class Funcionario {
    constructor(nome, cargo) {
        this.nome = nome;
        this.cargo = cargo;
    }

    apresentar() {
        console.log(`${this.nome} - ${this.cargo}`);
    }
}

const funcionario1 = new Funcionario(
    "Ana",
    "Atendente"
);

const funcionario2 = new Funcionario(
    "Carlos",
    "Gerente"
);

funcionario1.apresentar();
funcionario2.apresentar();

