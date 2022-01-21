import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { categoryId, serviceId, services } from '../../actions';
import DisplayCategories from './DisplayCategories';

const StepOne = ({ preset }) => {

  const dispatch = useDispatch();
  const [firstRow] = useState('');

  const cateID = useSelector(state => state.categoryId)
  const servID = useSelector(state => state.serviceId);

  const dataSelectCategory = (e) => {
    if (e.target.value === '') return;
    dispatch(categoryId(e.target.value));
    if(e.target.value !== cateID){
      /* dispatch(services(null)); */
      dispatch(serviceId(null));
    }
  }
  return (
    <select defaultValue={firstRow} name={'category'} onClick={dataSelectCategory} >
      <option value={firstRow}>{preset}</option>
      <DisplayCategories />
    </select>
  );
};

export default StepOne;