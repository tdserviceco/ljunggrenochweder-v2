import React from 'react';
import MappingOfBookings from './misc/MappingOfBookings';
const Worker = () => {

  return (
    <div className="list-of-stuff">
      Arbetare
      <ul>
        Bokning (1)
        <MappingOfBookings bookings={'bookings'} />
      </ul>
    </div>
  );
};

export default Worker;