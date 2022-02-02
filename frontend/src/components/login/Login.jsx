import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Icon } from '@iconify/react';
import { LOGIN_USER } from '../../GraphQL/Mutations';
import { useMutation } from '@apollo/client';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
const Login = () => {

  let navigate = useNavigate();

  const [userValidation, { data, loading, error }] = useMutation(LOGIN_USER);
  const [cookies, setCookie, removeCookie] = useCookies(['userProfile']);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const authenticate = formValue => {
    userValidation({
      variables: {
        email: formValue.email,
        password: formValue.password
      }
    })
  }

  useEffect(() => {
    if (data !== undefined) {
      let cookieValues = {
        jwt: data.login.jwt,
        username: data.login.user.username,
        email: data.login.user.email,
        id: data.login.user.id
      }
      setCookie('userProfile', cookieValues);
      navigate('/booking')
    }
  }, [data])

  return (
    <form onSubmit={handleSubmit(authenticate)}>
      <label htmlFor='email'>
        <Icon icon="carbon:email" />
        <input type="email" placeholder='your@email.com' id="email" {...register('email')} />
      </label>
      <label htmlFor='password'>
        <Icon icon="carbon:password" />
        <input type="password" placeholder='your@email.com' id="password" {...register('password')} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;