import React from 'react';
import { StepOne, StepThree, StepTwo } from '../../components';
import { useForm } from "react-hook-form";

const Booking = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <section className="booking">
      <form onSubmit={handleSubmit(onSubmit)}>
        <StepOne register={register} />
        <StepTwo register={register} />
        <StepThree register={register} />
        <button type="submit">Sök tid</button>
      </form>
    </section >
  );
};

export default Booking;