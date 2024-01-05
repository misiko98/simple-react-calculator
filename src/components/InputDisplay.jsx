import './InputDisplay.css';

const InputDisplay = ({ displayValue }) => {
  return <input type="text" value={displayValue} disabled />;
};

export default InputDisplay;
