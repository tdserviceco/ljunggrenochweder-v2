import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client'
import { useSelector, useDispatch } from 'react-redux';
import { services, serviceId } from '../../actions';
import DisplayServices from './DisplayServices';

import { GET_ALL_SERVICES_BASED_ON_CATEGORY_ID } from '../../GraphQL/Queries';

const StepTwo = ({ register }) => {
  const dispatch = useDispatch();
  const id = useSelector(state => state.categoryId);
  const selectBox = document.querySelector('select[name="service"]')

  const { loading, data, error } = useQuery(GET_ALL_SERVICES_BASED_ON_CATEGORY_ID, {
    variables: {
      id: id
    }
  });

  const dataSelectService = (e) => {
    if (e.target.value === "") return;
    dispatch(serviceId(e.target.value))
  }

  const fetchServices = () => {
    if (error) return console.log(error);
    !loading && dispatch(services(data))
  }

  useEffect(() => {
    if (selectBox !== null) {
      for (let i; i < selectBox.length; i++) {
        selectBox[i].remove();
      }
      console.log('selectBox[i] removed and now would be repopulated')
    }
    fetchServices()
  }, [data])

  return (
    <select defaultValue={""} {...register('service')} onClick={dataSelectService} onChange={dataSelectService}>
      {/* <option value="">Välj tjänst</option> */}
      <DisplayServices />
    </select>
  );
};

export default StepTwo;