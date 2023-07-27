const largura = parseInt(prompt('Qual a largura do terreno? '))
const comprimento = parseInt(prompt('E seu comprimento? '))
const areaTerreno = largura * comprimento
document.write(`A área do terreno é de ${areaTerreno}m2.`)
  if(areaTerreno < 100){
    document.write('<p>TERRENO POPULAR!</p>')
  } else if(areaTerreno >= 100 || areaTerreno <= 500){
    document.write('<p>TERRENO MASTER</p>!')
  }else{
    document.write('<p>TERRENO VIP</p>!')
  }

// 6. Faça um programa que leia a largura e o comprimento de um
// terreno retangular, calculando e mostrando a sua área em m2. O
// programa também deve mostrar a classificação desse terreno, de
// acordo com a lista abaixo:
// Abaixo de 100m2 = TERRENO POPULAR
// Entre 100m2 e 500m2 = TERRENO MASTER
// Acima de 500m2 = TERRENO VIP