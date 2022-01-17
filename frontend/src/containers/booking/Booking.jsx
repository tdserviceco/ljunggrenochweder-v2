import React from 'react';
import { StepOne, StepTwo, StepThree } from '../../components';
const Booking = () => {
  const clickMe = () => {
    console.log('click');
  }
  return (
    <section className="booking">
      <StepOne />
      <StepTwo />
      <StepThree />
      <button type="button" onClick={clickMe}>Sök tid</button>
    </section >
  );
};

export default Booking;