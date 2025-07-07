function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('ERRO! Verifique os campos e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var gênero = ''
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >=0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebeo.png')
            } else if (idade >= 10 && idade <= 21) {
                img.setAttribute('src', 'imagens/jovemo.png')
            } else if (idade >= 22 && idade < 60) {
                img.setAttribute('src', 'imagens/homem.png')
            } else if (idade >= 60) {
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else {
            gênero = 'Mulher'
            if(idade >=0 && idade < 10) {
                img.setAttribute('src', 'imagens/a.png')
            } else if (idade >= 10 && idade <= 21) {
                img.setAttribute('src', 'imagens/jovema.png')
            } else if (idade >= 22 && idade < 60) {
                img.setAttribute('src', 'imagens/mulher.png')
            } else if (idade >= 60) {
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        
        //res.innerHTML = `Sua idade é: ${idade} e você é ${gênero}!`

        res.style.textAlign = 'center'
        
        img.style.display = 'block'
        img.style.margin = 'auto'

        res.innerHTML = `Sua idade é: ${idade} e você é ${gênero}!`
        res.appendChild(img)

        
    }
}