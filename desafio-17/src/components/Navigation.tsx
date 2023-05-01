import { Dispatch, SetStateAction } from 'react';
import { months } from '../utils/calendarData';
import dayjs from 'dayjs';

import { bottomButton, leftButton, rightButton } from '../assets/buttons';
import { NavButton } from './NavButton';

interface Props {
  today: dayjs.Dayjs;
  type: 'month' | 'year';
  setToday: Dispatch<SetStateAction<dayjs.Dayjs>>;
  setType: Dispatch<SetStateAction<'month' | 'year'>>;
}

export function Navigation({ today, setToday, type, setType }: Props) {
  const subtractMonth = () => setToday(today.subtract(1, 'month'));
  const addMonth = () => setToday(today.add(1, 'month'));
  const subtractYear = () => setToday(today.subtract(1, 'year'));
  const addYear = () => setToday(today.add(1, 'year'));

  const toggleType = () => setType(type === 'month' ? 'year' : 'month');

  return (
    <nav>
      <NavButton svg={leftButton} callback={type === 'month' ? subtractMonth : subtractYear} />
      <button onClick={toggleType}>
        {type === 'month' && months[today.month()]} {today.year()}
        {type === 'month' && bottomButton}
      </button>
      <NavButton svg={rightButton} callback={type === 'month' ? addMonth : addYear} />
    </nav>
  );
}
