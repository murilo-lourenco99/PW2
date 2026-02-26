/* Vetores
    Vetor de adição
*/
    let a = [10, 5, 8, 9, 2];
    let b = [5, 1, 2, 10, 9];
    let soma = a.map(function(numero, i){
        return numero + b[i];
        
    })

    console.log(soma);