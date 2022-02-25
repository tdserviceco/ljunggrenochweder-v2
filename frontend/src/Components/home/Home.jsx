import React from 'react';
import { Users, User } from '..';
const Home = ({ request }) => {

  return (
    <div>
      <h1>Home</h1>
      <ul>
        <Users requestUrl={'users'} />
        <User requestUrl={'user/2'} />
      </ul>
    </div>
  );
};

export default Home;