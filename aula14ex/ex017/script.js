function calcular() {
    let num = document.getElementById('num')
    let tabuada = document.getElementById('tabuada')
    if (num.value.length == 0){
        alert('Digite um número!')
    } else {
        let n = Number(num.value)
        tabuada.innerHTML = ''
        for (let c=1; c<=10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tabuada${c}`
            tabuada.appendChild(item)
        }
    }


}