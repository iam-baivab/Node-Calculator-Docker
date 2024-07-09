let display = document.getElementById('display');
let currentInput = '';

const clearDisplay = () => {
  currentInput = '';
  display.value = '';
};

const inputValue = (value) => {
  currentInput += value;
  display.value = currentInput;
};

const calculateResult = () => {
  try {
    currentInput = eval(currentInput);
    display.value = currentInput;
  } catch (error) {
    display.value = 'Error';
  }
};
