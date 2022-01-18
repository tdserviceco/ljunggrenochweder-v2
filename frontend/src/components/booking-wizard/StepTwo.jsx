import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client'
import { useSelector, useDispatch } from 'react-redux';
import { services, serviceId } from '../../actions';
import DisplayServices from './DisplayServices';

import { GET_ALL_SERVICES_BASED_ON_CATEGORY_ID } from '../../GraphQL/Queries';

const StepTwo = ({ register }) => {

  const dispatch = useDispatch();
  const id = useSelector(state => state.categoryId);

  const { loading, data, error } = useQuery(GET_ALL_SERVICES_BASED_ON_CATEGORY_ID, {
    variables: {
      id: id
    }
  });

  const dataSelectService = (e) => {
    dispatch(serviceId(e.target.value))
  }

  const fetchServices = () => {
    if (error) return console.log(error);
    !loading && dispatch(services(data))
  }

  useEffect(() => {
    fetchServices()
  }, [data, register])

  return (
    <select default="" {...register('service')} onChange={dataSelectService}>
      <option hidden value="">Välj tjänst</option>
      <DisplayServices />
    </select>
  );
};

export default StepTwo;