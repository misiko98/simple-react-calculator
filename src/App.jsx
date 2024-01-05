import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import InputDisplay from './components/InputDisplay';

const App = () => {
  const [currentDisplayValue, setcurrentDisplayValue] = useState('');
  const [currentOperator, setCurrentOperator] = useState('');

  /* prettier-ignore */
  const buttons = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '/', '=', 'C'];

  const operators = ['+', '-', '*', '/'];

  // output to screen
  const appendToDisplay = (value) => {
    setcurrentDisplayValue((prevValue) => prevValue + value);
  };

  const clearDisplay = () => {
    setcurrentDisplayValue('');
    setCurrentOperator('');
  };

  const addOperator = (operator) => {
    //guard clause
    if (currentDisplayValue === '') return;
    setCurrentOperator(operator);
    appendToDisplay(operator);
  };

  const calculate = () => {
    if (currentDisplayValue !== '' && currentOperator !== '') {
      const values = currentDisplayValue.split(currentOperator);

      // two operants at a time only
      if (values.length === 2) {
        const num1 = parseFloat(values[0]);
        const num2 = parseFloat(values[1]);
        let result;

        switch (currentOperator) {
          case '+':
            result = num1 + num2;
            break;
          case '-':
            result = num1 - num2;
            break;
          case '*':
            result = num1 * num2;
            break;
          case '/':
            if (num2 !== 0) {
              result = num1 / num2;
            } else {
              result = 'Error';
            }
            break;
          default:
            break;
        }

        setcurrentDisplayValue(result.toString());
        setCurrentOperator('');
      }
    }
  };

  const handleSelectBtn = (buttonContent) => {
    switch (buttonContent) {
      case '=':
        calculate();
        break;
      case 'C':
        clearDisplay();
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        addOperator(buttonContent);
        break;
      default:
        appendToDisplay(buttonContent);
        break;
    }
  };

  return (
    <div className="calculator">
      <InputDisplay displayValue={currentDisplayValue} />
      <Buttons
        items={buttons}
        operators={operators}
        onSelectBtn={handleSelectBtn}
      />
    </div>
  );
};

export default App;
