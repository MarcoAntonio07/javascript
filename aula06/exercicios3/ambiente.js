
var contagem = 1; //Variável

//Primeira Estrutura
// Laço de repetição (Com teste lógico no início)
while (contagem <= 10) {
    console.log(`Contando ${contagem}`);
    contagem++
}

//Segunda Estrutura
//Laço de repetição (Com teste lógico no final)
do {
    console.log(`Contando ${contagem}`);
    contagem++
}while (contagem <= 10) 

//Terceira Estrutura
//laço de repetição com variável de controle
for (contagem;contagem <= 10;contagem++) { //  inicialização + Teste lógico + incremento
    console.log(`Contando ${contagem}`)
}

