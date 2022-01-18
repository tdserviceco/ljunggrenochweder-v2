import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client'
import { GET_ALL_CATEGORIES } from '../../GraphQL/Queries';
import { useDispatch } from 'react-redux';
import { catgories, categoryId } from '../../actions';
import DisplayCategories from './DisplayCategories';

const StepOne = ({ register }) => {

  const dispatch = useDispatch();
  const { loading, data, error } = useQuery(GET_ALL_CATEGORIES);
  const selectBox = document.querySelector('select[name="category"]')

  const dataSelectCategory = (e) => {
    if (e.target.value === "") return;
    dispatch(categoryId(e.target.value))
  }

  const fetchCategories = () => {
    if (error) return console.log(error);
    !loading && dispatch(catgories(data))
  }

  const demo = (e) => {
    console.log('selected')
  }

  useEffect(() => {
    if (selectBox !== null) {
      for (let i; i < selectBox.length; i++) {
        selectBox[i].remove();
      }
      console.log('selectBox[i] removed and now would be repopulated')
    }
    fetchCategories()
  }, [data])

  return (
    <select defaultValue={""} {...register('category')} onClick={dataSelectCategory} onChange={dataSelectCategory} >
      <option onSelect={demo} value="">Välj kategori</option>
      <DisplayCategories />
    </select>
  );
};

export default StepOne;