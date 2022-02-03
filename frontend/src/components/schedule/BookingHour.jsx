import React, { useEffect, useState } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { REGISTER_BOOKED_HOUR } from '../../GraphQL/Mutations';
import { GET_BOOKED } from '../../GraphQL/Queries';
import { useSelector } from 'react-redux';

const BookingHour = ({ id, hour, employee, date }) => {
  const [bookHour, { data, error, loading }] = useMutation(REGISTER_BOOKED_HOUR);
  const workerTime = useQuery(GET_BOOKED, {
    variables: {
      id: employee,
      time: hour,
      booked: true,
      date: date
    }
  })

  const [hide, setHide] = useState(false);

  const bookThisHour = (e) => {
    bookHour({
      variables: {
        time: e.target.value,
        booked: true,
        wID: employee,
        date: date
      }
    })
    setHide(true)
  }

  useEffect(() => {
    if (workerTime.error) {
      return console.log(workerTime.error);
    }
    else if (!workerTime.loading && workerTime.data !== null && workerTime.data.bookings.data.length !== 0) {
      if (workerTime.data.bookings.data[0].attributes.time === hour) {
        setHide(true)

      }
    }
  }, [workerTime.data])

  useEffect(() => {
    if (data !== undefined) {
      alert('Booked')
    }
  }, [data])

  return (
    <>
      {!hide &&
        <button
          value={hour}
          className={`booking-${id + 1}`}
          type='button'
          onClick={bookThisHour}>
          {hour}
        </button>
      }
    </>

  );
};

export default BookingHour;