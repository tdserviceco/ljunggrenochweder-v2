import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client'
import { useSelector, useDispatch } from 'react-redux';
import { serviceId } from '../../actions';
import DisplayServices from './DisplayServices';

const StepTwo = ({ register, preset }) => {

  const dispatch = useDispatch();
  const [firstRow] = useState('')
  const services = useSelector(state => state.services);
  const dataSelectService = (e) => {
    if (e.target.value === '') return;
    dispatch(serviceId(e.target.value))
  }

  return (
    <select defaultValue={firstRow} {...register('service')} onChange={dataSelectService}>
      <option value={firstRow}>{preset}</option>
      {services !== null &&
        <DisplayServices />
      }
    </select>
  );
};

export default StepTwo;