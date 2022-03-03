import React, { useEffect, useState } from 'react';
import axios from '../../Assets/custom-hooks/useAxios';
const Users = ({ requestUrl }) => {

  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requestUrl);
      setUsersData(request.data.value)
      return request;
    }

    fetchData()

  }, [requestUrl])

  return (
    <>
      {usersData.length !== 0 && usersData.map((user, key) => <li key={user.id}>{user.id}</li>)}
    </>
  );
};

export default Users;