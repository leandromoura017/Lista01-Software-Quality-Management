// 10.Encontrar a Média de um Array
// Escreva uma função mediaArray(arr) que receba um array de números e
// retorne a média dos valores.
// Exemplo: mediaArray([1, 2, 3, 4, 5]) deve retornar 3.

function mediaArray(arr) {
    if (arr.length === 0) return 0;

    return arr.reduce((soma, num) => soma + num, 0) / arr.length;
}

console.log(mediaArray([10, 22, 13, 45, 10]));