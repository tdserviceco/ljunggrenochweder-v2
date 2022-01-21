import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client'
import { GET_ALL_CATEGORIES } from '../../GraphQL/Queries';
import { useDispatch } from 'react-redux';
import { catgories, categoryId, serviceId } from '../../actions';
import DisplayCategories from './DisplayCategories';

const StepOne = ({ register, preset, id }) => {

  const dispatch = useDispatch();
  const { loading, data, error } = useQuery(GET_ALL_CATEGORIES);
  const [firstRow] = useState('')

  const dataSelectCategory = (e) => {
    if (e.target.value === '' /* || e.target === undefined */) return;
    dispatch(categoryId(e.target.value));
  }

  const fetchCategories = () => {
    if (error) return console.log(error);
    !loading && dispatch(catgories(data));
  }

  useEffect(() => {
    fetchCategories();
    /* dataSelectCategory(); */
  }, [data]);

  return (
    <select defaultValue={ firstRow } {...register('category')} onChange={ dataSelectCategory } >
      <option value={ firstRow }>{ preset }</option>
      <DisplayCategories />
    </select>
  );
};

export default StepOne;