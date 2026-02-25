/* Estrutura Condicional de If/Else
    Tomada de decisão:
     Calculo Média e Numero Par ou Impar
*/

// Calculo Media
let nota1 = 7.5;
let nota2 = 5.0;
let nota3 = 2.5;

let media = (nota1 + nota2 + nota3) / 3;
console.log("A media do bimestre é: ", media);

if (media >= 7) {
    console.log("Aprovado");
} else if (media <= 5) {
    console.log("Reprovado");
}

// Verificação se um numero é par ou impar
let numero = 5;

if (numero % 2 == 0) {
    console.log("Número Par");
} else {
    console.log("Número Impar");
}