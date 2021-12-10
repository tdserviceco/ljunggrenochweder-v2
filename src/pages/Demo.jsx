import React, { useState } from 'react';
import CalenderDayScheme from '../components/booking/CalenderDayScheme';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
const Demo = () => {
  const [value, setValue] = useState(new Date());
  const [displayDay, toggleDisplayDay] = useState(false)

  function onChange(nextValue) {
    setValue(nextValue)
    toggleDisplayDay(true)
  }
  return (
    <section className='scheme'>
      <div className='container'>
        <Calendar
          onChange={onChange}
          value={value}
        />
        {displayDay &&
          <CalenderDayScheme schemeDate={value} />
        }
      </div>
    </section>
  );
};

export default Demo;