import React, { useEffect, useState } from 'react';
import { StepOne, StepTwo, StepThree, Schedule } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { categories, services, workers, workHours } from '../../actions';
import { useQuery } from '@apollo/client'
import { GET_ALL_CATEGORIES, GET_ALL_SERVICES_BASED_ON_CATEGORY_ID, GET_ALL_WORKERS_BASED_ON_SERVICE_ID } from '../../GraphQL/Queries';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'

const Booking = () => {
  const dispatch = useDispatch();
  const workHoursScheme = useSelector(state => state.workHours);
  let navigator = useNavigate()
  const [cookies] = useCookies(['userProfile']);

  const formSubmit = (form) => {
    let formValues = {};
    form.preventDefault()
    const elements = document.forms['booking'].elements;
    formValues = {
      serviceId: elements[1].value,
      workerId: elements[2].value
    }
    console.log(formValues)
    dispatch(workHours(formValues))
  }

  const cateID = useSelector(state => state.categoryId);
  const servID = useSelector(state => state.serviceId);


  const categoriesQuery = useQuery(GET_ALL_CATEGORIES);
  const serviceQuery = useQuery(GET_ALL_SERVICES_BASED_ON_CATEGORY_ID, {
    variables: {
      id: Number(cateID)
    }
  });
  const employeeQuery = useQuery(GET_ALL_WORKERS_BASED_ON_SERVICE_ID, {
    variables: {
      id: Number(servID)
    }
  });

  const error = {
    cat: categoriesQuery.error,
    serv: serviceQuery.error,
    emp: employeeQuery.error
  }

  const loading = {
    cat: categoriesQuery.loading,
    serv: serviceQuery.loading,
    emp: employeeQuery.loading
  }


  const securityCheck = () => {
    if (cookies.userProfile === undefined) {
      navigator('/403');
    }
  }

  useEffect(() => {
    // Check our security
    securityCheck();
  }, [])

  useEffect(() => {
    if (error.cat) return error.cat
    !loading.cat && dispatch(categories(categoriesQuery.data.categories.data));
  }, [categoriesQuery.data]);

  useEffect(() => {
    if (error.serv) return error.serv
    !loading.serv && serviceQuery.data.category.data !== null && dispatch(services(serviceQuery.data.category.data.attributes.services.data));
  }, [serviceQuery.data]);

  useEffect(() => {
    if (error.emp) return error.emp
    !loading.emp && employeeQuery.data.service.data !== null && dispatch(workers(employeeQuery.data.service.data.attributes.workers.data));
  }, [employeeQuery.data])


  return (
    <section className="booking">
      <form name="booking" onSubmit={formSubmit}>
        <StepOne preset={'Välj kategori'} />
        {cateID !== null &&
          <StepTwo preset={'Välj service'} />
        }
        {servID !== null &&
          <StepThree preset={'Välj utövare'} />
        }
        <button type="submit">Sök tid</button>
      </form>
      {workHoursScheme !== null &&
        <Schedule />
      }
    </section>
  );
};

export default Booking;