var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora}h.`)
if (hora >= 5 && hora < 12) {
    console.log('Manhã')
} else if (hora >= 12 && hora < 19) {
    console.log ('Tarde')
} else if ((hora >= 19 && hora <= 24) || (hora >= 0 && hora < 5)) {
    console.log('Noite')
}