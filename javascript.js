let numero1  = parseInt(prompt('Insira um número inteiro '))
let sinal = prompt('Escolha a operação que deseja efetuar com esses números (+, -, * ou /) ')
let numero2  = parseInt(prompt('Insira outro número inteiro '))

if (sinal === "+") {alert(`O resultado é ${numero1 + numero2}`)
}
else if (sinal === "-") {alert(`O resultado é ${numero1 - numero2}`)
}
else if (sinal === "*") {alert(`O resultado é ${numero1 * numero2}`)
} 
else if (sinal === "/") {alert(`O resultado é ${numero1 / numero2}`)
}