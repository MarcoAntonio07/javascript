function enviar() {
    // Obtém os elementos de entrada do formulário
    var n1 = document.getElementById('primeiro-input'); // Obtém o primeiro input
    var n2 = document.getElementById('segundo-input'); // Obtém o segundo input
    var n3 = document.getElementById('terceiro-input'); // Obtém o terceiro input
  
    // Converte os valores dos inputs para números
    var inicial = Number(n1.value); // Valor inicial da sequência
    var final = Number(n2.value); // Valor final da sequência
    var passando = Number(n3.value); // Incremento a cada passo
  
    // Obtém o elemento onde o resultado será exibido
    var res = document.getElementById('resposta');
  
    // Loop que gera a sequência de números
    while (inicial <= final) {
      // Adiciona o número atual à string de resultado
      res.innerHTML += ` ${inicial} `; // Concatena o número atual ao conteúdo existente
  
      // Incrementa o valor inicial
      inicial += passando;
    }
  }
