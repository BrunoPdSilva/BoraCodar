const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

export function WeekDays() {
  return (
    <ul className="weekDays">
      {weekDays.map(day => <li key={day}>{day}</li>)}
    </ul>
  );
}
