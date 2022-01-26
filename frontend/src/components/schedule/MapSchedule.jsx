import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client'
import { GET_EMPLOYEE_SCHEDULE } from '../../GraphQL/Queries';

const MapSchedule = ({ date, workHours }) => {

  const [timeSchedule, setTimeSchedule] = useState(null);

  const employeeHours = useQuery(GET_EMPLOYEE_SCHEDULE, {
    variables: {
      service: Number(workHours.serviceId),
      employee: Number(workHours.workerId),
      date: String(date)
    }
  });

  useEffect(() => {
    if (employeeHours.error) return console.error(employeeHours.error)
    !employeeHours.loading && setTimeSchedule(employeeHours.data.workers.data);
  }, [employeeHours.data])

  return (
    <>
      <h2>{console.log(date, timeSchedule)}</h2>
      {/* {timeSchedule !== null && timeSchedule.map((time, key) => {
        console.log("time", time)
        return (
          <>
            <h2 key={key}>{time.attributes.name}</h2>
            {time.attributes.workhours.data.map((d, key) => {
              return (
                <div className={`demo-${key}`} key={key}>
                  {d.attributes.schedule.map((s, key) => <>
                    <h3>{s.work}</h3>
                    <h4>{s.start} - {s.end}</h4>
                  </>
                  )}
                </div>)
            })}
          </>)
      })} */}
    </>
  );
};

export default MapSchedule;