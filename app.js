const prompt = require('prompt-sync')()

var num1 = prompt('número 1: ')
var num2 = prompt('número 2: ')
var operação = prompt('qual a operação desejada ?')

num1 = parseFloat(num1)
num2 = parseFloat(num2)
var resultado

if(typeof num1 == 'number' && typeof num2 == 'number'){
    switch(operação){
        case'+':
            resultado = num1 + num2
            console.log('o resultado é ' + resultado)
        break;
        case'-':
            resultado = num1 - num2
            console.log('o resultado é ' + resultado)
        break;
        case'/':
        if (num2 == 0) {
            console.log('Divisão por zero')
        } else {
            resultado = num1 / num2
            console.log('o resultado é ' + resultado)
        }
        break;
        case'*':
            resultado = num2 * num2
            console.log('o resultado é ' + resultado)
        break;
        case'%':
            resultado = (num1 * num2)  / 100
            console.log(' o resultado é ' + resultado)
        break;  
        default:
            console.log('opção inválida')
        break;
    }
}else {
    console.log('opção inválida')
}