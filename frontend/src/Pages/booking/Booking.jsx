import React, { useState, useEffect } from 'react';
import moment from 'moment';
import {
  Calendar,
  StepOne,
  StepTwo,
  StepThree
} from '../../Components';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const [cookies, setCookie] = useCookies(['userProfile']);

  let navigate = useNavigate();

  useEffect(() => {
    if (cookies.userProfile === undefined) navigate("/403");
  }, [cookies])

  const [value, setValue] = useState(moment());
  const [displaycalendar, setDisplayCalendar] = useState(false);

  const [step, setStep] = useState(0)

  const [data, setData] = useState({
    categoryID: {},
    serviceID: {},
    employeeID: {}
  })


  const nextStep = () => {
    return setStep((step) => step + 1)
  }

  const previousStep = () => {
    return setStep((step) => step - 1)
  }

  const updateData = (type, newData) => {
    setData((data) => {
      return { ...data, [type]: newData }
    })
  }

  const activateCalender = () => {
    return setDisplayCalendar(true)
  }

  return (
    <section>
      <div className="progress"><progress max="3" value={step} /></div>
      {step === 0 && <h2>Välkommen till bokning tjänsten, Följ stegen och välj sedan på kalendern tid</h2>}
      <button type="button" disabled={step === 3 ? true : false} onClick={() => nextStep()}>Näste steg</button>

      {step === 1 && <StepOne update={updateData} />}
      {step === 2 && <StepTwo categoryID={data.categoryID} update={updateData} />}
      {step === 3 && <StepThree serviceID={data.serviceID} update={updateData} />}

      <button type="button" className={`${step === 0 || step === 1 ? 'hide' : ''}`} disabled={step === 1 ? true : false} onClick={() => previousStep()}>Steg bakåt</button>
      {Object.keys(data.categoryID).length !== 0 &&
        Object.keys(data.serviceID).length !== 0 &&
        Object.keys(data.employeeID).length !== 0 &&
        step === 3 &&
        <button type="submit" onClick={() => activateCalender()}>Hämta kalender</button>
      }

      {Object.keys(data.serviceID).length === 1 && displaycalendar && <Calendar value={value} onChange={setValue} employeeData={data} />}
    </section>
  );
};

export default Booking;