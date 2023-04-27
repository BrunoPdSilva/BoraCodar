import { generateDate, weekDays } from '../utils/calendar';

export function Calendar() {
  console.log(generateDate());

  return (
    <div className="Calendar">
      <ul className="weekDays">
        {weekDays.map((day, index) => <li key={index}>{day}</li>)}
      </ul>

      <ul className="days">
        {generateDate().map(({ date, currentMonth, today }, index) => {
          return (
              <li key={index} className={`${today && "today"} ${!currentMonth && "disabled"}`}>
                {date.date()}
              </li>
            );
        })}
      </ul>
    </div>
  );
}
