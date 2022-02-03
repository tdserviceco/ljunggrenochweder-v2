import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { GET_STAFFS } from '../../GraphQL/Queries';
import MapStaffs from './MapStaffs';
import { Loader } from '..';
const Staffs = () => {

  const { data, error, loading } = useQuery(GET_STAFFS);
  const [staffData, setStaffData] = useState(null);
  const MapingStaff = () => {
    return staffData.data.map((staff, key) => {
      let position = 'right';
      if (key % 2 == 0) {
        position = 'left'
      }
      return <MapStaffs key={key} position={position} staff={staff} />
    })
  }

  useEffect(() => {
    if (error) return console.log(error);
    !loading && data !== null && setStaffData(data.staffs)
  }, [data])

  return (
    <section className={`staffs`}>
      {loading && <Loader />}
      {!loading && staffData !== null &&
        MapingStaff()
      }
    </section >
  );
};

export default Staffs;