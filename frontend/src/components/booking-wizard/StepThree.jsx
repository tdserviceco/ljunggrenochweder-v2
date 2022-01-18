import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client'
import { useSelector, useDispatch } from 'react-redux';
import { workersId, workers } from '../../actions'
import DisplayWorkers from './DisplayWorkers';
import { GET_ALL_WORKERS_BASED_ON_SERVICE_ID } from '../../GraphQL/Queries';
import { Register } from '..';

const StepThree = ({ register }) => {

  const dispatch = useDispatch();
  const id = useSelector(state => state.serviceId);

  const { loading, data, error } = useQuery(GET_ALL_WORKERS_BASED_ON_SERVICE_ID, {
    variables: {
      id: id
    }
  });

  const dataSelectWorker = (e) => {
    dispatch(workersId(e.target.value))
  }

  const fetchWorkers = () => {
    if (error) return console.log(error);
    !loading && dispatch(workers(data))
  }

  useEffect(() => {
    fetchWorkers()
  }, [data])

  return (
    <select default="" {...register('workers')} onChange={dataSelectWorker}>
      <option hidden value="">Välj utförare</option>
      <DisplayWorkers />
    </select>
  );
};

export default StepThree;