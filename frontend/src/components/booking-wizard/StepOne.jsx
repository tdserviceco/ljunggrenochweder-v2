import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client'
import { GET_ALL_CATEGORIES } from '../../GraphQL/Queries';
import { useDispatch } from 'react-redux';
import { catgories, categoryId, checkCategories } from '../../actions';
import DisplayCategories from './DisplayCategories';

const StepOne = ({ register }) => {

  let selectBox = document.querySelector('select')
  const dispatch = useDispatch();
  const { loading, data, error } = useQuery(GET_ALL_CATEGORIES);
  /* const [toggleCategories, setToggleCategories] = useState(true); */

  const dataSelect = (e) => {
    dispatch(categoryId(e.target.value));
    /* dispatch(checkCategories(toggleCategories)); */
  }

  const fetchCategories = () => {
    if (error) return console.log(error);
    !loading && dispatch(catgories(data));
  }

  useEffect(() => {
      console.log(selectBox)
      fetchCategories(); 
  }, [data])

  return (
    <select default="" {...register("category")} onChange={dataSelect}>
      <option hidden value="">Välj kategori</option>

      <DisplayCategories />

    </select>
  );
};

export default StepOne;