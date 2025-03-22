// 8. Ordenar um Array em Ordem Crescente
// Escreva uma função ordenarArray(arr) que receba um array de números e
// o retorne ordenado em ordem crescente.
// Exemplo: ordenarArray([3, 1, 4, 2, 5]) deve retornar [1, 2, 3, 4, 5].

function ordenarArray(arr) {  
    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = i + 1; j < arr.length; j++) { 

            if (arr[i] > arr[j]) {  

                let temp = arr[i];  
                arr[i] = arr[j];  
                arr[j] = temp;  
            }  
        }  
    }  

    return arr;  
}  

console.log(ordenarArray([22, 6, 4, 9, 17]));