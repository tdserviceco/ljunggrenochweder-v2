import React from 'react';
import { useForm } from "react-hook-form";
const LoginField = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>

        </form>
    );
};

export default LoginField;