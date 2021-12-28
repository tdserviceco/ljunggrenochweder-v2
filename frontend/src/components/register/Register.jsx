import React from 'react';
import { useForm } from "react-hook-form";
const Register = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const add = data => console.log(data);


  return (
    <form onSubmit={handleSubmit(add)}>
      Register
    </form>
  );
};

export default Register;