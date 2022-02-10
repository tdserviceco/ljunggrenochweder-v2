import React, { useEffect, useState } from 'react';
import BuildHours from './BuildHours';
import Buttons from './Buttons';
const BookingLayout = ({ employeeSchedule, date }) => {
  const [times, setTime] = useState([]);

  useEffect(() => {
    employeeSchedule.workhours !== undefined && employeeSchedule.workhours[0].attributes.schedule.length !== 0 &&
      setTime(BuildHours(employeeSchedule.workhours[0].attributes.schedule[0].start, employeeSchedule.workhours[0].attributes.schedule[0].end))
  }, [employeeSchedule])

  return (
    <>
      <h2>{date}</h2>
      <h3>{employeeSchedule.name}</h3>
      {employeeSchedule.workhours !== undefined && employeeSchedule.workhours.map((work, key) => {
        return (
          <div className='work' key={key}>
            {work.attributes.schedule.length !== 0 ? work.attributes.schedule.map((time, key) => {
              return (
                <div className='time' key={key}>
                  <h4>{time.start} - {time.end}</h4>
                  <div className='buttons-layout'>
                    <div className='buttons'>
                      <Buttons times={times} date={date} eID={employeeSchedule.eID} />
                    </div>
                  </div>
                </div>
              )
            }) : <h4>Inga bokade tider än</h4>
            }
          </div>)
      })}

    </>
  );
};

export default BookingLayout;