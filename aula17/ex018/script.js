let num = document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valor = []

function isNumber(n) {
    if ((Number(n) >= 1 && Number(n) <= 100)) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumber(num.value) && !inList(num.value, valor)) {//vai adicionar se for numero e se não tiver na lista
        valor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        alert('Valor inválido ou já encontrado na lista!')
    }

    num.value = ''
    num.focus()
}

function finalizar() {
    if(valor.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = valor.length
        let maior = valor[0]
        let menor = valor[0]
        let soma = 0
        let media = 0
        for( let pos in valor) {
            soma += valor[pos]
            if (valor[pos] > maior) {
                maior = valor[pos]
            }
            if (valor[pos] < menor) {
                menor = valor[pos]
            }
        }
        
        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados. </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior} </p>`
        res.innerHTML += `<p> O menor valor foi o ${menor} </p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma} </p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media} </p>`
    }
}