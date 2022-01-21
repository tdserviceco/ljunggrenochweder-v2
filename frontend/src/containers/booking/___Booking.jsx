import React, { useEffect } from 'react';
import { StepOne, StepTwo, StepThree } from '../../components';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';

import { catgories, categoryId, serviceId } from '../../actions';

import { useQuery } from '@apollo/client'
import { GET_ALL_CATEGORIES } from '../../GraphQL/Queries';

const BookingStepOne = ({ register }) => {

  const dispatch = useDispatch();
  const { loading, data, error } = useQuery(GET_ALL_CATEGORIES);
  const categories = useSelector(state => state.categories);
  const id1 = useSelector(state => state.categoryId);
  
  useEffect(() => {
    !loading && dispatch(catgories(data));
  }, [data]);

  useEffect(() => {
    !loading && dispatch(catgories(data));
    if(id1 === null) return
    /* dispatch(categoryId(id1)) */
    console.log('id1 updated', id1)
  }, [id1]);


  return(<>
  {categories !== null && 
    <select onChange={ (e) => dispatch(categoryId(e.target.value)) } defaultValue={categories.categories.data[0].id} {...register('category')}>
      {categories.categories.data.map((category, key) =>
      <option key={key} value={category.id}>{category.attributes.name}</option>)}
    </select>}</>
  )

}

const Booking = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const dispatch = useDispatch();

  const id1 = useSelector(state => state.categoryId);
  const id2 = useSelector(state => state.serviceId);

  

  /* useEffect(() => {
    console.log('id2 updated')
  }, [id2]);
 */
  return (
    <section className="booking">
      <form onSubmit={handleSubmit(onSubmit)}>
        <BookingStepOne register={ register }/>
        {/* <StepOne register={ register } preset={ 'Välj kategori' }/>
        <StepTwo register={ register } preset={ 'Välj service' }/> */}
        {/* <StepThree register={register} preset={ 'Välj utövare' }/> */}
        <button type="submit">Sök tid</button>
      </form>
    </section >
  );
};

export default Booking;