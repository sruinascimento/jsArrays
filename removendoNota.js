const notas = [10, 7, 6, 8]
console.log(`Notas = ${notas}`)
notas.pop() //Removendo o último elemento
console.log(`Notas = ${notas}`)

let media = (notas[0] + notas[1] + notas[2]) / notas.length
console.log(`Media = ${media}`)


//O que acontece se eu declarar um array vazio

const array = []
console.log(typeof(array))
console.log(array)
console.log(array.length)

const array2 = [, , , ,]
console.log(array2.length)
console.log(array2)
array2.shift(1)
console.log(array2)
array2.push(50)
console.log(array2)

jantarDeHoje = ['Hambúrguer', 'Hot dog', 'pizza']
jantarDeHoje.pop()
jantarDeHoje.pop()

jantarDeHoje.push('Ovo frito')
jantarDeHoje.push('Salada')
jantarDeHoje.push('Maçã verde')
