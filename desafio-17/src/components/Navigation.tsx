import { Dispatch, SetStateAction } from 'react';
import { months } from '../utils/calendarDB';
import dayjs from 'dayjs';

import { bottomButton, leftButton, rightButton } from '../assets/buttons';
import { NavButton } from './NavButton';

interface Props {
  today: dayjs.Dayjs;
  setToday: Dispatch<SetStateAction<dayjs.Dayjs>>;
  type: "month" | "year";
  setType: Dispatch<SetStateAction<"month" | "year">>;
}

export function Navigation({ today, setToday, type, setType }: Props) {
  const subtractMonth = () => today.month(today.month() - 1);
  const addMonth = () => today.month(today.month() + 1);
  const subtractYear = () => today.year(today.year() - 1);
  const addYear = () => today.year(today.year() + 1);

  function toggleType() {
    type === "month" ? setType("year") : setType("month");
  }

  return (
    <nav>
      <NavButton
        svg={leftButton}
        setToday={setToday}
        callback={type === "month" ? subtractMonth : subtractYear}
      />
      <button onClick={toggleType}>
        {type === "month" && months[today.month()]} {today.year()}
        {bottomButton}
      </button>
      <NavButton
        svg={rightButton}
        setToday={setToday}
        callback={type === "month" ? addMonth : addYear}
      />
    </nav>
  );
}
