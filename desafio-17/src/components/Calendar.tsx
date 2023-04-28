import dayjs from 'dayjs';

import { WeekDays } from './WeekDays';
import { Days } from './Days';

interface Props {
  today: dayjs.Dayjs;
}

export function Calendar({ today }: Props) {
  return (
    <div className="Calendar">
      <WeekDays />
      <Days today={today} />
    </div>
  );
}
