// estrutura forEach sendo usada pra uma lista de compras e lista de presença

// lista de compras
let frutas = ["Maçã", "Banana", "Morango"];

frutas.forEach(function(fruta) {
    // Ação que acontece com cada "fruta"
    console.log("Comprar: " + fruta);
});

// lista de presença
let alunos = ["Morim", "Mica", "Raul", "Estefani"];

alunos.forEach(function(aluno) {
    console.log(aluno, ": presente");
});