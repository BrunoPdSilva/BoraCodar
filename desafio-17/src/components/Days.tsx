import { generateDate } from '../utils/calendarDB';
import dayjs from 'dayjs';

interface Props {
  today: dayjs.Dayjs;
}

export function Days({ today }: Props) {
  return (
    <ul className="days">
      {generateDate(today.month(), today.year()).map(
        ({ date, currentMonth, today }, i) => {
          return (
            <li
              key={i}
              className={`${today ? 'today' : ''}${
                currentMonth ? '' : 'disabled'
              }`}
            >
              {date.date()}
            </li>
          );
        }
      )}
    </ul>
  );
}
