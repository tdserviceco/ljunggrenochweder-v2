import React from 'react';

import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form";

import { StepOne, StepTwo, StepThree } from '../../components';

const Booking = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  const url = window.location.pathname;

  console.log(url)
  return (
    <section className="booking">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* {url === '/booking/step1' &&
          <StepOne register={register} />
        } */}
      </form>
    </section >
  );
};

export default Booking;