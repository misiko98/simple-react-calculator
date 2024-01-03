import './App.css';
import Buttons from './components/Buttons';

import InputDisplay from './components/InputDisplay';
const App = () => {
  /* prettier-ignore */
  const buttons = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '/', '=', 'C'];

  const operators = ['+', '-', '*', '/'];

  return (
    <div className="calculator">
      <InputDisplay />
      <Buttons items={buttons} operators={operators}/>
    </div>
  );
};

export default App;
