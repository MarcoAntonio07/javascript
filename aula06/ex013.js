var hora = 13; //Variavel
var tempo = hora == 1 ? ('Hora') : ('Horas'); //Variavel // usando Operador Ternário
console.log(`Agora são ${hora} ${tempo}.`); //frase com interpolação de variaveis

if (hora >= 6 && hora <=12) { //se
    console.log('Bom dia!')
}else if (hora >=13 && hora <= 18){ //se não / se
    console.log('Boa tarde!')
}else if(hora >= 19 && hora <=23){ //se não / se
    console.log('Boa noite!')
}else{ //se naõ
    console.log('Boa Madrugada')
}