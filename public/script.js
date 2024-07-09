let display = document.getElementById('display');
let currentInput = '';

const clearDisplay = () => {
  currentInput = '';
  display.value = '0';
};

const inputValue = (value) => {
  if (value === '.' && currentInput.includes('.')) {
    return;
  }
  
  if (value === '+/-' && currentInput !== '') {
    if (currentInput.charAt(0) === '-') {
      currentInput = currentInput.slice(1);
    } else {
      currentInput = '-' + currentInput;
    }
    display.value = currentInput;
    return;
  }

  if (value === '%') {
    try {
      currentInput = eval(currentInput) / 100;
      display.value = currentInput;
    } catch (error) {
      display.value = 'Error';
    }
    return;
  }

  currentInput += value;
  display.value = currentInput;
};

const calculateResult = () => {
  try {
    const result = new Function('return ' + currentInput)();
    currentInput = result.toString();
    display.value = currentInput;
  } catch (error) {
    display.value = 'Error';
  }
};
