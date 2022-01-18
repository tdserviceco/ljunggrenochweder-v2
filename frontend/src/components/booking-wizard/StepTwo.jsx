import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client'
import { useSelector, useDispatch } from 'react-redux';
import { services, serviceId, checkService } from '../../actions';
import DisplayServices from './DisplayServices';

import { GET_ALL_SERVICES_BASED_ON_CATEGORY_ID } from '../../GraphQL/Queries';

const StepTwo = ({ register }) => {

  let selectBox1 = document.querySelector('select[name="service"]')

  const dispatch = useDispatch();
  const id = useSelector(state => state.categoryId);
  const [toggleServices, setToggleServices] = useState(true);

  const { loading, data, error } = useQuery(GET_ALL_SERVICES_BASED_ON_CATEGORY_ID, {
    variables: {
      id: id
    }
  });

  /* const dataSelectService = (e) => {
    dispatch(serviceId(e.target.value));
    setToggleServices(true);
    dispatch(checkService(toggleServices));
  } */

  const fetchServices = () => {
    if (error) return console.log(error);
    !loading && dispatch(services(data));
  }

  useEffect(() => {
      console.log(selectBox1)
      fetchServices()
  }, [data])

  return (
    <select default="" {...register("service")}>
      <option hidden value="">Välj tjänst</option>
      <DisplayServices />
    </select>
  );
};

export default StepTwo;