/* Estrutura de dados Vetor ou Array
    Lógica para guardar mais de um valor em uma variável
        Soma dos vetores e Quadrado do vetor
*/

// Soma dos vetores
let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9, 10];
let c = [];
let i;

for (i=0; i<a.length; i++) { // o a.lenght é o tamanho do vetor
    c[i] = a[i] + b[i];
}
console.log("Resultado da soma: " ,c);

// Calculo do quadrado do vetor
let d = [1, 2, 3, 4, 5];
let f = [];

for (i=0; i<d.length; i++) {
    f[i] = d[i] * d[i];
}
console.log("Resultado do quadrado: ", f);