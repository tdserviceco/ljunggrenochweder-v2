import React, { useEffect, useState } from 'react';
import { REGISTER_BOOKED_HOUR } from '../../GraphQL/Mutations';
import { useMutation } from '@apollo/client';
const BookingHour = ({ id, hour, employee }) => {
  const [bookHour, { data, loading, error }] = useMutation(REGISTER_BOOKED_HOUR);
  const [hide, setHide] = useState(false);

  const bookThisHour = (e) => {
    bookHour({
      variables: {
        time: e.target.value,
        booked: true,
        worker: employee
      }
    })
    console.log("END??")
  }

  useEffect(() => {
    if (data !== undefined) {
      // data.data.booked ? setHide(true) : setHide(false)
      alert('Booked')
    }
  }, [data])

  return (
    <button
      style={{ display: `${hide ? 'none' : 'inline'}` }}
      value={hour}
      className={`booking-${id + 1}`}
      type='button'
      onClick={bookThisHour}>
      {hour}
    </button>
  );
};

export default BookingHour;