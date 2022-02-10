import React, { useEffect, useState } from 'react';
import BookingHour from './BookingHour';
import Hours from './Hours';
const Markup = ({ start, end, employee, date }) => {
  const [workHour, setWorkHours] = useState([]);

  useEffect(() => {
    setWorkHours(Hours(start, end))
  }, [start, end])


  return (
    <>
      <h4>{start} - {end}</h4>
      {workHour.length !== 0 && workHour.map((hour, key) =>
        <BookingHour key={key} employee={employee} date={date} id={key} hour={hour} />)
      }
    </>
  );
};

export default Markup;