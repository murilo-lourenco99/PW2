/* Estrutura de Repetição Do While
    Laço de repetição
        Potencia e Fatorial
*/

// Potencia
let i = 1;
let base = 2;
let expoente = 5;
let potencia = 0;

do {
    potencia = base ** i;
    i++;
} while (i <= expoente);
console.log("O resultado da potencia é: ", potencia);

// Fatorial
let j = 1;
let numero = 4;
let total = 1;

do {
    total = total * j; // linha do calculo e de acumulo
    j++;
} while(j<=numero);
console.log("O resultado do fatorial é: ", total);