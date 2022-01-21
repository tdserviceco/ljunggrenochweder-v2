import React from 'react';
import { useSelector } from 'react-redux';

const DisplayWorkers = () => {
  const employees = useSelector(state => state.workers);

  return (
    <>
      <option value="">Välj utförare</option>
      {employees !== null && employees.map((employee, key) => <option key={key} value={employee.id}>{employee.attributes.name}</option>)}
    </>
  );
};

export default DisplayWorkers;