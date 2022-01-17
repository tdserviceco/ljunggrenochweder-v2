import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client'
import { useSelector, useDispatch } from 'react-redux';
import { services, workersId } from '../../actions';
import DisplayServices from './DisplayServices';

import { GET_ALL_SERVICES_BASED_ON_CATEGORY_ID } from '../../GraphQL/Queries';

const StepTwo = () => {

  const dispatch = useDispatch();
  const id = useSelector(state => state.serviceId);

  const { loading, data, error } = useQuery(GET_ALL_SERVICES_BASED_ON_CATEGORY_ID, {
     variables: {
       id: id
     }
  });

  const dataSelectWorker = (e) => {
    dispatch(workersId(e.target.value))
    
  }
  
  const fetchServices = () => {
    if (error) return console.log(error);
     !loading && dispatch(services(data))
   }

  useEffect(() => {
    fetchServices()
  }, [data])

  return ( 
    <select default="" onChange={dataSelectWorker}>
      <option hidden value="">Välj tjänst</option>
      <DisplayServices />
    </select>
  );
};

export default StepTwo;