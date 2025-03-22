// 1. Somar Elementos de um Array
// Escreva uma função somarArray(arr) que receba um array de números e
// retorne a soma de todos os elementos.
// Exemplo: somarArray([1, 2, 3, 4, 5]) deve retornar 15.

function somarArray(array) {
    let soma = 0

    array.forEach(
        n => {
            soma+=n;
        }
    );
    
    return soma
}

console.log(somarArray([1, 2, 3, 4, 5]))
