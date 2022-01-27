import React, { useEffect, useState } from 'react';

const Markup = ({ start, end }) => {

  const [hours, setHours] = useState([])
  const booking = false

  const time = Number(end.replace(':00', '')) - Number(start.replace(':00', ''));

  console.log("End: ", Number(end.replace(':00', '')))
  console.log("Start: ", Number(start.replace(':00', '')))
  let array = [];

  const loop = () => {
    for(let i=0; i < time; i++){
      array.push(i+1);
    }
    setHours(array)
  }

  const mapArray = () => {
    return hours.map((hour, key) => 
        <>
          <button 
            key={key}
            className={`booking-${ key+1 }`}
            disabled={booking ? true : false}
            type='button'>{ hour }
          </button>
        </>
      )
  }

  useEffect(() => {
    loop()
  }, [])

  return (
    <>
      <h4>{ start }</h4>
      <h4>{ end }</h4>
      <div className='schedule-container'>
        {hours.length !== 0 && mapArray()}
      </div>
      
      
    </>
  );
};

export default Markup;