// 3. Contar Vogais em uma String
// Desenvolva uma função contarVogais(str) que conte e retorne o número de
// vogais (a, e, i, o, u) em uma string fornecida.
// Exemplo: contarVogais('javascript') deve retornar 3.

function contarVogais(str) {  
    let cont = 0;  
    const vogais = ['a', 'e', 'i', 'o', 'u'];  

    for (let i = 0; i < str.length; i++) { 

        if (vogais.includes(str[i].toLowerCase())) {  
            cont++;  
        }  
    }  

    return cont;  
}  

console.log(contarVogais('paralelepípedo'));