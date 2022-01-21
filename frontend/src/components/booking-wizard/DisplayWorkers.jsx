import React from 'react';
import { useSelector } from 'react-redux';

const DisplayWorkers = () => {
  const employees = useSelector(state => state.workers);
  // console.log("employee: ", employees)
  return (
    <>
      {employees !== null && employees.map((employee, key) => <option key={key} value={employee.id}>{employee.attributes.name}</option>)}
    </>
  );
};

export default DisplayWorkers;