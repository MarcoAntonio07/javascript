
//Pegando elemento do HTML pelo seu ID e armazenando em variável
var txt = document.getElementById('texto');
//Exibindo conteúdo através do JS
txt.innerHTML="Meu primeiro texto de JS";

//-----------------------------------------

/* Declarando Variáveis: 
Var (aceita reatribuição de valor) - Pouco usada atualmente
let (não aceita reatribuição de valor)
const (o valor nunca muda)

var nome = "Marco"
var idade = 24
var sexo = "Masculino"

ou

//DECLARAR
var nome, idade, sexo

//ATRIBUIR
nome = "Marco"
idade = 24
seco = "masculino"



//OPERADOR TERNÁRIO

let idade = 16
let eleitor = (idade < 18) ? "Não pode votar!" : "Sim pode votar!"
console.log(eleitor)



//FUNÇÕES

1º opção
function soma(a, b) {
    return a + b
}
console.log(soma(102, 1151))

2º opção
function realParaDolar(real, cotacaoDolar) {
    return real * cotacaoDolar
}
let valorReal = 5.85
let cotacao = 6.12

let convertido = realParaDolar(valorReal, cotacao)
console.log(`O valor cotação é: ${convertido}`)


//OBJETOS

const carro = {
    marca: "ford",
    modelo: "Ka",
    ano: 2015,
    placa:"ABC-1234",

    buzina: function(){
        alert('Biiiiiiiiiiiiii')
    }
}

carro.buzina()
console.log(carro.marca)



//EVENTOS

let botao = document.getElementById('btn')
botao.addEventListener("click", clicar)

function clicar(){
    document.body.style.backgroundColor = "yellow"
}



//ARRAYS (MATRIZES)

1º Exemplo
//              0       1       2         3
let nomes = ["Marco", "Ana", "Julia", "Marcela"]
console.log(nomes[2]) //Julia

2º Exemplo
let produtos = ["celular", "notbook", "tv", "videogame"]
console.log(produtos[0]) //celular



//CONDICIONAIS

let n1 = 3
let n2 = 2

if (n1 < n2){
    console.log(`${n1} menor que ${n2}`)
}else{
    console.log(`${n2} menor que ${n1}`)
}



//Estrutura SWITCH

switch (expressao) {
    case a:
        //O que acontece
        break;
    case b:
        //O que acontece
        break;
    case c:
        //O que acontece
        break;
    default: //PADRÃO
        //O que acontece
}

//EXERCICIO
let nomes = "Marco"
let nome = capitalizeFirstLetter(nomes);

switch (nome) {
    case "Marcela":
        console.log(`Olá ${nome}`)
        break;
    case "Marco":
        console.log(`Olá ${nome}`)
        break;
    case "Julia":
        console.log(`Olá ${nome}`)
        break;
    default:
        console.log("Outro nome")
}



//LAÇO DE REPETIÇÃO (FOR)

for (let n1 = 1; n1 <= 50; n1++){
    console.log(n1)
}


// SETTIMEOUT E SETINTERVAL


//CLASSES
class Carro {
    constructor(valor1, valor2, valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
}

const uno = new Carro("Fiat", "Uno", 2001)
console.log(uno);
*/