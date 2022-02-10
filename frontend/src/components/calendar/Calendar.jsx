/**
 * Be able to display Month and Days
 * 
 * inspiration: https://www.youtube.com/watch?v=5jRrVqRWqsM
 */

import React, { useEffect, useState } from 'react';
import { GET_EMPLOYEE_SCHEDULE } from '../../GraphQL/Queries';
import { useQuery } from '@apollo/client';
import { dayStyle, beforeToday } from './Functions';
import BuildCalendar from './BuildCalendar';
import CalenderHeader from './CalendarHeader';
import BookingLayout from './BookingLayout';
import Loader from '../loader/Loader';
const Calendar = ({ value, onChange, employeeData }) => {

  const { data, loading, error } = useQuery(GET_EMPLOYEE_SCHEDULE, {
    variables: {
      employee: employeeData.employeeID,
      service: employeeData.serviceID,
      date: value.format("YYYY-MM-DD")
    }
  });

  const [employeeSchedule, setEmployeeSchedule] = useState([]);
  const [calendar, setCalendar] = useState(null);
  const [clickedDate, setClickedDate] = useState(true);
  const [loader, setLoader] = useState(false)
  const clickedDay = (day) => {
    setLoader(true);
    setClickedDate(false);
    onChange(day)
    setClickedDate(true)
    setLoader(false)
  }

  useEffect(() => {
    //Send our calender from BuildCalender to our state calender
    setCalendar(BuildCalendar(value));
  }, [value])

  useEffect(() => {
    !loading && data !== null && data.workers.data.length !== 0 &&
      setEmployeeSchedule({
        eID: data.workers.data[0].id,
        name: data.workers.data[0].attributes.name,
        workhours: data.workers.data[0].attributes.workhours.data
      })
  }, [data])



  return (
    <div className='calendar'>
      <CalenderHeader value={value} onChange={onChange} />
      <div className="body">
        <div className='day-names'>
          {['M', 'T', 'O', 'T', 'F', 'L', 'S'].map((d, key) => <div key={key} className='week'>{d}</div>)}
        </div>
        {calendar !== null && calendar.map((week, key) =>
          <div key={key} className='week'>
            {
              week.map((day, key) =>
                <div key={key} className={!beforeToday(day) ? 'day' : 'old-day'} onClick={() => !beforeToday(day) && clickedDay(day)}>
                  <div className={dayStyle(day, value)}>
                    {day.format("D").toString()}
                  </div>
                </div>)
            }
          </div>
        )}
      </div>
      <div className='booking-buttons'>
        {!clickedDate && <Loader />}
        {
          clickedDate && !loader &&
          <BookingLayout employeeSchedule={employeeSchedule} date={value.format("YYYY-MM-DD")} />
        }
      </div>
    </div>

  );
};

export default Calendar;