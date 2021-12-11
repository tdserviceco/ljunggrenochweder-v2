import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingOptions = ({ loading, category }) => {
  const domain = import.meta.env.VITE_APP_LOCAL ? import.meta.env.VITE_APP_LOCAL : import.meta.env.VITE_APP_HOST;
  const [services, setServices] = useState(null);
  const [time, setTime] = useState(null);
  const [displayHandlers, setDisplayHandlers] = useState(false);

  const mapCategory = () => {
    loading && console.log(category)
    if (category !== null) {
      return category.map((data, key) =>
        <option key={key} value={data._id}>{data.name}</option>
      )
    }
  }

  const mapServices = () => {
    console.log("services: ", services)
    if (services !== null) {
      return services.map((data, key) =>
        <option key={key} value={data._id}>{data.name}</option>
      )

    }
    else {
      <option hidden>Noll tjänster</option>
    }
  }

  const getServices = async (e) => {
    if (e.target.value !== 'all') {
      // console.log(e.target.value)
      const result = await axios.get(`${domain}/services/${e.target.value}`)
      setServices(result.data);
    }
    else {
      const result = await axios.get(`${domain}/services`)
      setServices(result.data);
    }
  }

  const getHandler = async () => {
    console.log('handler');
  }

  const getTime = async () => {
    console.log('time');
  }

  useEffect(() => {
    /** Something maybe? */
  }, [])

  return (
    <section className="services">
      <select className="steps step-1" onChange={getServices} defaultValue="">
        <option hidden value="">Välj kategori</option>
        <option value="all">Alla</option>
        {mapCategory()}
      </select>
      <select className="steps step-2" onChange={getHandler} defaultValue="">
        <option hidden value="">Välj tjänst</option>
        {mapServices()}
      </select>

      {displayHandlers &&
        <select className="steps step-3" onChange={getTime}>
          <option hidden value="">Välj utövare</option>
          {handlers}
        </select>
      }
    </section>
  );
};

export default BookingOptions;