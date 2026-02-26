/* acumulção de vetor
    Somatória do vetor e Potencia
*/

const tam = 5;
let a = [1, 2, 3, 4, 5]; // o resultado da soma tem que ser 55
let b;
let i, j, soma;

for (i=0; i<tam; i++) {
    soma = 0;

    for(j=0; j<tam; j++) {
        soma = soma + a[j];
    }
}
b = soma;

console.log(a);
console.log("Soma = " ,b);

// potência
let potencia = 1;
let c = [1, 2, 3, 4, 5];

for (i=0; i<tam; i++) {
    potencia = potencia * c[i];
}

console.log("Resultado da potencia = ",potencia);