import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client'
import { useSelector, useDispatch } from 'react-redux';
import { services, serviceId, categoryId } from '../../actions';
import DisplayServices from './DisplayServices';

import { GET_ALL_SERVICES_BASED_ON_CATEGORY_ID } from '../../GraphQL/Queries';

const StepTwo = ({ register, preset }) => {

  const dispatch = useDispatch();
  const id = useSelector(state => state.categoryId);
  const [firstRow] = useState('')
  const { loading, data, error } = useQuery(GET_ALL_SERVICES_BASED_ON_CATEGORY_ID, {
    variables: {
      id: id
    }
  });

  const dataSelectService = (e) => {
    if (e.target.value === '' /* || e.target === undefined */) return;
    dispatch(serviceId(e.target.value))
  }

  const fetchServices = () => {
    if (error) return console.log(error);
    !loading && dispatch(services(data))
  }

  useEffect(() => {
    console.log('A new id, Fetch service')
    fetchServices();
    /* dataSelectService(); */
  }, [data])

  return (
    <select defaultValue={ firstRow } {...register('service')} onChange={ dataSelectService }>
      <option value={ firstRow }>{ preset }</option>
      <DisplayServices />
    </select>
  );
};

export default StepTwo;