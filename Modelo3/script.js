function verificar() {
  // Obtém a data atual
  var data = new Date()
  // Obtém o ano atual a partir da data
  var ano = data.getFullYear()
  // Obtém a referência ao elemento de entrada para o ano de nascimento
  var fano = document.getElementById('txtano')
  // Obtém a referência ao elemento onde a imagem será inserida
  var res = document.getElementById('res')

  // Verifica se o campo de ano está vazio ou se o ano informado é maior que o ano atual
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    // Exibe uma mensagem de erro caso a condição seja verdadeira
    alert('[Erro] verifique os dados e tente novamente!')
  } else {
    // Obtém os elementos de rádio para selecionar o sexo
    var fsex = document.getElementsByName('radsex')
    // Calcula a idade com base no ano atual e no ano de nascimento
    var idade = ano - Number(fano.value)
    // Inicializa a variável gênero como uma string vazia
    var gênero = ''
    // Cria um novo elemento de imagem
    var img = document.createElement('img')
    // Define o atributo id da imagem
    img.setAttribute('id', 'foto')

    // Verifica se o sexo masculino foi selecionado
    if (fsex[0].checked) {
      // Define o gênero como "Homem"
      gênero = 'Homem'
      // Verifica a faixa etária e define a imagem correspondente
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'imagens/crianca-menino.png')
      } else if (idade < 21) {
        img.setAttribute('src', 'imagens/jovem-menino.png')
      } else if (idade < 50) {
        img.setAttribute('src', 'imagens/adulto-homem.png')
      } else {
        img.setAttribute('src', 'imagens/idoso-homem.png')
      }
    } else if (fsex[1].checked) {
      // Define o gênero como "Mulher"
      gênero = 'Mulher'
      // Verifica a faixa etária e define a imagem correspondente
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'imagens/crianca-menina.png')
      } else if (idade < 21) {
        img.setAttribute('src', 'imagens/jovem-mulher.png')
      } else if (idade < 50) {
        img.setAttribute('src', 'imagens/adulto-mulher.png')
      } else {
        img.setAttribute('src', 'src', 'imagens/idoso-mulher.png')
      }
    }

    // Adiciona a imagem criada ao elemento com o id "res"
    res.appendChild(img)
  }
}


