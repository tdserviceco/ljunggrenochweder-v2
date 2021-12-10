import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { GoogleLogin } from 'react-google-login';
import { useCookies } from 'react-cookie';
import { Icon } from '@iconify/react';
import axios from 'axios';

const AdminLogin = () => {
  let navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();
  const [cookie, setCookie] = useCookies(['access']);
  const domain = import.meta.env.VITE_APP_LOCAL ? import.meta.env.VITE_APP_LOCAL : import.meta.env.VITE_APP_HOST;


  const formSubmit = (data) => {
    
    const result = axios.post(`${domain}/auth`, data);
 
     result.then(res => {
       setCookie('access', res.data);
       navigate('/dashboard')
     }).catch(err => {
       if (err.response) {
         console.log(err.response)
     }
   })}

  const responseGoogle = (response) => {

    if (response.profileObj.googleId) {
      const data = { email: response.profileObj.email }
      console.log(response.profileObj.email, data)

      const result = axios.post(`${domain}/google-auth`, data)
      result.then(res => {
        console.log(res.data);
        setCookie('access', res.data);
        navigate('/dashboard')
      }).catch(err => {
        if (err.response) {
          navigate('/register')
        }
      })
    }
  }
    
  
  return (
    <section className="login">
      <form onSubmit={handleSubmit(formSubmit)}>
        <label htmlFor="email">
          <input id="email" type="email" placeholder="Email" {...register('email')}/>
        </label>

        <label htmlFor="password">
          <input id="password" type="password" placeholder="Password" {...register('password')}/>
        </label>
        <button type="submit">
          Login
        </button>
      </form>

      <GoogleLogin
        clientId={import.meta.env.VITE_APP_GID}
        buttonText="Login"
        render={renderProps => (
          <button onClick={renderProps.onClick} ><Icon icon="flat-color-icons:google" />This is my custom Google button</button>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <Link to="/register">Register</Link>
    </section>
  );
};

export default AdminLogin;