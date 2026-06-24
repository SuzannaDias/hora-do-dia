function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 13
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background =' #e2cd9f'
        
    
} else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.png'
                document.body.style.background = '#e37c06 '

    } else {
        img.src = 'fotonoite.png'
                document.body.style.background = '#1c1832 '

    }
}
