// 5. Encontrar o Fatorial de um Número
// Implemente uma função fatorial(n) que calcule o fatorial de um número
// inteiro positivo.
// Exemplo: fatorial(5) deve retornar 120.

function fatorial(n) {  
    if (n < 0) return undefined;

    let resultado = 1;  

    for (let i = 1; i <= n; i++) {  

        resultado *= i;  
    }  

    return resultado;  
}  

console.log(fatorial(3));