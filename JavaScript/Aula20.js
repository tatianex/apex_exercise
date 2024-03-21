let resposta = ''; 

while (resposta !== 'sim' && resposta !== 'não') { 
  resposta = prompt('Você gostaria de continuar? (sim/não)'); 

  if (resposta !== 'sim' && resposta !== 'não') {
    alert('Por favor, responda apenas com "sim" ou "não".'); 
  }
}

if (resposta === 'sim') {
  console.log('Continuando...'); 
} else {
  console.log('Encerrando...'); 
}