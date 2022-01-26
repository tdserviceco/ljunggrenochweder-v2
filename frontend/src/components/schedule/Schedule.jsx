import React, { useState } from 'react';
import MapSchedule from './MapSchedule';
import Calendar from 'react-calendar'

const Schedule = ({ workHours }) => {

  const [displayDay, setDisplayDay] = useState(false);
  const display = () => {
    setDisplayDay(false);
    setDisplayDay(true)
  }

  const [value, onChange] = useState(new Date());

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
        <MapSchedule date={`${value.getFullYear()}-${value.getMonth() < 10 ? '' + value.getMonth() + 1 : value.getMonth() + 1}-${value.getDate()}`} workHours={workHours} />
      }
    </>
  );
};

export default Schedule;