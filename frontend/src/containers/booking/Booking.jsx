import React from 'react';

import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form";

import { StepOne, StepTwo, StepThree } from '../../components';

const Booking = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const onSubmit = data => console.log(data);
  
  
  
  /* let checkCategories = useSelector(state => state.checkCategories);
  let checkService = useSelector(state => state.checkService); */
  /* let checkWorkers = useSelector(state => state.checkWorkers); */

  return (
    <section className="booking">
      <form onSubmit={handleSubmit(onSubmit)}>
        <StepOne register={ register }/>
        <StepTwo register={ register }/>
        {/* <StepThree register={ register }/> */}
        <button type="submit" onClick={onSubmit}>Sök tid</button>
      </form>
    </section >
  );
};

export default Booking;