/* Estrutura de Repetição While (While Do)
    Laço de repetição
        Soma Cem e Tabuada
    estrutura_repeticao_while.js
 */

// Soma Cem
let i=1;
let resultado = 0;

while (i<=100) {
    resultado = resultado + i;
    console.log(resultado);
    i++;
}

// Tabuada
let numero = 7;
let tabuada = 0;
let j = 0;

while (j<=10) {
    tabuada = numero * j;
    console.log(numero, " x " ,j, " = ", tabuada);
    j++
}