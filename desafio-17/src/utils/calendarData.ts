import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/pt-br';

dayjs.extend(localizedFormat);
dayjs.locale('pt-br');

export const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Septembro', 'Outubro', 'Novembro', 'Dezembro'];
export const monthPrefixes = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Sep', 'Out', 'Nov', 'Dez'];

export const generateDate = (month = dayjs().month(), year = dayjs().year()) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf('month');
  const lastDateOfMonth = dayjs().year(year).month(month).endOf('month');

  const daysOfMonth = [];

  // Adiciona dias do mês anterior até o primeiro dia do mês
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    daysOfMonth.push({ date: firstDateOfMonth.day(i), currentMonth: false });
  }

  // Adiciona dias do mês atual
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    const date = firstDateOfMonth.date(i);
    const isToday = date.toDate().toDateString() === dayjs().toDate().toDateString();
    daysOfMonth.push({ date: date, currentMonth: true, today: isToday });
  }

   // Adiciona dias do próximo mês até completar 42 dias
  const remainingDays = 42 - daysOfMonth.length;
  for (let i = lastDateOfMonth.date() + 1; i <= lastDateOfMonth.date() + remainingDays; i++) {
    daysOfMonth.push({ date: lastDateOfMonth.date(i), currentMonth: false });
  }

  return daysOfMonth;
};

export const generateMonths = (year = dayjs().year()) => {
  const currentMonth = dayjs().startOf("month").toDate().toDateString();
  const monthsOfTheYear = [];

  for (let i = 0; i < 12; i++) {
    const month = dayjs().year(year).month(i).startOf("month")
    const isCurrentMonth = currentMonth === month.toDate().toDateString()

    monthsOfTheYear.push({ month, isCurrentMonth });
  }

  return monthsOfTheYear
}