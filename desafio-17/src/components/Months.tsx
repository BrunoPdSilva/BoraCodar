import { Dispatch, SetStateAction } from 'react';
import { generateMonths, monthPrefixes } from '../utils/calendarData';
import dayjs from 'dayjs';

interface Props {
  today: dayjs.Dayjs;
  setToday: Dispatch<SetStateAction<dayjs.Dayjs>>;
  setType: Dispatch<SetStateAction<'month' | 'year'>>;
}

export function Months({ today, setToday, setType }: Props) {
  const months = generateMonths(today.year());

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const selectedDate = e.currentTarget.getAttribute('date-date');
    const month = dayjs(selectedDate, 'ddd MMM DD YYYY').month();

    setToday(today.month(month));
    setType('month');
  };

  return (
    <ul className="months">
      {months.map(({ month, isCurrentMonth }, i) => (
        <li key={i}
          date-date={month.toDate().toDateString()}
          className={isCurrentMonth ? 'today' : ''}
          onClick={e => handleClick(e)}
        >
          {monthPrefixes[i]}
        </li>
      ))}
    </ul>
  );
}
