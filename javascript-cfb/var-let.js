"use strict";

if (true) {
var nome = "João";
}
console.log(nome); // A variavel nome está definida no escopo global

/*
if (true) {
let sobrenome = "vitor";
}
console.log(sobrenome); // Erro: sobrenome não está definido fora do escopo do if


function teste() {
    
    if (true) {
        let idade = 30;
console.log("dentro do bloco if: " + idade); // A variável idade está acessível dentro do bloco if
    }
console.log("fora do bloco if: " + idade); // A variável idade está acessível dentro da função teste
}
teste();

console.log("idade fora da função: " + idade); // Erro: idade não está definida fora da função teste
*/

//DIFERENÇA ENTRE VAR E LET

const curso = "JavaScript";

console.log(curso); // JavaScript

//curso = "Python"; // Erro: Assignment to constant variable. "curso" é uma constante e não pode ser reatribuída