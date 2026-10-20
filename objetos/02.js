const produto = {
    codigo: 101,
    nome: "Mouse",
    preco: 50
};

produto.quantidade = 10;
produto.preco = 65;

console.log("Após alterações:", produto);

delete produto.quantidade;

console.log("Após exclusão:", produto);