

function Carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 15
    msg.innerHTML = `Agora são ${hora} Horas`
    if(hora >= 0 && hora < 12) {
        img.src = 'imagens/img-manha.png';
        document.body.style.backgroundColor = '#697397';
    }else if (hora >= 12 && hora < 18){
        img.src = 'imagens/img-tarde.png'
        document.body.style.backgroundColor ='#CF956D'
    }else{
        img.src = 'imagens/img-noite.png'
        document.body.style.backgroundColor = '#F30A35'
    }


}


