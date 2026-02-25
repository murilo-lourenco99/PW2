// código que converte horas em minutos
const horas = [2, 5, 8];
console.log(horas);

let minutos = horas.map(function(hora) {
    return hora * 60;
})

console.log(minutos);

// código que converte letras minusculas pra maiúsculas
const nomesPituchos = ["morim", "raulzito", "micarinha"];
console.log(nomesPituchos);

const nomesAltos = nomesPituchos.map(function(nome) {
    return nome.toUpperCase();
})

console.log(nomesAltos);