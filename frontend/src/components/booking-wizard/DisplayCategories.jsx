import React from 'react';
import { useSelector } from 'react-redux';

const DisplayCategories = () => {

  const categories = useSelector(state => state.categories);

  categories !== null && console.log("Categories loaded!")
  return (
    <>
      {categories !== null && categories.map((category, key) =>
        <option key={key} value={category.id}>{category.attributes.name}</option>)
      }
    </>
  );
};

export default DisplayCategories;