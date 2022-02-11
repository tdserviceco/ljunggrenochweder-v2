import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import { DELETE_BOOKING } from '../../GraphQL/Mutations';
import { useMutation } from '@apollo/client';

const List = ({ list }) => {

  const [removeBookingEvent, { data, loading, error }] = useMutation(DELETE_BOOKING);

  const removeThisBooking = (event) => {
    removeBookingEvent({
      variables: {
        bookingID: event
      }
    })
  }

  useEffect(() => {
    if(error) return console.log(error.message)
    if(data === null) return
    !loading && data !== null && /* alert('Bokning borta'); */ console.log('done')
  }, [data])

  return (
    <div className='remove-this-booking'>
      <div className='info'>
        <h2>{list.attributes.date}</h2>
        <h3>{list.attributes.worker.data.attributes.name}: {list.attributes.time}</h3>
      </div>
      <div className='remove-booking-button'>
        <button type="button" value={list.id} onClick={(event) => removeThisBooking(event.target.value)}><Icon icon="bytesize:close" /></button>
      </div>
    </div>
  );
};

export default List;