let salarioMasculino = 0
let salarioFeminino = 0
let sexoMasculino = 0
let sexoFeminino = 0
do{
  let escolha = prompt('Qual o sexo do funcionário?\nM(masculino) e\nF(feminino): ')
    if(escolha == 'M' || escolha == 'm'){
      salarioMasculino += parseFloat(prompt('Qual o seu salário atual?'))
      sexoMasculino++
    } else{
      salarioFeminino += parseFloat(prompt('Qual o seu salário atual?'))
      sexoFeminino++
    }
}while(confirm('Deseja continuar: '))

document.write(`<P>O total de salários PAGOS AOS HOMENS é de: ${salarioMasculino.toFixed(2)}. De um total de ${sexoMasculino} funcionários.</P>`)
document.write(`<P>O total de salários PAGOS ÀS MULHERES é de: ${salarioFeminino.toFixed(2)}. De um total de ${sexoFeminino} funcionárias.</P>`)

// 2. Desenvolva um aplicativo que leia o salário e o sexo de vários
// funcionários. No final, mostre o total de salários pagos aos homens e
// o total pago às mulheres. O programa vai perguntar ao usuário se
// ele quer continuar ou não sempre que ler os dados de um
// funcionário.