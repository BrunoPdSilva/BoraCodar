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

export function areDatesEqual(a: date, b: date) {
  return a.isSame(b, "date") && a.isSame(b, "month") && a.isSame(b, "year");
}

export function removeRepeatedDates(setSelectedDates: dispatch, selectedDates: date[], clickedDate: date) {
  setSelectedDates(selectedDates.filter(date => !date.isSame(clickedDate)))
}

export function getClassNames(props: getClassProps) {
  const { today, currentMonth, isSelected, date, selectedDates } = props;

  let classes = "";

  if (today) { classes+= "today" }
  if (!currentMonth) { classes += " disabled" }
  if (isSelected) { classes+= " selected" }
  if (selectedDates.length > 0 && date.isSame(selectedDates[0], 'day')) { classes += " first"; }
  if (selectedDates.length > 0 && date.isSame(selectedDates[selectedDates.length - 1], 'day')) { classes += " last" }

  return classes.trim();
}