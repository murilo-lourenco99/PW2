// realizando a busca em um vetor

let vetor = [1, 2, 3, 4, 5];
let busca = 3;
let i;
let encontrado = false;

for (i=0; i<vetor.length; i++) {
    if (vetor[i] == busca) {
        encontrado = true;
        break;
    }
}

if (encontrado) {
    console.log("O numero ",busca, "foi encontrado");
} else {
    console.log("O numero ",busca, "não foi encontrado");
}