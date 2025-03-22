// 4. Inverter uma String
// Escreva uma função inverterString(str) que receba uma string e retorne
// essa string invertida.
// Exemplo: inverterString('hello') deve retornar 'olleh'.

function inverterString(str) {  
    let resultado = '';  

    for (let i = str.length - 1; i >= 0; i--) {  

        resultado += str[i];  
    }  

    return resultado;  
}  

console.log(inverterString('agora é lá'));