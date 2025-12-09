function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.querySelector("input#txtano")
  var res = document.querySelector("div#res")

  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("[ERRO] verifique os dados e tente novamente!")

  }else{
    var fsex = document.getElementsByName("radsex")
    var idade = ano -Number(fano.value)
var gênero = ''

var img = document.createElement('img')
img.setAttribute('id', 'foto')

if (fsex[0].checked){
  gênero = 'Homem'
  if (idade >= 0 && idade < 12){
    img.setAttribute('src', 'foto-bebe-m.png')
     //Criança
  }else if (idade < 18){
    img.setAttribute('src', 'foto-adole-m.png')
    //adolescente
  } else if (idade < 30){
    img.setAttribute('src', 'foto-jovem-m.png')
    //jovem
  } else if (idade < 59){
    img.setAttribute('src', 'foto-adulto-m.png')
    //adulto
  } else if (idade >= 60){
    img.setAttribute('src', 'foto-idoso-m.png')
    //idoso
  }

}else if (fsex[1].checked){
  gênero = 'Mulher'
  if (idade >= 0 && idade < 12){
    img.setAttribute('src', 'foto-bebe-f.png')
     //Criança
  }else if (idade < 18){
    img.setAttribute('src', 'foto-adole-f.png')
    //adolescente
  } else if (idade < 30){
    img.setAttribute('src', 'foto-jovem-f.png')
    //jovem
  } else if (idade < 59){
    img.setAttribute('src', 'foto-adulto-f.png')
    //adulto
  } else if (idade >= 60){
    img.setAttribute('src', 'foto-idoso-f.png')
    //idoso
  }
}
res.style.textAlign = 'center'
res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
res.appendChild(img)
  }
}