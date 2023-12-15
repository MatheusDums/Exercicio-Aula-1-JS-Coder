function calcularIMC() {
  var peso = document.getElementById('peso').value;
  var altura = document.getElementById('altura').value;

  if (peso === '' || altura === '') {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  var imc = peso / (altura * altura);
  var resultado = document.getElementById('resultado');
  resultado.innerHTML = 'Seu IMC é: ' + imc.toFixed(2);
}

