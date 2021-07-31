const nomes = ['Rui', 'nara', 'Louis', 'misha', 'LANE'];
const nomesAtualizados = nomes.map(nome => nome.toUpperCase());
//Função para deixar todas letras maiúsculas
//string.toUpperCase()
console.log(nomesAtualizados);

const numbers = [1, 2, 4, 5];
numbers.forEach(n => console.log(n*10));
const numbersAtt = numbers.map(n => n*10);
console.log(numbersAtt);