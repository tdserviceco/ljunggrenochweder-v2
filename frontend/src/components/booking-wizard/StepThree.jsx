import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client'
import { useSelector, useDispatch } from 'react-redux';
import { workers, workersId } from '../../actions';
import DisplayWorkers from './DisplayWorkers';
import { GET_ALL_WORKERS_BASED_ON_SERVICE_ID } from '../../GraphQL/Queries';

const StepThree = ({ register }) => {

  
  const dispatch = useDispatch();
  const id = useSelector(state => state.serviceId);
  const [demo, setDemo] = useState(null)

  const { loading, data, error } = useQuery(GET_ALL_WORKERS_BASED_ON_SERVICE_ID, {
    variables: {
      id: id
    }
  });

  /* const dataSelectWorker = (e) => {
    setDemo(e.target.value)
    dispatch(workersId(demo))
  } */

  const fetchWorkers = () => {
    if (error) return console.log(error);
    !loading && dispatch(workers(data))
  }

  useEffect(() => {
    fetchWorkers()
  }, [data, demo])


  console.log(demo)
  return (
    <select default="" {...register("worker")}>
      <option hidden value="">Välj utförare</option>
      <DisplayWorkers />
    </select>
  );
};

export default StepThree;