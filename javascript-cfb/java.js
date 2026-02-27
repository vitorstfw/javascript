const numInput = document.getElementById("numInput");
const resultDiv = document.getElementById("result");

function checkEven() {
    const num = parseInt(numInput.value);
    if (numInput === 8) {
        console.log("O número é par");
    } else{
        console.log("O número é ímpar");
    }
    resultDiv.innerHTML = `O número ${num} é ${num % 2 === 0 ? "par" : "ímpar"}`;
};