import React from 'react';
import { useSelector } from 'react-redux';

const DisplayServices = () => {
  const services = useSelector(state => state.services);
  if (services !== null) {
    console.log("New category choosen then why not new Services to that category!")
  }
  return (
    <>
      {services !== null && services.map((s, key) => <option key={key} value={s.id}>{s.attributes.service}  - {s.attributes.time}min</option>)}
    </>
  );
};

export default DisplayServices;