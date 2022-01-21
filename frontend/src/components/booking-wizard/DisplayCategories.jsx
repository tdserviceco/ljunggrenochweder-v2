import React from 'react';
import { useSelector } from 'react-redux';

const DisplayCategories = () => {

  const categories = useSelector(state => state.categories);
  return (
    <>
     
      {categories !== null && categories.categories.data.map((category, key) =>
        <option key={key} value={category.id}>{category.attributes.name}</option>)}</>
  );
};

export default DisplayCategories;