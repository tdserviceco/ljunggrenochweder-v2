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
      return <MapStaffs key={key} id={key + 1} position={position} staff={staff} />
    })
  }

  useEffect(() => {
    if (error) return console.log(error);
    !loading && data !== null && setStaffData(data.staffs)
  }, [data])

  return (
    <section className={`staffs`} id="staffs">
      {loading && <Loader />}
      {!loading && staffData !== null &&
        <>
          <h2 className='title'>Om oss</h2>
          <div className='containers'>
            {MapingStaff()}
          </div>
        </>
      }
    </section >
  );
};

export default Staffs;