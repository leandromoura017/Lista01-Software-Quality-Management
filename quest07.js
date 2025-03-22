// 7. Verificar Palíndromo
// Desenvolva uma função palindromo(str) que receba uma string e retorne
// true se a string for um palíndromo (lê-se da mesma forma de frente para
// trás), ou false caso contrário.
// Exemplo: palindromo('radar') deve retornar true.

function palindromo(str) {  
    let inverso = '';  

    for (let i = str.length - 1; i >= 0; i--) { 

        inverso += str[i];  
    }  

    return str === inverso;  
}  

console.log(palindromo('radar'));