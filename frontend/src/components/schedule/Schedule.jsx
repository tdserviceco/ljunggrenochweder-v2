import React, { useEffect, useState } from 'react';
import MapSchedule from './MapSchedule';
import Calendar from 'react-calendar'
import { useSelector } from 'react-redux';
const Schedule = () => {
  const [value, onChange] = useState(new Date());
  const [displayDay, setDisplayDay] = useState(false);
  const display = () => {
    setDisplayDay(true);
  }

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
        <MapSchedule date={value.toLocaleDateString().slice(0, 10)} />
      }
    </>
  );
};

export default Schedule;