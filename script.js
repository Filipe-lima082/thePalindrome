// VARIAVEL LET = let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada.
//VARIAVEL CONST = A palavra-chave const é uma abreviação de constante. É um qualificador de variáveis que modifica o comportamento da variável, fazendo com que a variável seja de "apenas-leitura". Isso significa que a variável pode ser usada como qualquer outra variável de seu tipo, mas seu valor não pode ser mudado.

const button = document.getElementById('btn-form') //Seleciona o botão de enviar "localiza"
const input = document.getElementById('input') // Seleciona o campo de entrada (input)
let regex = /[^a-z0-9]/gi // variavel que recebe uma expressao regular (avançado) para remover caracteres, numeros, etc. Usamos ela no inputValue

function handleClick(event){ // declara a função com nome handleClick. esse event é as propriedades do botão, com isso conseguimos acessar as propriedades dele dentro da função.
    event.preventDefault() // Previne o envio padrão do botão para o servidor
    let inputValue = input.value.replace(/ /g, "").replace(regex, "").toLowerCase() // cria variavel para receber o valor do input e tira todos os espaços e caracteres.
    let fraseOrigin = input.value

    if(inputValue == ''){ // verifica se o input tá vazio, se sim, mostra um alerta pedindo para inserir uma frase
        alert('Por favor, insira uma frase') // mostra o alerta
        return null // retornar nada, já que o input tá vazio
    }

    const fraseReverse = inputValue.split('').reverse().join('') // Inverte a palavra digitada

    if(inputValue === fraseReverse){ // Compara as duas palavras a original e a invertdida, se for verdadeiro mostra o alerta
        alert(`${fraseOrigin} e um palindromo!`) // se for verdadeiro, mostra esse alerta
    } else { // se for falso, mostra esse alerta
        alert(`A palavra ${fraseOrigin} não é um palindromo`)
    }
}

button.addEventListener('click', handleClick) // botão com função de click. Ao clique ele ativa a função. Entre aspas está o tipo de funcão que é o evento click, ao lado está a função que será ativada, que é a declarada lá no ínicio.