import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { workersId } from '../../actions'
import DisplayWorkers from './DisplayWorkers';

const StepThree = ({ preset }) => {

  const dispatch = useDispatch();
  const [firstRow] = useState('');

  const dataSelectWorker = (e) => {
    if (e.target.value === "") return;
    dispatch(workersId(e.target.value))
  }

  return (
    <select defaultValue={firstRow} name={'workers'} onChange={dataSelectWorker}>
      <option hidden value={firstRow}>{preset}</option>
      <DisplayWorkers />
    </select>
  );
};

export default StepThree;