import { Dispatch, SetStateAction } from 'react';
import { WeekDays } from './WeekDays';
import { Months } from './Months';
import { Days } from './Days';
import dayjs from 'dayjs';

interface Props {
  today: dayjs.Dayjs;
  type: 'month' | 'year';
  date: string;
  setToday: Dispatch<SetStateAction<dayjs.Dayjs>>;
  setType: Dispatch<SetStateAction<'month' | 'year'>>;
  setDate: Dispatch<SetStateAction<string>>;
}

export function Calendar({ today, type, date, setToday, setType, setDate }: Props) {
  return (
    <div className="Calendar">
      {type === 'month' ? (
        <>
          <WeekDays />
          <Days today={today} date={date} setDate={setDate}/>
        </>
      ) : (
        <Months today={today} setToday={setToday} setType={setType} />
      )}
    </div>
  );
}
