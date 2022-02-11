import React from 'react';
import List from './List';


const ListOfBookings = ({ lists }) => {

  return (
    <>
      {lists.map((list, key) => <List key={key} list={list} />)}
    </>
  );
};

export default ListOfBookings;