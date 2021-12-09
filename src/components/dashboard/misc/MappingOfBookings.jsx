import React from 'react';

const MappingOfBookings = ({ bookings }) => {
  const mapOutBookings = () => {
    console.log(bookings)
  }
  return (
    <>
      {mapOutBookings()}
      <button type="button">Klart</button>
    </>
  );
};

export default MappingOfBookings;