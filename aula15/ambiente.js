let num = [5, 8, 9, 3, 14]
//num[5] = 95

num.push(3) //colocar na última posição do vetor
num.sort() //organizar o vetor
console.log(`nosso vetor é o ${num}`)
console.log(`nosso vetor tem ${num.length} posições`)
console.log(`o primeiro vetor é o ${num[0]}`)

/*for (let c=0; c<num.length; c++) {
    console.log(`Esse é o valor do vetor ${c}, ${num[c]}`)
}*/

for (let c in num) { //forma simplificada para mostrar os vetores
    console.log(`O valor do vetor ${c} é ${num[c]}`)
}

console.log(num) //mostrar o vetor

num.indexOf(7) //pesquisar o valor no vetor

let pos = num.indexOf(5)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`${pos}`)
}
