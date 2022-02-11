import React from 'react';
import { useCookies } from 'react-cookie';
// import {ListOfBooking} from '../../Components'
function UserPage() {

  const [cookies] = useCookies(['userProfile']);
  const removeUser = () => {

  }
  return (
    <section className='user-page'>
      <h1>User Page</h1>
      <div className='user-info'>
        <h2>{cookies.userProfile.username}</h2>
        <h3>{cookies.userProfile.email}</h3>
      </div>
      <div className='user-booked-times'>
        <div className='user-booked-times-info'>
          {/* Lista av tider */}
          {/* <ListOfBookings /> */}
          <div className='remove-this-booking'>
            <h3>Exempel tid: 13:00 - 14:00</h3>
            <button>X</button>
          </div>
          <div className='remove-this-booking'>
            <h3>Exempel tid: 13:00 - 14:00</h3>
            <button>X</button>
          </div>
          <div className='remove-this-booking'>
            <h3>Exempel tid: 13:00 - 14:00</h3>
            <button>X</button>
          </div>
          <div className='remove-this-booking'>
            <h3>Exempel tid: 13:00 - 14:00</h3>
            <button>X</button>
          </div>
        </div>
      </div>
      <div className='delete-me'>
        <span>Ta bort mig</span>
        <button type="button" onClick={() => removeUser()}>X</button>
      </div>
    </section>
  )
}

export default UserPage;
