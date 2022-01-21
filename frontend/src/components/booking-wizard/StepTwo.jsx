import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { serviceId } from '../../actions';
import DisplayServices from './DisplayServices';

const StepTwo = ({ preset }) => {

  const dispatch = useDispatch();
  const [firstRow] = useState('');

  const dataSelectService = (e) => {
    if (e.target.value === '') return;
    dispatch(serviceId(e.target.value));
  }

  return (
    <select defaultValue={firstRow} name={'services'} onClick={dataSelectService}>
      <option hidden value={firstRow}>{preset}</option>
      <DisplayServices />
    </select>
  );
};

export default StepTwo;