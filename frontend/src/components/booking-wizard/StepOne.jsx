import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client'
import { GET_ALL_CATEGORIES } from '../../GraphQL/Queries';
import { useDispatch } from 'react-redux';
import { catgories, serviceId } from '../../actions';
import DisplayCategory from './DisplayCategory';

const StepOne = () => {
  const dispatch = useDispatch();
  const dataSelect = (e) => {
    dispatch(serviceId(e.target.value))
  }

  const { loading, data, error } = useQuery(GET_ALL_CATEGORIES);


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
      <DisplayCategory />
    </select>
  );
};

export default StepOne;