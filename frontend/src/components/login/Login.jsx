import React from 'react';
import { useForm } from "react-hook-form";
import { Icon } from '@iconify/react';
const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const authenticate = data => console.log(data);


  return (
    <form onSubmit={handleSubmit(authenticate)}>
      <label htmlFor='email'>
        <Icon icon="carbon:email" />
        <input type="email" placeholder='your@email.com' id="email" {...register('email')} />
      </label>
    </form>
  );
};

export default Login;