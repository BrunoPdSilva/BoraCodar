import { getClassNames, areDatesEqual, removeRepeatedDates } from '../utils/daysUtils';
import { Dispatch, SetStateAction, useState } from 'react';
import { generateDate } from '../utils/calendarData';
import dayjs from 'dayjs';

interface Props {
  today: dayjs.Dayjs;
  setDate: Dispatch<SetStateAction<string>>;
}

export function Days({ today, setDate }: Props) {
  const [selectedDates, setSelectedDates] = useState<dayjs.Dayjs[]>([]);

  const monthDays = generateDate(today.month(), today.year());

  function handleSelectDay(e: React.MouseEvent<HTMLLIElement>, clickedDate: dayjs.Dayjs) {
    const selectedDate = dayjs(e.currentTarget.getAttribute('date-date')).format('LL');

    const isDateSelected = selectedDates.some(date => areDatesEqual(date, clickedDate));

    if (isDateSelected){
      removeRepeatedDates(setSelectedDates, selectedDates, clickedDate)
    } else {
      setSelectedDates([...selectedDates, clickedDate.startOf('day')]);
    }

    selectedDate && setDate(selectedDate);
  }

  return (
    <ul className="days">
      {monthDays.map(({ date, currentMonth, today }, i) => {
        const isSelected = selectedDates.some(selectedDate => selectedDate.isSame(date, 'day'));
        const classNames = getClassNames({ date, currentMonth, today, isSelected, selectedDates,});

        return (
          <li key={i}
            className={classNames || undefined}
            onClick={e => handleSelectDay(e, date)}
            date-date={date.toDate().toDateString()}
          >
            {date.date()}
          </li>
        );
      })}
    </ul>
  );
}
