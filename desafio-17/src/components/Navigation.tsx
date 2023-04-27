import { useState } from 'react';
import dayjs from 'dayjs';
import { generateDate, months } from '../utils/calendar';

import { bottomButton, leftButton, rightButton } from '../assets/buttons';
import { NavButton } from './NavButton';

export function Navigation() {
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);

  
  return (
    <nav>
      <NavButton svg={leftButton} />
      <button>{months[today.month()]}, {today.year()}{bottomButton}</button>
      <NavButton svg={rightButton} />
    </nav>
  );
}
