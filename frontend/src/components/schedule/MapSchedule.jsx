import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client'
import { GET_EMPLOYEE_SCHEDULE } from '../../GraphQL/Queries';
import { Loader } from '..';
import Markup from './Markup';

const MapSchedule = ({ date, workHours }) => {

  const [timeSchedule, setTimeSchedule] = useState(null);

  const employeeHours = useQuery(GET_EMPLOYEE_SCHEDULE, {
    variables: {
      service: Number(workHours.serviceId),
      employee: Number(workHours.workerId),
      date: date
    }
  });

  useEffect(() => {
    if (employeeHours.error) return console.error(employeeHours.error)
    !employeeHours.loading && setTimeSchedule(employeeHours.data.workers.data);
  }, [employeeHours.data])

  return (
    <>
      {employeeHours.loading && <Loader />}
      {!employeeHours.loading && timeSchedule !== null && timeSchedule.map((time, key) => {
        return (
          <div key={key}>
            <h2>{time.attributes.name}</h2>
            {time.attributes.workhours.data.map((d, key) => {
              return d.attributes.schedule.length === 0 ?
                <h3 key={key}>No times</h3> :
                <Markup employee={time.id} date={date} start={d.attributes.schedule[0].start}
                  end={d.attributes.schedule[0].end}
                  key={key} />
            })}
          </div>)
      })}
    </>
  );
};

export default MapSchedule;