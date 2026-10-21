class banco {
exibircliente(){
    console.log(`Nome: ${this.nome}`);
    console.log(`Banco: ${this.banco}`);
    console.log(`Saldo: ${this.saldo}`);
}

}   


const cliente1 = new Cliente("Marcos","Bradesco","6000");