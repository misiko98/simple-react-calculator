import './Buttons.css';

const Buttons = ({ items, operators }) => {
  const getButtonClassName = (buttonContent) => {
    let className;
    if (operators.includes(buttonContent)) className = 'operator';
    if (buttonContent === 'C') className = 'clear';
    if (buttonContent === '=') className = 'calculate';

    return className;
  };

  return (
    <ul className="buttons">
      {items.map((item) => (
        <li key="item">
          <button className={getButtonClassName(item)}>{item}</button>
        </li>
      ))}
    </ul>
  );
};

export default Buttons;
