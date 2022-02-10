import React from 'react';
import BookingButton from './Bookingbutton';

const Buttons = ({ times, date, eID }) => {

  return (
    <>
      {times.length !== 0 &&
        times.map((time, key) => {
          return <BookingButton key={key} eID={eID} date={date} time={time} />
        })}
    </>
  );
};

export default Buttons;