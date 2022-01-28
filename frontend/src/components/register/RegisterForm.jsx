import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../GraphQL/Mutations';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
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
      navigate('/')
    }
  }, [data])

  return (
    <form onSubmit={handleSubmit(add)}>
      <label htmlFor='username'>
        <span>För och efternamn</span>
        <input id={'username'} {...register('username')} placeholder='John doe' />
      </label>
      <label htmlFor='email'>
        <span>E-post</span>
        <input id={'email'} type="email" {...register('email')} placeholder='John.doe@gmail.com' />
      </label>
      <label htmlFor='password'>
        <span>Lösenord</span>
        <input id={'password'} type="password" {...register('password')} placeholder='password' />
      </label>
      <label htmlFor='confirm-password'>
        <span>Bekräfta lösenord</span>
        <input id={'confirm-password'} type="password" {...register('confirm-password')} placeholder='confirm password' />
      </label>
      <button type="submit">Skapa</button>
    </form>
  );
};

export default RegisterForm; 