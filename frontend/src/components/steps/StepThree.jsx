import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client'
import { GET_ALL_WORKERS_BASED_ON_SERVICE_ID } from '../../GraphQL/Queries';
import MapOutOptions from './MapOutOptions';

const StepThree = ({ serviceID, update }) => {
  const { data, error, loading } = useQuery(GET_ALL_WORKERS_BASED_ON_SERVICE_ID, {
    variables: {
      id: serviceID
    }
  })

  const [options, setOptions] = useState([]);

  const updateStepThree = (event) => {
    if (event.target.value === '') {
      update('employeeID', {})
    }
    update('employeeID', event.target.value)
  }


  useEffect(() => {
    if (error) return console.log(error.message);
    !loading && setOptions(data.service.data.attributes.workers.data);
  }, [data]);

  return (
    <div className='step-three'>
      <h2>Sista steg</h2>
      <select onChange={updateStepThree}>
        <option hidden value={''}>Välj utövare</option>
        {MapOutOptions(options)}
      </select>
    </div>
  );
};

export default StepThree;