import React, { useEffect, useState } from 'react';
import BookingHour from './BookingHour';
const Markup = ({ start, end, employee }) => {
  const [hours, setHours] = useState([])
  let startHour = Number(start.replace(':00', ''));
  let endHour = Number(end.replace(':00', ''));
  const time = endHour - startHour;

  // console.log("End: ", Number(end.replace(':00', '')))
  // console.log("Start: ", Number(start.replace(':00', '')))

  let array = [];

  const loop = () => {
    let hourPass;
    for (let i = 0; i < time; i++) {
      hourPass = startHour + i + " - " + (startHour + i + 1);
      array.push(hourPass);
    }
    setHours(array)
  }

  useEffect(() => {
    loop()
  }, [])

  //En till useEffect för Mutation

  return (
    <>
      <h4>{start}</h4>
      <h4>{end}</h4>
      <div className='schedule-container'>
        {hours.length !== 0 && hours.map((hour, key) => <BookingHour key={key} employee={employee} id={key} hour={hour} />)}
      </div>
    </>
  );
};

export default Markup;