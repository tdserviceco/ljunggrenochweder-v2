import React, { useEffect, useLayoutEffect, useState } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { REGISTER_BOOKED_HOUR } from '../../GraphQL/Mutations';
import { GET_BOOKED } from '../../GraphQL/Queries';

const BookingHour = ({ id, hour, employee, date }) => {
  const [bookHour, { data, error, loading }] = useMutation(REGISTER_BOOKED_HOUR, { errorPolicy: 'all' });
  const workerTime = useQuery(GET_BOOKED, {
    variables: {
      id: employee,
      time: hour,
      booked: true,
      date: date
    }
  })

  const [hide, setHide] = useState('available')
  const hideButton = (e) => {
    bookHour({
      variables: {
        time: e.target.value,
        booked: true,
        wID: employee,
        date: date
      }
    })
    let isHide = e.target.className;
    if (isHide === 'available') {
      setHide('booked')
    }
    return isHide;
  }

  useLayoutEffect(() => {
    if (error) return alert("Sorry... this is already booked.. its a bug.. we are fixing this as you reading this");

  }, [data])

  useLayoutEffect(() => {
    if (workerTime.error) return console.log("error: ", workerTime.error);
    if (!workerTime.loading && workerTime.data.bookings.data.length !== 0) {
      console.log(workerTime.data.bookings.data[0].attributes.booked)
      return setHide('booked');
    }
  }, [workerTime.data, hide, data])



  return (
    <button
      value={hour}
      id={`booking-${id + 1}`}
      className={`${hide}`}
      type='button'
      onClick={(e) => hideButton(e)}>
      {hour}
    </button>
  );
};

export default BookingHour;