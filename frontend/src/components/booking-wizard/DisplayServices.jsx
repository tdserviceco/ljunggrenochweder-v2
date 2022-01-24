import React from 'react';
import { useSelector } from 'react-redux';

const DisplayServices = () => {
  const services = useSelector(state => state.services);
  // console.log("service: ", services)
  return (
    <>
      {services !== null && services.map((service, key) => <option key={key} value={service.id}>{service.attributes.name}</option>)}
    </>
  );
};

export default DisplayServices;