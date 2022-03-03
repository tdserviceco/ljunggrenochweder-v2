import React, { useEffect, useState } from 'react';
import axios from '../../Assets/custom-hooks/useAxios';
const Users = ({ requestUrl }) => {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requestUrl);
      setUserData(request.data.value)
      return request;
    }

    fetchData()

  }, [requestUrl])

  console.log(userData)
  return (
    <>
      {userData !== null && <h3>{userData.name}</h3>}
    </>
  );
};

export default Users;