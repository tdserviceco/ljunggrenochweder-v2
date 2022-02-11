import React from 'react';
import { useCookies } from 'react-cookie';

 function UserPage() {

  const [cookies] = useCookies(['userProfile']);

  return (
    <section className='user-page'>
      <h1>User Page</h1>
      <div className='user-info'>
        <h2>{cookies.userProfile.username}</h2>
        <h3>{cookies.userProfile.email}</h3>
      </div>
      <div className='user-booked-times'>
        <div className='user-booked-times-info'>
          <h3>Exempel tid: 13:00 - 14:00</h3>
          <h3>Exempel tid: 13:00 - 14:00</h3>
          <h3>Exempel tid: 13:00 - 14:00</h3>
          <h3>Exempel tid: 13:00 - 14:00</h3>
          <h3>Exempel tid: 13:00 - 14:00</h3>
        </div>
      </div>
    </section>
  )
}

export default UserPage;
