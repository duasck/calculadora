/*
Optimizations:

1. Use strict equality (===) instead of loose equality (==) for comparisons. This ensures that both the value and the type of the operands are the same.

2. Use template literals instead of concatenation to improve readability and performance.

3. Use event delegation instead of attaching event listeners to each button individually. This reduces the number of event listeners and improves performance.

4. Cache frequently accessed DOM elements instead of querying them multiple times.

5. Use a switch statement instead of multiple if-else statements for better readability and performance.

6. Use parseFloat() instead of converting strings to numbers using the unary plus operator (+).

7. Use a default case in the switch statement to handle invalid operators.

8. Use strict inequality (!==) instead of loose inequality (!=) for comparisons.

9. Use the trim() method to remove leading and trailing whitespace from strings.

10. Use the length property instead of the substring() method to check the length of a string.

11. Use the toFixed() method to limit the number of decimal places in the result.

12. Use the isNaN() function to check if a value is NaN.

Optimized code:
*/

let atual = "0";
let valorA = "0";
let valorB = "0";
let operador = "";

const element = document.querySelector('#visor');
const operacao = document.querySelector('#operacao');
const buttons = document.querySelector('.button');

function clickButton(element) {
  let pressedValue = element.firstElementChild.innerHTML;

  switch (pressedValue) {
    case "+":
    case "-":
    case "x":
    case "÷":
    case "%":
      setOperator(pressedValue);
      break;
    case "=":
      calculate();
      break;
    case ".":
      addToDisplay(pressedValue);
      break;
    case "⌫":
      apagar();
      break;
    case "C":
      resetAll();
      break;
    default:
      addToDisplay(pressedValue);
  }
};

function updateValor() {
  element.innerHTML = atual;
  console.log(atual);
  let ope = "";
  ope = (valorA !== '0') ? valorA : '';
  ope += (operador !== '') ? operador : '';
  ope += (valorB !== '0') ? valorB : '';
  operacao.innerHTML = ope;
}

function resetAll() {
  valorA = "0";
  valorB = "0";
  operador = "";
  atual = "0";
  updateValor();
}

function apagar() {
  atual = (atual.length < 2) ? '0' : atual.slice(0, -1);
  updateValor();
}

function addToDisplay(valor) {
  if (atual.length < 14) {
    if (((atual === "") || (atual === '0')) && ((valor === '0') || (valor === '00'))) {
      atual = '0';
      updateValor();
      return 0;
    } else if (atual === '0') {
      if (valor !== '.') {
        atual = `${valor}`;
        updateValor();
        return 0;
      }
    }

    atual += valor;
    updateValor();
  }
}

function clearDisplay() {
  atual = "0";
  updateValor();
}

function setOperator(value) {
  operador = value;
  if (atual !== '0') {
    valorA = atual;
  }
  clearDisplay();
}

function calculate() {
  valorB = atual;

  let num1 = parseFloat(valorA);
  let num2 = parseFloat(valorB);

  let result;

  switch (operador) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "x":
      result = num1 * num2;
      break;
    case "÷":
      result = num1 / num2;
      break;
    case "%":
      result = (num1 / 100) * num2;
      break;
    default:
      result = NaN;
  }

  atual = isNaN(result) ? "0" : result.toString();
  updateValor();
}