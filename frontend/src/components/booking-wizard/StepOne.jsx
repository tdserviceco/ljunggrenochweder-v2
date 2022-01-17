import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client'
import { GET_ALL_CATEGORIES } from '../../GraphQL/Queries';
import { useDispatch } from 'react-redux';
import { catgories, categoryId } from '../../actions';
import DisplayCategories from './DisplayCategories';

const StepOne = () => {

  const dispatch = useDispatch();
  const { loading, data, error } = useQuery(GET_ALL_CATEGORIES);

  const dataSelect = (e) => {
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
    <select default="" onChange={dataSelect}>
      <option hidden value="">Välj kategori</option>
      <DisplayCategories />
    </select>
  );
};

export default StepOne;