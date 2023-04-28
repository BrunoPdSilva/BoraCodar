import { Dispatch, SetStateAction } from 'react';
import dayjs from 'dayjs';

interface Props {
  svg: JSX.Element;
  today: dayjs.Dayjs;
  setToday: Dispatch<SetStateAction<dayjs.Dayjs>>;
  action: string;
}

export function NavButton({ svg, setToday, action, today }: Props) {
  const subtractMonth = () => setToday(today.month(today.month() - 1));
  const addMonth = () => setToday(today.month(today.month() + 1));

  return (
    <button
      type="button"
      onClick={action === 'minus' ? () => subtractMonth() : () => addMonth()}
    >
      {svg}
    </button>
  );
}
