import React, { useEffect } from 'react';
import { StepOne, StepTwo, StepThree } from '../../components';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { catgories, categoryId, serviceId } from '../../actions';

const Booking = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const dispatch = useDispatch();

  const cateID = useSelector(state => state.categoryId)
  const servID = useSelector(state => state.serviceId)
  const servOption = document.querySelector('select[name="service"]');

  useEffect(() => {
    if(cateID === null) return
    /* dispatch(categoryId(cateID)) */
    console.log('cateID', cateID)
    console.log('servID', servID, servOption.value)
  }, [cateID]);

  useEffect(() => {
    if(servID === null) return
    /* dispatch(serviceId(servID)) */
    console.log('servID', servID)
  }, [servID]);

  return (
    <section className="booking">
      <form onSubmit={handleSubmit(onSubmit)}>
        <StepOne register={ register } preset={ 'Välj kategori' }/>
        <StepTwo register={ register } preset={ 'Välj service' }/>
        {/* <StepThree register={register} preset={ 'Välj utövare' }/> */}
        <button type="submit">Sök tid</button>
      </form>
    </section >
  );
};

export default Booking;