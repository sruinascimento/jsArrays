const alunos = ['João', 'juliana', 'Caio', 'Ana']
const medias = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, medias]

const exibeNota = nomeDoAluno => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        var indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return listaDeNotasEAlunos[0][indice]+ ', sua média é ' +
        listaDeNotasEAlunos[1][indice];
    }
    return 'Aluno não cadastrado';
}
console.log(exibeNota('Ana'));

function exibeNota2(nomeDoAluno, listaDeNotasEAlunos){
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        const indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return listaDeNotasEAlunos[0][indice] + ', com média = '+
        listaDeNotasEAlunos[1][indice];
    }
    return 'Aluno não encontrado'
}

console.log(exibeNota2('Rui', listaDeNotasEAlunos));

//array.includes(param) retorna true ou false para caso o param exista dentro do array

