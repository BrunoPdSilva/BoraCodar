import { getClassNames, areDatesEqual, removeRepeatedDates } from '../utils/daysUtils';
import { generateDate } from '../utils/calendarDB';
import { useState } from 'react';
import dayjs from 'dayjs';

interface Props { today: dayjs.Dayjs }

export function Days({ today }: Props) {
  const [selectedDates, setSelectedDates] = useState<dayjs.Dayjs[]>([]);

  function handleSelectDay(clickedDate: dayjs.Dayjs) {
    const isDateSelected = selectedDates.some(date => areDatesEqual(date, clickedDate));

    isDateSelected ? 
      removeRepeatedDates(setSelectedDates, selectedDates, clickedDate) : 
      setSelectedDates([...selectedDates, clickedDate.startOf('day')]);
  }

  return (
    <ul className="days">
      {generateDate(today.month(), today.year()).map(
        ({ date, currentMonth, today }, i) => {
          const isSelected = selectedDates.some(selectedDate => selectedDate.isSame(date, 'day'));
          const classNames = getClassNames({today, currentMonth, isSelected, date, selectedDates});

          return (
            <li
              key={i}
              className={classNames || undefined}
              onClick={() => handleSelectDay(date)}
            >
              {date.date()}
            </li>
          );
        }
      )}
    </ul>
  );
}
