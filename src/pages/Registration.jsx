import React from 'react';
import { useForm } from "react-hook-form";
import { Icon } from '@iconify/react';
import axios from 'axios';

const Registration = () => {

  const domain = import.meta.env.VITE_APP_LOCAL ? import.meta.env.VITE_APP_LOCAL : ''
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();
  const registerHandler = (data) => {

    const result = axios.post(`${domain}/users`, data);

    result.then(res => {
      console.log(res.data)
    }).catch(err => {
      if (err.response) {
        console.log(err.response)
      }
    })
  }
  return (
    <form className="register" onSubmit={handleSubmit(registerHandler)}>
      <div className="register-email-input">
        <input className={`${errors.email && "active"}`} type="email" {...register('email', { required: "Email stämmer inte", pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "Email stämmer inte" } })}
          placeholder="E-post" />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
      </div>

      <div className="form-col-2">
        <div className="register-firstname-input">
          <input className={`${errors.firstname && "active"}`} type="text" {...register('firstname', { required: "Förnamn saknas" })}
            placeholder="Förnamn" />
          {errors.firstname && <p className="error-message">{errors.firstname.message}</p>}
        </div>

        <div className="register-lastname-input">
          <input className={`${errors.lastname && "active"}`} type="text" {...register('lastname', { required: "Efternamn saknas" })}
            placeholder="Efternamn" />
          {errors.lastname && <p className="error-message">{errors.lastname.message}</p>}
        </div>
      </div>
      <div className="form-col-2">
        <div className="register-password-input">
          <input className={`${errors.password && "active"}`} type="password" {...register('password', { required: "Lösenord stämmer inte" })}
            placeholder="Lösenord" />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>
        <div className="register-confirm-password-input" >
          <input className={`${errors.confirmPassword && "active"}`} type="password" {...register('confirmPassword', {
            required: "Bekräfta Lösenord", validate: {
              checkPasswordConfirmation: (value) => {
                const { password } = getValues()
                return password === value || "Lösenord är inte detsamma";
              }
            }
          })}
            placeholder="Bekräfta Lösenord" />
          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
        </div>
      </div>

      <div className="register-phone-input">
        <input className={`${errors.phone && "active"} phone-number`} type="text" {...register('phone', { required: "Vänligen ange ett giltigt telefonnummer", pattern: { value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,20}$/, message: "Vänligen ange ett giltigt telefonnummer" } })}
          placeholder="+46123456789" />
        {errors.phone && <p className="error-message">{errors.phone.message}</p>}
      </div>

      <button type="submit" className="submit-btn btn">Skicka</button>
    </form>
  );
};

export default Registration;