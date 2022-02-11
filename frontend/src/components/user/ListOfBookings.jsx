import React from 'react';
import List from './List';


const ListOfBookings = ({ lists }) => {

  return (
    <div className='remove-this-booking'>
      {lists.map((list, key) => <List key={key} list={list} />)}
    </div>
  );
};

export default ListOfBookings;