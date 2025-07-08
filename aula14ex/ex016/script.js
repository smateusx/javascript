function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('ERRO! Digite um número!')
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (f == 0 || p == 0) {
            alert('ERRO! O campo não pode ser 0')
        } else {
            if (i<f) { //contagem crescente
                for (let c = i; c <= f; c += p) {
                    res.innerHTML += `${c} \u{1F603}`
                }
            } else { //contagem decrescente 
                for (let c = i; c >= f; c -= p) {
                    res.innerHTML += `${c} \u{1F603}`
                }
                res.innerHTML += `\u{1F3C1}`
            }
        }
    }
}