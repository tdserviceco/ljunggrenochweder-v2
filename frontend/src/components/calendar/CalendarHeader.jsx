import React from 'react';
import { thisMonth, nextMonth, previousMonth, currentMonthName, currentYear } from './Functions';

const CalendarHeader = ({ value, onChange }) => {

  return (
    <div className='calendar-header'>
      <button type="button" className="previous" onClick={() => !thisMonth(value) && onChange(previousMonth(value))}>{!thisMonth(value) ? String.fromCharCode(171) : null}</button>
      <h2 className='current'>{currentMonthName(value)} {currentYear(value)}</h2>
      <button type="button" className="next" onClick={() => onChange(nextMonth(value))}>{String.fromCharCode(187)}</button>
    </div>
  );
};

export default CalendarHeader;