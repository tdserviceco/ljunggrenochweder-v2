//Check if same day is selected
const isSelected = (day, value) => {
  return value.isSame(day, "day");
}

//Give older days from current day a non-clickable state
const beforeToday = (day) => {
  return day.isBefore(new Date(), "day");
}

//Check if same day is same as what new Date gives out
const isToday = (day) => {
  return day.isSame(new Date(), "day");
}

//Give out className based on what day it is
const dayStyle = (day, value) => {
  if (beforeToday(day)) return "before"
  if (isSelected(day, value)) return "selected"
  if (isToday(day)) return "today"
}

const currentMonthName = (value) => {
  return value.format("MMMM");
}

const thisMonth = (value) => {
  return value.isSame(new Date(), "month")
}

const currentYear = (value) => {
  return value.format("YYYY")
}

const previousMonth = (value) => {
  return value.clone().subtract(1, "month");
}

const nextMonth = (value) => {
  return value.clone().add(1, "month");
}

export { dayStyle, thisMonth, beforeToday, currentYear, previousMonth, nextMonth, currentMonthName }