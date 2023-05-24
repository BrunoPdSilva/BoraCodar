import { handlePress, handleRelease } from '../utils/buttonPress';
import { calculatorValues } from '../utils/calculatorValues';
import { getClasses } from '../utils/getClasses';

interface Props {
  addValue: (value: string) => void;
  clearValues: () => void;
  calculateResult: () => void;
  percent: () => void;
  negate: () => void;
}

export function Buttons(props: Props) {
  function getButtonOperation(type: string) {
    switch (type) {
      case 'CE':
      case 'C':
        props.clearValues();
        break;
      case '=':
        props.calculateResult();
        break;
      case '%':
        props.percent();
        break;
      case '+/-':
        props.negate();
        break;
      case ',':
        props.addValue('.');
        break;
      default:
        props.addValue(type);
        break;
    }
  }

  return (
    <section>
      {calculatorValues.map((item, i) => (
        <button
          key={i}
          className={getClasses(item)}
          onMouseDown={e => handlePress(e)}
          onMouseUp={e => handleRelease(e)}
          onClick={() => getButtonOperation(item.value)}
        >
          {item.icon || item.value}
        </button>
      ))}
    </section>
  );
}
