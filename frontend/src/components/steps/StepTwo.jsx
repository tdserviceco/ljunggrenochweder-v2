import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client'
import { GET_ALL_SERVICES_BASED_ON_CATEGORY_ID } from '../../GraphQL/Queries';
import MapOutOptions from './MapOutOptions';

const StepTwo = ({ categoryID, update }) => {

  const [options, setOptions] = useState([]);
  const { data, error, loading } = useQuery(GET_ALL_SERVICES_BASED_ON_CATEGORY_ID, {
    variables: {
      id: categoryID
    }
  })

  const updateStepTwo = (event) => {
    if (event.target.value === '') {
      update('serviceID', {})
    }
    update('serviceID', event.target.value)
  }

  useEffect(() => {
    if (error) return console.log(error.message);
    !loading && data !== null && setOptions(data.category.data.attributes.services.data);
  }, [data]);

  return (
    <div className='step-two'>
      <h2>Steg 2</h2>
      <select onChange={updateStepTwo}>
        <option hidden value={''}>Välj Tjänst</option>
        {MapOutOptions(options)}
      </select>
    </div>
  );
};

export default StepTwo;