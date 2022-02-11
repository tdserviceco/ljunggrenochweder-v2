import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { IS_BOOKED } from '../../GraphQL/Queries';
import { REGISTER_BOOKED_HOUR } from '../../GraphQL/Mutations';
import { useCookies } from 'react-cookie';

const Bookingbutton = ({ time, date, eID }) => {
  const [hide, setHide] = useState(false);
  const [bookHour, { data, error, loading }] = useMutation(REGISTER_BOOKED_HOUR, { errorPolicy: 'all' });
  const [isbooked, setIsbooked] = useState(false);
  const [cookies] = useCookies('userProfile');
  const isBookedQuery = useQuery(IS_BOOKED, {
    variables: {
      id: eID,
      time: time,
      booked: true,
      date: date,

    }
  })

  const BookThisTime = (event) => {
    bookHour({
      variables: {
        eID: eID,
        uID: cookies.userProfile.id,
        time: event,
        booked: true,
        date: date
      }
    })
  }


  useEffect(() => {
    if (error) return alert("Tiden är redan taget");
    if (data === undefined) { return }
    else {
      // console.log('3')
      setHide(false)
      alert("Bokat");
    }
  }, [data])

  // useEffect(() => {
  //   console.log("date with 2")
  // }, [date, data, isBookedQuery.data])

  useLayoutEffect(() => {
    // console.log('1')
    !isBookedQuery.loading && isBookedQuery.data !== null && isBookedQuery.data.bookings.data.length !== 0 ? setHide(false) : setHide(true)
    // !isBookedQuery.loading && isBookedQuery.data !== null && isBookedQuery.data.bookings.data.length !== 0 && console.log("isBookedQuery: ", isBookedQuery.data)
  }, [isBookedQuery.data])

  return (
    <>
      {hide && <button type="button" value={time} onClick={(event) => BookThisTime(event.target.value)}>{time}</button>}
    </>)
};

export default Bookingbutton;