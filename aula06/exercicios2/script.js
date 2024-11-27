function Carregar() {
    // Obtém as referências aos elementos HTML com os IDs 'msg' e 'imagem'
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
  
    // Cria um objeto Date para obter a hora atual
    var data = new Date();
    // Obtém a hora atual em formato de 24 horas
    var hora = data.getHours();
  
    // Descomenta a linha abaixo para testar com uma hora específica (15 horas)
    // var hora = 15;
  
    // Atualiza o conteúdo do elemento com a hora atual
    msg.innerHTML = `Agora são ${hora} Horas`;
  
    // Verifica o horário e define a imagem e a cor de fundo correspondentes
    if (hora >= 0 && hora < 12) {
      // Manhã
      img.src = 'imagens/img-manha.png';
      document.body.style.backgroundColor = '#697397';
    } else if (hora >= 12 && hora < 18) {
      // Tarde
      img.src = 'imagens/img-tarde.png';
      document.body.style.backgroundColor = '#CF956D';
    } else {
      // Noite
      img.src = 'imagens/img-noite.png';
      document.body.style.backgroundColor = '#F30A35';
    }
  }


