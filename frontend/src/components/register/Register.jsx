import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../GraphQL/Mutations';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Register = ({ state }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [addUser, { data, loading, error }] = useMutation(CREATE_USER);
  const [cookies, setCookie, removeCookie] = useCookies(['userProfile']);

  let navigate = useNavigate();

  const add = formValue => {
    addUser({
      variables: {
        email: formValue.email,
        username: formValue.username,
        password: formValue.password
      }
    })
  }

  useEffect(() => {
    if (data !== undefined) {
      let cookieValues = {
        jwt: data.register.jwt,
        username: data.register.user.username,
        email: data.register.user.email,
        id: data.register.user.id
      }
      setCookie('userProfile', cookieValues);
      window.location.href = '/booking'
    }
  }, [data])

  return (
    <form className={`register-form ${state}`} onSubmit={handleSubmit(add)}>
      <div className='register-wrapper'>
        <label htmlFor='username'>
          <span>För och efternamn</span>
          <input id={'username'} {...register('username')} placeholder='För och efternamn' />
        </label>
        <label htmlFor='email'>
          <span>E-post</span>
          <input id={'email'} type="email" {...register('email')} placeholder='Example@mail.com' />
        </label>
        <label htmlFor='password'>
          <span>Lösenord</span>
          <input id={'password'} type="password" {...register('password')} placeholder='Password' />
        </label>
        <label htmlFor='confirm-password'>
          <span>Bekräfta lösenord</span>
          <input id={'confirm-password'} type="password" {...register('confirm-password')} placeholder='Confirm password' />
        </label>
        <button type="submit">Registrera</button>
      </div>
    </form>
  );
};

export default Register;