import { weekDays } from '../utils/calendarDB';

export function WeekDays() {
  return (
    <ul className="weekDays">
      {weekDays.map((day, i) => (
        <li key={i}>{day}</li>
      ))}
    </ul>
  );
}
