let idades = []
let somaIdades = 0
let quantAlunos = 0
do{
  idades.push(Number(prompt('Qual a sua idade? ')))
  somaIdades += idades[idades.length - 1]
  quantAlunos++
}while(somaIdades <= 99)

let media = somaIdades / quantAlunos
document.write(`<P>O total de alunos é de ${quantAlunos} e a média de idade da turma é de ${media.toFixed(2)}</P>`)

// 1. Faça um algoritmo que leia a idade de vários alunos de uma turma.
// O programa vai parar quando for digitada a idade 999. No final,
// mostre quantos alunos existem na turma e qual é a média de idade
// do grupo.