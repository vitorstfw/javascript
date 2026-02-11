function nome(){
    let nome = document.querySelector('#nome').value

    let res = document.querySelector('#res')

    res.innerHTML = `Olá ${nome}, seja bem-vindo!`
}