function calcular(){
  var idade = document.querySelector('input#nidade').value  
  var res = document.querySelector('div#res')
  if (idade < 16){
    res.innerHTML = `nao vota`
  }
  else if (idade < 18 || idade > 65){
    res.innerHTML = `voto opcional`
  }
  else{
    res.innerHTML = `voto obrigatorio`
  }
}












var idade =12
console.log(`voce tem ${idade} anos`)
if (idade < 16){
    console.log(`nao vota`)
}
else if (idade < 18 || idade > 65){
console.log(`voto opcional`)
}
else{
console.log(`voto obrigatorio`)
}