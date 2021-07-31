const notas = [10, 6.5, 8, 7.5]
let media = 0;
for (let i=0; i<notas.length; i++){
    media += notas[i];
}
console.log(`forNormal -- Média = ${media/notas.length}`);

let somaMedias = 0;
for (let n of notas ) {
    somaMedias += n;
}

console.log(`forEach -- Média = ${somaMedias/notas.length}`);