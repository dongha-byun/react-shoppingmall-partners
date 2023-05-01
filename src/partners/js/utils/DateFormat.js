import format from "date-fns/format";

export const aMonthTime = 30 * 24 * 60 * 60 * 1000;

export function toDateFormat(date, formatStr) {
    return format(date, formatStr);
}