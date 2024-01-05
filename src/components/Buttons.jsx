import './Buttons.css';

const Buttons = ({ operators, items, onSelectBtn }) => {
  const getBtnId = (buttonContent) => {
    if (operators.includes(buttonContent)) return 'operator';
    if (buttonContent === 'C') return 'clear';
    if (buttonContent === '=') return 'calculate';
    return 'default';
  };

  const handleBtnClick = (e) => {
    onSelectBtn(e.target.value);
  };

  return (
    <ul className="buttons">
      {items.map((btnContent, index) => (
        <li key={index}>
          <button
            id={getBtnId(btnContent)}
            onClick={handleBtnClick}
            value={btnContent}
          >
            {btnContent}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Buttons;
