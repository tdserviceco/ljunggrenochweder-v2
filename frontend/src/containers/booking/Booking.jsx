import React, { useEffect } from 'react';
import { StepOne, StepTwo, StepThree } from '../../components';

import { useSelector, useDispatch } from 'react-redux';
import { categories, services, workers } from '../../actions';
import { useQuery } from '@apollo/client'
import { GET_ALL_CATEGORIES, GET_ALL_SERVICES_BASED_ON_CATEGORY_ID, GET_ALL_WORKERS_BASED_ON_SERVICE_ID } from '../../GraphQL/Queries';

const Booking = () => {

  const cateID = useSelector(state => state.categoryId);
  const servID = useSelector(state => state.serviceId);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value)
  }

  const categoriesQuery = useQuery(GET_ALL_CATEGORIES);
  const serviceQuery = useQuery(GET_ALL_SERVICES_BASED_ON_CATEGORY_ID, {
    variables: {
      id: cateID
    }
  });
  const employeeQuery = useQuery(GET_ALL_WORKERS_BASED_ON_SERVICE_ID, {
    variables: {
      id: servID
    }
  });

  const error = {
    cat: categoriesQuery.error,
    serv: serviceQuery.error,
    emp: employeeQuery.error
  }

  
  const loadingCat = categoriesQuery.loading;
  const loadingServ = serviceQuery.loading;
  const loadingEmp = employeeQuery.loading;
  

  useEffect(() => {
    if (error.cat) return <h1>Well this sucks</h1>
    !loadingCat && dispatch(categories(categoriesQuery.data.categories.data));
  }, [categoriesQuery.data]);

  useEffect(() => {
    if (error.serv) return
    !loadingServ && dispatch(services(serviceQuery.data.category.data.attributes.services.data));
  }, [serviceQuery.data]);

 /*  useEffect(() => {
    if (error.emp) return
    !loadingEmp && dispatch(workers(employeeQuery.data.attributes.workers.data));
  }, [employeeQuery.data]) */


  return (
    <section className="booking">
      <form onSubmit={handleSubmit}>
        <StepOne preset={'Välj kategori'} />
        <StepTwo preset={'Välj service'} />
        <StepThree preset={ 'Välj utövare' }/>
        <button type="submit">Sök tid</button>
      </form>
    </section >
  );
};

export default Booking;