/* Vetores
    Vetor de remoção
*/

    let numeros = [1, 2, 3, 4, 5];
    let impar = numeros.filter(function(numero){
    return numero % 2 == 1;
});
    console.log(impar);