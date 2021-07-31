const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

//Método splice -- remova elementos de qual array e insira em qq lugar

console.log(listaDeChamada);
listaDeChamada.splice(1, 2, 'Rodrigo');
console.log(listaDeChamada);

//Método serve adicionar sem apagar 
listaDeChamada.splice(2, 0, 'Ploop');
console.log(listaDeChamada);

listaDeChamada.splice(2, 3)
console.log(listaDeChamada)