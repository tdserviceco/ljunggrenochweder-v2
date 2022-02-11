import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS_BOOKING } from '../../GraphQL/Queries';
import { useCookies } from 'react-cookie';
import { ListOfBookings, Loader } from '../../Components'

const UserPage = () => {

  const [cookies] = useCookies(['userProfile'])
  const [lists, setLists] = useState([])
  const [denied, setDenied] = useState(false);
  const { data, error, loading } = useQuery(GET_ALL_USERS_BOOKING, {
    variables: {
      uID: cookies.userProfile.id
    }
  })

  useEffect(() => {
    !loading && data !== null && setLists(data.bookings.data)
    !loading && data !== null && console.log(data)
  }, [data])

  const removeUser = () => {
    let isExecuted = confirm("Vid din egna impulsiva förmåga, vågar du gå vidare?");
    if (isExecuted) {
      let isExecuted2 = confirm("Är du vid drottningens oäktings namn säker!?");
      if (isExecuted2) {
        setDenied(true)
      }
    }
  }

  return (
    <section className='user-page'>
      <div className='container'>
        <div className='user-info'>
          <h1>{cookies.userProfile.username}</h1>
          <h2>{cookies.userProfile.email}</h2>
          <div className='delete-me'>
            <span>Ta bort mig</span>
            <button type="button" onClick={() => removeUser()}><Icon icon="bytesize:close" /></button>
          </div>
        </div>

        <div className='user-booked-times'>
          <h2>Bokningar</h2>
          <div className='user-booked-times-info'>
            {/* Lista av tider */}
            {loading && <Loader />}
            {!loading && lists.length !== 0 ?
              <ListOfBookings lists={lists} />
              :
              <h2>Inga bokade tider!</h2>
            }
          </div>
        </div>
      </div>
      <div className={`denied ${denied ? 'display' : ''}`}>
        <h2>HA NEKAD SOM DU INTE FICK KOMMA IN TILL SYSTEMET!</h2>
      </div>
    </section>
  )
}

export default UserPage;
