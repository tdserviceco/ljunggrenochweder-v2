import React, { useEffect, useState } from 'react';
import BookingHour from './BookingHour';
const Markup = ({ start, end, employee, date }) => {
  const [hours, setHours] = useState([])
  let startHour = Number(start.replace(':00', ''));
  let endHour = Number(end.replace(':00', ''));
  const time = endHour - startHour;

  let timeArray = [];

  const loop = () => {
    let hourPass;
    for (let i = 0; i < time; i++) {
      hourPass = startHour + i + " - " + (startHour + i + 1);
      timeArray.push(hourPass);
    }
    setHours(timeArray)
  }

  useEffect(() => {
    loop()
  }, [])

  return (
    <>
      <h4>{start} - {end}</h4>
      {hours.length !== 0 && hours.map((hour, key) => <BookingHour key={key} employee={employee} date={date} id={key} hour={hour} />)}
    </>
  );
};

export default Markup;