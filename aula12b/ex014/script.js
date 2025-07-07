function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}h.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha1.png'
        document.body.style.background = '#BFB2A3'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde1.png'
        document.body.style.background = '#F28705'
    } else {
        img.src = 'imagens/noite1.png'
        document.body.style.background = '#0F2426'
    }
}

