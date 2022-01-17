import React from 'react';
import { useQuery } from '@apollo/client'
// import { GET_ALL_SERVICES_BASED_ON_CATEGORY_ID } from '../../GraphQL/Queries';
import { useSelector } from 'react-redux';
const StepTwo = () => {
  const id = useSelector(state => state.serviceId);
  console.log(typeof (id))
  // const dispatch = useDispatch();
  // const dataSelect = (e) => {
  //   dispatch(serviceId(e.target.value))
  // }

  // const { loading, data, error } = useQuery(GET_ALL_SERVICES_BASED_ON_CATEGORY_ID, {
  //   variables: {
  //     id: id
  //   }
  // });


  // const fetchServices = () => {
  //   if (error) return console.log(error);
  //   !loading && dispatch(catgories(data))
  // }

  // useEffect(() => {
  //   fetchCategories()
  // }, [data])

  return (
    <>
      Step 2
    </>
  );
};

export default StepTwo;