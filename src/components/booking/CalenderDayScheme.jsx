import React from 'react';
const CalenderDayScheme = ({ schemeDate }) => {
  return (
    <>
      <h1>{`${schemeDate.getDate()} ${schemeDate.toLocaleString('default', { month: 'long' })}`}</h1>
    </>
  );
};

export default CalenderDayScheme;