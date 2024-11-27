var idade = 24; // Declara uma variável chamada 'idade' e atribui o valor 24 (anos)

console.log(`Você tem ${idade} anos.`); // Exibe no console a mensagem "Você tem 24 anos."
// O símbolo $ dentro de uma template string (``) permite inserir o valor da variável 'idade' diretamente na string.

if (idade < 16) { // Verifica se a idade é menor que 16 anos
    console.log('Não vota'); // Se a condição for verdadeira, imprime a mensagem "Não vota"
} else if (idade < 18 || idade > 65) { // Verifica se a idade é menor que 18 ou maior que 65 anos
    console.log('Voto opcional'); // Se a condição for verdadeira, imprime a mensagem "Voto opcional"
} else { // Se nenhuma das condições anteriores for verdadeira
    console.log('Voto obrigatório'); // Imprime a mensagem "Voto obrigatório"
}