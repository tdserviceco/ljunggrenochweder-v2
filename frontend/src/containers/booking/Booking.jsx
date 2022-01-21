import React, { useEffect } from 'react';
import { StepOne, StepTwo, StepThree } from '../../components';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { categories, services } from '../../actions';
import { useQuery } from '@apollo/client'
import { GET_ALL_CATEGORIES, GET_ALL_SERVICES_BASED_ON_CATEGORY_ID } from '../../GraphQL/Queries';

const Booking = () => {

  const cateID = useSelector(state => state.categoryId)
  const servID = useSelector(state => state.serviceId)
  const dispatch = useDispatch();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const categoriesQuery = useQuery(GET_ALL_CATEGORIES);
  const serviceQuery = useQuery(GET_ALL_SERVICES_BASED_ON_CATEGORY_ID, {
    variables: {
      id: cateID
    }
  });

  const errorCat = categoriesQuery.error;
  const loadingCat = categoriesQuery.loading;
  const errorServ = serviceQuery.error
  const loadingServ = serviceQuery.loading;
  const onSubmit = data => console.log(data);



  useEffect(() => {
    if (errorCat) return <h1>Well this sucks</h1>
    !loadingCat && dispatch(categories(categoriesQuery.data.categories.data));
  }, [categoriesQuery.data])

  useEffect(() => {
    if (errorServ) return
    !loadingServ && dispatch(services(serviceQuery.data.category.data.attributes.services.data));
  }, [serviceQuery.data]);

  // useEffect(() => {
  //   if (servID === null) return
  //   /* dispatch(serviceId(servID)) */
  //   console.log('servID', servID)
  // }, [servID]);



  return (
    <section className="booking">
      <form onSubmit={handleSubmit(onSubmit)}>
        <StepOne register={register} preset={'Välj kategori'} />
        <StepTwo register={register} preset={'Välj service'} />
        {/* <StepThree register={register} preset={ 'Välj utövare' }/> */}
        <button type="submit">Sök tid</button>
      </form>
    </section >
  );
};

export default Booking;