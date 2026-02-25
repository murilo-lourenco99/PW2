/* Estrutura de Repetição For
    Laço de repetição
        Numero Impar e Tabuada (até o 10)
 */

// Numero Impar
let i;

for (i=1; i<=20; i=i+2) {
    console.log(i);
}

// Tabuada ate o 10
let j;
let expoente;
let resultado = 0;

for (j=1; j<=tabuada; j++) {
    console.log("A tabuada do número " ,j);
    for (expoente=1; expoente<=10; expoente++) {
        resultado = j * expoente;
        console.log(j, " x " ,expoente, " = " ,resultado);
    }
}