let produtos = ["Cachorro", "Gato", "Papagaio"];
console.log(produtos);

console.log(produtos[0]);
console.log(produtos[1]);
console.log(produtos[2]);

// produtos[0] = "Mouse gamer";
// console.log(produtos);
// console.log

produtos[1] = "Pato";
console.log(produtos);
console.log(produtos.length);

// produtos.push("Impressora");
// console.log(produtos);

produtos.push("Webcam");
console.log(produtos);

produtos.pop();
console.log(produtos);

for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i]);
}

for (let i = 0; i < produtos.length; i++) { 
if (produtos[i] === "Cachorro") { 
console.log("Cachorro encontrado!"); 
} 
}


