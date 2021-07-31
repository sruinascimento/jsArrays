const notas = [6.5, 10, 8,  7.5];
let somaNotas = 0;

notas.forEach(nota => {
    somaNotas += nota;
});

console.log(`Média = ${somaNotas/notas.length}`);
