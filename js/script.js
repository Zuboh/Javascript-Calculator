const output = document.querySelector(".output");

let number = "0";
let operatore;
let numero;
let memoria;

function displayNumber(num) {
  if (parseFloat(number) === 0) {
    number = num;
  } else {
    number += num;
  }
  output.innerHTML = number;
}

function addDecimal() {
  if (number.length === 0) {
    number = "0.";
  } else if (!number.includes(".")) {
    number += ".";
  }
  output.innerHTML = number;
}

function displayOperatore(opera) {
  output.innerHTML = opera;
  memoria = number;
  operatore = opera;
  number = "";
}

function calcolatrice() {
  switch (operatore) {
    case "+":
      numero = parseFloat(memoria) + parseFloat(number);
      break;
    case "-":
      numero = parseFloat(memoria) - parseFloat(number);
      break;
    case "/":
      numero = parseFloat(memoria) / parseFloat(number);
      break;
    case "*":
      numero = parseFloat(memoria) * parseFloat(number);
      break;
    default:
      break;
  }

  output.innerHTML = numero;
}

function outputClear() {
  numero = 0;
  number = "0";
  operatore = "";
  memoria = "0";
  output.innerHTML = number;
}
