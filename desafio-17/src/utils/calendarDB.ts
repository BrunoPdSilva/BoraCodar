import dayjs from 'dayjs';

export const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
export const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Septembro', 'Outubro', 'Novembro', 'Dezembro'];

export const generateDate = (month = dayjs().month(), year = dayjs().year()) => {
  // Obter a data do primeiro e do último dia do mês especificado
  const firstDateOfMonth = dayjs().year(year).month(month).startOf('month');
  const lastDateOfMonth = dayjs().year(year).month(month).endOf('month');

  // Criar um array de objetos representando cada dia do mês
  const daysOfMonth = [];

  // Adicionar os dias do mês anterior que aparecem no calendário como prefixo
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    daysOfMonth.push({
      date: firstDateOfMonth.day(i),
      currentMonth: false
    });
  }

  // Adicionar os dias do mês atual
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    const date = firstDateOfMonth.date(i);
    const isToday = date.toDate().toDateString() === dayjs().toDate().toDateString();
    daysOfMonth.push({
      date: date,
      currentMonth: true,
      today: isToday
    });
  }

  // Adicionar os dias do mês seguinte que aparecem no calendário como sufixo
  const remainingDays = 42 - daysOfMonth.length;
  for (let i = lastDateOfMonth.date() + 1; i <= lastDateOfMonth.date() + remainingDays; i++) {
    daysOfMonth.push({
      date: lastDateOfMonth.date(i),
      currentMonth: false
    });
  }

  return daysOfMonth;
};
