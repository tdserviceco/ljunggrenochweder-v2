import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client'
import { GET_ALL_CATEGORIES } from '../../GraphQL/Queries';
import MapOutOptions from './MapOutOptions';

const StepOne = ({ update }) => {
  const { data, loading, error } = useQuery(GET_ALL_CATEGORIES);
  const [options, setOptions] = useState([]);

  const updateStepOne = (event) => {
    if (event.target.value === '') {
      update('categoryID', {})
    }
    update('categoryID', event.target.value)
  }

  useEffect(() => {
    if (error) return console.log(error.message);
    !loading && data !== null && setOptions(data.categories.data);
  }, [data]);

  return (
    <div className='step-one' onChange={updateStepOne}>
      <h2>Steg 1</h2>
      <select defaultValue={''}>
        <option hidden value={''}>Välj Kategori</option>
        {MapOutOptions(options)}
      </select>
    </div>
  );
};

export default StepOne;