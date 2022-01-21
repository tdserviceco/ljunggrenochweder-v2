import React from 'react';
import { useSelector } from 'react-redux';

const DisplayServices = () => {
  const services = useSelector(state => state.services);
  // console.log("service: ", services)
  return (
    <>
      {services !== null && services.map((s, key) => <option key={key} value={s.id}>{s.attributes.service}  - {s.attributes.time}min</option>)}
    </>
  );
};

export default DisplayServices;