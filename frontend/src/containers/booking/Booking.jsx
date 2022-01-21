import React, { useEffect } from 'react';
import { StepOne, StepTwo, StepThree } from '../../components';
import { useFormSubmit } from '../../assets/custom-hooks';
import { useSelector, useDispatch } from 'react-redux';
import { categories, services, workers } from '../../actions';
import { useQuery } from '@apollo/client'
import { GET_ALL_CATEGORIES, GET_ALL_SERVICES_BASED_ON_CATEGORY_ID, GET_ALL_WORKERS_BASED_ON_SERVICE_ID } from '../../GraphQL/Queries';

const Booking = () => {

  const cateID = useSelector(state => state.categoryId);
  const servID = useSelector(state => state.serviceId);

  const dispatch = useDispatch();

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
      <form name="booking" onSubmit={useFormSubmit}>
        <StepOne preset={'Välj kategori'} />
        {cateID !== null &&
          <StepTwo preset={'Välj service'} />
        }
        {servID !== null &&
          <StepThree preset={'Välj utövare'} />
        }
        <button type="submit">Sök tid</button>
      </form>
    </section >
  );
};

export default Booking;