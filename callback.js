const nomes = ['Rui', 'Nara', 'Louis', 'Misha', 'Princesa', 'Justin', 'Toni'];

//nomes.forEach( nome => {console.log(nome)} );

//for each é uma função callback: função que receb uma função como parâmentro. 

function imprimeNome(nome) {
    console.log(nome);
}

nomes.forEach(imprimeNome); //passa somento o nome da função