function contar(){
var N1 = Number(document.getElementById('Num').value)
var N2 = Number(document.getElementById('Num2').value)
var res = document.getElementById('res')

var soma = N1 + N2

res.innerHTML = `resultado:${soma}`
}



