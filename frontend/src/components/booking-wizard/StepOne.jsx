import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { categoryId } from '../../actions';
import DisplayCategories from './DisplayCategories';

const StepOne = ({ register, preset }) => {

  const dispatch = useDispatch();
  const [firstRow] = useState('')

  const dataSelectCategory = (e) => {
    if (e.target.value === '') return;
    dispatch(categoryId(e.target.value));
  }
  return (
    <select defaultValue={firstRow} {...register('category')} onChange={dataSelectCategory} >
      <option value={firstRow}>{preset}</option>
      <DisplayCategories />
    </select>
  );
};

export default StepOne;