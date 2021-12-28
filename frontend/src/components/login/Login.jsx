import React from 'react';
import { useForm } from "react-hook-form";
const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const authenticate = data => console.log(data);


  return (
    <form onSubmit={handleSubmit(authenticate)}>
      Login
    </form>
  );
};

export default Login;