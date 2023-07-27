const distanciaPercorrer = parseFloat(prompt('Qual a distância que você deseja percorrer? '));

  if(distanciaPercorrer <= 200){
    let TAXA = 0.50;
    const valorTotal = distanciaPercorrer * TAXA;
    document.write(`Foi cobrada uma TAXA por cada Km percorrido de R$${TAXA.toFixed(2)}. Você percorreu ${distanciaPercorrer}Km, portanto, o valor total de sua viagem é de R$${valorTotal.toFixed(2)}.`);
  } else {
    let TAXA = 0.45;
    const valorTotal = distanciaPercorrer * TAXA;
    document.write(`Foi cobrada uma TAXA por cada Km percorrido de R$${TAXA.toFixed(2)}. Você percorreu ${distanciaPercorrer}Km, portanto, o valor total de sua viagem é de R$${valorTotal.toFixed(2)}.`);
  }

// 5. Faça um algoritmo que pergunte a distância que um passageiro
// deseja percorrer em Km. Calcule o preço da passagem, cobrando
// R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
// longas.