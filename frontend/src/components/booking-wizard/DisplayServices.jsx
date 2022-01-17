import React from 'react';
import { useSelector } from 'react-redux';

const DisplayServices = () => {

  const services = useSelector(state => state.services);
  console.log('HÄR',services)
  
  return (
    <>{services !== null && services.category.data.attributes.services.data.map((s, key) => <option key={key} value={s.id}>{s.attributes.service}</option>)}</>
  );
};

export default DisplayServices;