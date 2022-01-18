import React from 'react';
import { useSelector } from 'react-redux';

const DisplayWorkers = () => {
  const employees = useSelector(state => state.workers);

  return (
    <>
      {employees !== null && employees.service.data.attributes.workers.data.map((employee, key) => <option key={key} value={employee.id}>{employee.attributes.name}</option>)}
    </>
  );
};

export default DisplayWorkers;