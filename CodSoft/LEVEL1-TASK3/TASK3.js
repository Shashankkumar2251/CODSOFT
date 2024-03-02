let displayValue = '0';
let operator = '';
let firstOperand = null;
let awaitingSecondOperand = false;

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function appendToDisplay(number) {
  if (displayValue === '0' || awaitingSecondOperand) {
    displayValue = number.toString();
    awaitingSecondOperand = false;
  } else {
    displayValue += number.toString();
  }
  updateDisplay();
}

function setOperator(op) {
  if (operator !== '' && !awaitingSecondOperand) {
    calculate();
  }
  operator = op;
  firstOperand = parseFloat(displayValue);
  awaitingSecondOperand = true;
}

function calculate() {
  if (awaitingSecondOperand) {
    return;
  }
  const secondOperand = parseFloat(displayValue);
  let result = 0;
  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      if (secondOperand === 0) {
        result = 'Error';
      } else {
        result = firstOperand / secondOperand;
      }
      break;
  }
  displayValue = result.toString();
  operator = '';
  firstOperand = result;
  awaitingSecondOperand = false;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  operator = '';
  firstOperand = null;
  awaitingSecondOperand = false;
  updateDisplay();
}

updateDisplay();
