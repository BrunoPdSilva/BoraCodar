import { handlePress, handleRelease } from '../utils/press';
import { getClasses } from '../utils/getClasses';
import { calcValues } from '../utils/values';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  setValues: SetStateAction<Dispatch<[string]>>
}

export function Buttons({ setValues }: Props) {
  return (
    <section>
      {calcValues.map((item, i) => (
        <button
          className={getClasses(item)}
          onMouseDown={e => handlePress(e)}
          onMouseUp={e => handleRelease(e)}
          // onClick={() => setValues(prev => [...prev, item,value])}
          key={i}
        >
          {item.value}
        </button>
      ))}
    </section>
  );
}
