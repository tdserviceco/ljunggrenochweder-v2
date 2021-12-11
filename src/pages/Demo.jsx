import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CalenderDayScheme from '../components/booking/CalenderDayScheme';
import Calendar from 'react-calendar'
import BookingOptions from '../components/booking/BookingOptions';
import 'react-calendar/dist/Calendar.css';
const Demo = () => {
  const [category, updateCategory] = useState(null)
  const [loading, setLoading] = useState(false);
  const domain = import.meta.env.VITE_APP_LOCAL ? import.meta.env.VITE_APP_LOCAL : import.meta.env.VITE_APP_HOST;
  const [value, setValue] = useState(new Date());
  const [displayDay, toggleDisplayDay] = useState(false)
  const onChange = (nextValue) => {
    setValue(nextValue)
    toggleDisplayDay(true)
  }


  const getAllCategory = async () => {
    setLoading(true)
    const result = await axios.get(`${domain}/categories`);
    updateCategory(result.data);
    setLoading(false);
  }

  useEffect(() => {
    getAllCategory();
  }, [])

  return (
    <>
      <section className='scheme'>
        <div className='container'>
          <aside>
            <BookingOptions loading={loading} category={category} />
            <Calendar
              onChange={onChange}
              value={value}
            />
          </aside>
          {displayDay &&
            <CalenderDayScheme schemeDate={value} />
          }
        </div>
      </section>
      <section className="maps">
        <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2253.7601706955775!2d12.994642616028115!3d55.6061875107575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a3fef4d96a9f%3A0x94d809c286339ab1!2sSalong%20Ljunggren%20%26%20Weder!5e0!3m2!1sen!2sse!4v1639138481847!5m2!1sen!2sse`} allowFullScreen loading="lazy"></iframe>
      </section>
    </>
  );
};

export default Demo;