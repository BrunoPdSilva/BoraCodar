import { handlePress, handleRelease } from '../utils/press';
import { getClasses } from '../utils/getClasses';
import { calcValues } from '../utils/values';

interface Props {
  addValue: (value: string) => void;
  clearValues: () => void;
  calculateResult: () => void;
}

export function Buttons({ addValue, clearValues, calculateResult }: Props) {
  function getFunction(type: string) {
    switch (type) {
      case 'CE':
      case 'C':
        clearValues();
        break;
      case '=':
        calculateResult();
        break;
      case ',':
        addValue('.');
        break;
      default:
        addValue(type);
        break;
    }
  }

  return (
    <section>
      {calcValues.map((item, i) => (
        <button
          key={i}
          className={getClasses(item)}
          onMouseDown={e => handlePress(e)}
          onMouseUp={e => handleRelease(e)}
          onClick={() => getFunction(item.value)}
        >
          {item.icon || item.value}
        </button>
      ))}
    </section>
  );
}
