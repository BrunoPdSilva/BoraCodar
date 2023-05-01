import { Dispatch, SetStateAction } from 'react';
import dayjs from 'dayjs';

interface Props {
  svg: JSX.Element;
  setToday: Dispatch<SetStateAction<dayjs.Dayjs>>;
  callback: () => dayjs.Dayjs;
}

export function NavButton({ svg, setToday, callback }: Props) {
  return (
    <button type="button" onClick={() => setToday(callback())}>
      {svg}
    </button>
  );
}
