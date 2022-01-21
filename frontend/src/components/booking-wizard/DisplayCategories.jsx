import React from 'react';
import { useSelector } from 'react-redux';

const DisplayCategories = () => {

  const categories = useSelector(state => state.categories);

  return (
    <>
<<<<<<< HEAD
      {categories !== null && 
      categories.categories.data.map((category, key) => 
      <option key={key} value={category.id}>{category.attributes.name}</option>
      )}
=======
      {categories !== null && categories.map((category, key) =>
        <option key={key} value={category.id}>{category.attributes.name}</option>)
      }
>>>>>>> demo2
    </>
  );
};

export default DisplayCategories;