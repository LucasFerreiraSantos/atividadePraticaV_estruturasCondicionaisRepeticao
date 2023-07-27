const valorInicial = parseInt(prompt('Digite o valor inicial da contagem: '))
const valorFinal = parseInt(prompt('Digite o valor final da contagem: '))
const incremento = parseInt(prompt('Digite o valor do incremento: '))

  if(valorInicial == '' || valorInicial < 0){
    alert('Valor inicial deve ser um número inteiro positivo.')
  } else if (valorFinal <= valorInicial){
    alert('O valor final deve ser superior ao valor inicial.')
  } else if (incremento > valorFinal){
    alert('O valor de incremento não pode ser superior ao valor final.')
  }

for(let i = valorInicial; i <= valorFinal; i+=incremento){
  document.write(`${i}, `)
}
document.write(`<p>ACABOU!!!</p>`)

// 3. Crie um algoritmo que leia o valor inicial da contagem, o valor final e
// o incremento, mostrando em seguida todos os valores no intervalo:
// Ex:
// Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!