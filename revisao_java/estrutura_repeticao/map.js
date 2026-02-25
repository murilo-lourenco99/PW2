/* Map
    Uso de map como vetor copiador para fazer o cubo de números e conversão de horas em minutos
*/

let numeros = [10, 5, 8, 9, 2];

let cubos = numeros.map(function(numero){
    return numero*numero*numero;
}) 

console.log(cubos);

// conversão de horas em minutos
let horas = [2, 5, 8];
console.log(horas);

let minutos = horas.map(function(hora) {
    return hora * 60;
})