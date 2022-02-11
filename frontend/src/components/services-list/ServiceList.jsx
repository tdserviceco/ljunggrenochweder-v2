import React, { useState, useEffect } from 'react';
import { GET_ALL_SERVICES } from '../../GraphQL/Queries';
import { useQuery } from '@apollo/client';
import PriceList from './PriceList';
const ServiceList = () => {
  const { data, error, loading } = useQuery(GET_ALL_SERVICES);
  const [services, setServices] = useState(null);

  useEffect(() => {
    if (error) return console.log(error.message)
    !loading && data !== null && setServices(data.services.data)
  }, [data])

  return (
    <section className='services'>
      {services !== null &&
        <PriceList allServices={services} />
      }
    </section>
  );
};

export default ServiceList;