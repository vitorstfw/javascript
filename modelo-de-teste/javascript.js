const number = 100
console.log(number)

/* Void */ 
function digameunome (){
    console.log(`João vitor`)
}

digameunome()

/* Parâmetros*/ 

function digaQualquerNome (nome){

    console.log(nome)
}
digaQualquerNome("paulo")


function soma (numero1, numero2){
    const resultado = numero1 * numero2

    console.log(resultado)
}
soma(2,15)
soma(23,38)
soma(2,3)

/*Return*/

function soma (numero1, numero2){
    const resultado = numero1 + numero2

    return resultado
}

const resultadoDaSoma = soma(30, 40)
console.log(resultadoDaSoma)

function estaEndividado (receita, gastos){
    if(receita > gastos){
        return 'Esta no Azul'
    }
    else{
        return ' Esta no Vermelho'
    }
}

const maria = estaEndividado(5000, 7000)
const joao = estaEndividado(8000, 5000)

console.log(maria)
console.log(joao)

/* Arrow function (função flecha)*/

function casa(){} //forma clássica de uma function

//forma moderna de uma function
const digameunome2 = (nome1, nome2, nome3) => { 
    console.log("vitor")
}

digameunome2()