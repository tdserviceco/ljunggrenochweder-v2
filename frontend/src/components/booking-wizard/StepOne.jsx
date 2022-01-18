import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client'
import { GET_ALL_CATEGORIES } from '../../GraphQL/Queries';
import { useDispatch } from 'react-redux';
import { catgories, categoryId } from '../../actions';
import DisplayCategories from './DisplayCategories';

const StepOne = ({ register }) => {

  const dispatch = useDispatch();
  const { loading, data, error } = useQuery(GET_ALL_CATEGORIES);

  const dataSelectCategory = (e) => {
    if (e.target.value === "") return;
    dispatch(categoryId(e.target.value))
  }

  const fetchCategories = () => {
    if (error) return console.log(error);
    !loading && dispatch(catgories(data))
  }

  useEffect(() => {
    fetchCategories()
  }, [data])

  return (
    <select sdefaultValue={""} {...register('category')} onChange={dataSelectCategory} >
      <DisplayCategories />
    </select>
  );
};

export default StepOne;