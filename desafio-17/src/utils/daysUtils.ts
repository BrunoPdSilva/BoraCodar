import { Dispatch, SetStateAction } from "react";
import dayjs from "dayjs";

type date = dayjs.Dayjs;
type dispatch = Dispatch<SetStateAction<date[]>>

interface getClassProps {
  today: boolean | undefined, 
  currentMonth: boolean, 
  isSelected: boolean, 
  date: date
  selectedDates: date[]
}

export const areDatesEqual = (a: date, b: date) => a.isSame(b, "date") && a.isSame(b, "month") && a.isSame(b, "year");

export function removeRepeatedDates(setDates: dispatch, dates: date[], clickedDate: date) {
  setDates(dates.filter(date => !date.isSame(clickedDate)))
}

export function getClassNames(props: getClassProps) {
  const { today, currentMonth, isSelected, date, selectedDates } = props;

  let classes = "";

  if (today) classes += "today";

  if (!currentMonth) classes += " disabled";

  if (isSelected) classes += " selected";

  if (selectedDates.length > 1 && date.isSame(selectedDates[0], 'day')) classes += " first"; 

  if (selectedDates.length > 1 && date.isSame(selectedDates[selectedDates.length - 1], 'day')) classes += " last";

  return classes.trim();
}