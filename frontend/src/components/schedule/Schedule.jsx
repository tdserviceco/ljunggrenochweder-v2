import React, { useState } from 'react';
import MapSchedule from './MapSchedule';
import Calendar from 'react-calendar'

const Schedule = ({ workHours }) => {

  const [value, onChange] = useState(new Date());
  const [displayDay, setDisplayDay] = useState(false);
  const display = () => {
    setDisplayDay(false);
    setDisplayDay(true);
  }

  /* const day = document.querySelector('.react-calendar .react-calendar__viewContainer') */

  return (
    <>
      
      <Calendar
        value={value}
        onChange={onChange}
        showWeekNumbers
        view={'month'}
        onClickDay={display}
      />
      
      {displayDay &&
        <MapSchedule date={ value.toLocaleDateString().slice(0,10) } workHours={ workHours } />
      }
    </>
  );
};

export default Schedule;