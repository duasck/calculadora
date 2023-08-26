let atual = "0";
let valorA = "0";
let valorB = "0";
let operador = "";


var buttons = document.querySelectorAll('.button');



function updateValor() {
    const element = document.querySelector('#visor');
    const operacao = document.querySelector('#operacao');
    element.innerHTML = atual;
    console.log(atual);
    let ope = "";
    ope = (valorA != '0') ? valorA : '';
    ope += (operador != '') ? operador : '';
    ope += (valorB != '0') ? valorB : '';
    operacao.innerHTML = ope;
}

function clickButton(element) {
    let pressionado = element.firstElementChild.innerHTML;
    switch (pressionado) {
        case "+":
            setOperator(pressionado);
            break;
        case "-":
            setOperator(pressionado);
            break;
        case "x":
            setOperator(pressionado);
            break;
        case "÷":
            setOperator(pressionado);
            break;
        case "%":
            setOperator(pressionado);
            break;
        case "=":
            calculate();
            break;
        case ".":
            addToDisplay(pressionado);
            break;
        case "⌫":
            apagar();
            break;
        case "C":
            resetAll();
            break;
        default:
            addToDisplay(pressionado);
    }

}


function resetAll() {
    valorA = "0";
    valorB = "0";
    operador = "";
    atual = "0";
    updateValor();
}


function apagar() {
    atual = (atual.length < 2) ? '0' : atual.substring(0, atual.length - 1);
    updateValor();
}

updateValor();


function addToDisplay(valor) {
    if (atual.length < 14) {
        if (((atual == "") || (atual == '0')) && ((valor == '0') || (valor == '00'))) {
            atual = '0';
            updateValor();
            return 0;
        } else if (atual == '0') {
            if (valor != '.') {
                atual = "" + valor;
                updateValor();
                return 0;
            }
        }

        atual += valor; // add the value to the display
        updateValor();
    }
}

function clearDisplay() {
    atual = "0"; // clear the display
    updateValor();
}

function setOperator(value) {
    operador = value; // set the operator
    if(atual != '0'){
      valorA = atual; // store the first number
    }
    clearDisplay(); // clear the display for the second number
}

function calculate() {
    valorB = atual; // store the second number

    // convert the numbers from string to float
    let num1 = parseFloat(valorA);
    let num2 = parseFloat(valorB);

    let result;

    // perform the calculation based on the operator
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
    }

    atual = result.toString(); // convert the result to string and update the display
    if(atual == 'NaN'){
      atual = "0";
    }
    updateValor();
}

