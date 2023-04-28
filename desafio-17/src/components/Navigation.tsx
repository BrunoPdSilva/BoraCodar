import { Dispatch, SetStateAction } from 'react';
import { months } from '../utils/calendarDB';
import dayjs from 'dayjs';

import { bottomButton, leftButton, rightButton } from '../assets/buttons';
import { NavButton } from './NavButton';

interface Props {
  today: dayjs.Dayjs;
  setToday: Dispatch<SetStateAction<dayjs.Dayjs>>;
}

export function Navigation({ today, setToday }: Props) {
  return (
    <nav>
      <NavButton
        svg={leftButton}
        setToday={setToday}
        action="minus"
        today={today}
      />
      <button>
        {months[today.month()]} {today.year()}
        {bottomButton}
      </button>
      <NavButton
        svg={rightButton}
        setToday={setToday}
        action="plus"
        today={today}
      />
    </nav>
  );
}
