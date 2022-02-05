/**
 * Be able to display Month and Days
 * 
 * inspiration: https://www.youtube.com/watch?v=5jRrVqRWqsM
 */

import React, { useEffect, useState } from 'react';
import moment from 'moment';
import BuildCalendar from './BuildCalendar';
import MapSchedule from '../schedule/MapSchedule';
const Calender = ({ workHours }) => {
  const [value, setValue] = useState(moment());
  const [calendar, setCalendar] = useState([]);
  const [clickedDate, setClickedDate] = useState(false);
  //Check if same day is selected
  const isSelected = (day) => {
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

  const dayStyle = (day) => {
    if (beforeToday(day)) return "before"
    if (isSelected(day)) return "selected"
    if (isToday(day)) return "today"
  }

  const currentMonthName = () => {
    return value.format("MMMM");
  }

  const currentYear = () => {
    return value.format("YYYY")
  }

  const previousMonth = () => {
    return value.clone().subtract(1, "month");
  }

  const nextMonth = () => {
    return value.clone().add(1, "month");
  }

  const clickedDay = (day) => {
    setClickedDate(true);
    setValue(day)
  }

  useEffect(() => {
    //Send our calender from BuildCalender to our state calender
    setCalendar(BuildCalendar(value));
  }, [value])

  return (
    <div className='calendar'>
      <div className='year-and-month-container'>
        <button type="button" className="previous" onClick={() => setValue(previousMonth())}>{String.fromCharCode(171)}</button>
        <h2 className='current'>{currentMonthName()} {currentYear()}</h2>
        <button type="button" className="next" onClick={() => setValue(nextMonth())}>{String.fromCharCode(187)}</button>
      </div>
      <div className='day-names'>
        {['M', 'T', 'O', 'T', 'F', 'L', 'S'].map((d, key) => <div key={key} className='week'>{d}</div>)}
      </div>
      {calendar.map((week, key) =>
        <div key={key} className='week'>
          {
            week.map((day, key) =>
              <div key={key} className='day' onClick={() => clickedDay(day)}>
                <div className={dayStyle(day)}>
                  {day.format("D").toString()}
                </div>
              </div>)
          }
        </div>
      )
      }
      {clickedDate && <MapSchedule date={value.format("YYYY-MM-DD")} workHours={workHours} />}
    </div >
  );
};

export default Calender;