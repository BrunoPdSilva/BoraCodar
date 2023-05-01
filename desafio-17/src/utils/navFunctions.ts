import dayjs from "dayjs";

export const subtractMonth = (today: dayjs.Dayjs) => today.month(today.month() - 1);
export const addMonth = (today: dayjs.Dayjs) => today.month(today.month() + 1);
export const subtractYear = (today: dayjs.Dayjs) => today.year(today.year() - 1);
export const addYear = (today: dayjs.Dayjs) => today.year(today.year() + 1);