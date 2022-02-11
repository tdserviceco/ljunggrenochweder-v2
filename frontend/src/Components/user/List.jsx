import React from 'react';
import { Icon } from '@iconify/react';

const List = ({ list }) => {
  return (
    <>
      <div className='info'>
        <h2>{list.attributes.date}</h2>
        <h3>{list.attributes.worker.data.attributes.name}: {list.attributes.time}</h3>
      </div>
      <div className='remove-booking-button'>
        <button type="button" value={list.id} onClick={(event) => removeThisBooking(event)}><Icon icon="bytesize:close" /></button>
      </div>
    </>
  );
};

export default List;