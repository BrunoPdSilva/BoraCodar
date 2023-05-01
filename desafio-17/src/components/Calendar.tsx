import { Dispatch, SetStateAction } from 'react';
import { WeekDays } from './WeekDays';
import { Months } from './Months';
import { Days } from './Days';
import dayjs from 'dayjs';

interface Props {
  today: dayjs.Dayjs;
  type: 'month' | 'year';
  setToday: Dispatch<SetStateAction<dayjs.Dayjs>>;
  setType: Dispatch<SetStateAction<'month' | 'year'>>;
  setDate: Dispatch<SetStateAction<string>>;
}

export function Calendar({ today, type, setToday, setType, setDate }: Props) {
  return (
    <div className="Calendar">
      {type === 'month' ? (
        <>
          <WeekDays />
          <Days today={today} setDate={setDate}/>
        </>
      ) : (
        <Months today={today} setToday={setToday} setType={setType} />
      )}
    </div>
  );
}
