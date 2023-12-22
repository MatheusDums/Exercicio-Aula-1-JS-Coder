let soma = 0;
let contador = 0;

for (;;) {
  // (;;) = utilizo como um loop infinito para receber valores até que o usuário insira "sair"
  let input = prompt("Insira um valor (ou 'sair' para encerrar):");

  if (input.toLowerCase() === 'sair') {
    break;
  }

  let valor = parseFloat(input);

  if (!isNaN(valor)) {
    soma += valor;
    contador++;

    let media = soma / contador;

    alert(`Soma: ${soma}   ///   Média: ${media}`);
  } else {
    console.log("insira um valor numérico válido.");
  }
}