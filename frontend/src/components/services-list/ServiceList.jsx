import React, { useState, useEffect } from 'react';
import { GET_ALL_SERVICES } from '../../GraphQL/Queries';
import { useQuery } from '@apollo/client';
import { PriceList } from '..';
const ServiceList = () => {
  const allServices = useQuery(GET_ALL_SERVICES);
  const [services, setServices] = useState(null);
  useEffect(() => {
    if (allServices.error) return console.log(allServices.error)
    !allServices.loading && setServices(allServices.data.services.data)
  }, [allServices.data])

  return (
    <section className='services'>
      {services !== null &&
        <PriceList allServices={services} />
      }
    </section>
  );
};

export default ServiceList;