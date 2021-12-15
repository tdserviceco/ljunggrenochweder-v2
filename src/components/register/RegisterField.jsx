import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
const RegisterField = () => {
	const { register, handleSubmit, formState: { errors }, getValues } = useForm();
	const onSubmit = data => RegisterProcess(data);
	const domain = import.meta.env.VITE_APP_REGISTER;
	let navigate = useNavigate()
	const RegisterProcess = (data) => {
		//Register process!
		axios.post(domain, data, {
			headers: {
				'Content-Type': 'application/json'
			},
		}).then(res => {
			setCookie('access', {
				jwt: res.data.jwt,
				username: data.username,
				email: data.email,
				firstname: data.firstname,
				lastname: data.lastname,
			})
			navigate('/')
		}).catch(error => {
			if (error.response) {
				console.log(error.response.data.error.message)
				alert(error.response.data.error.message)
			}
		})
	}
	return (
		<form className="register-form" onSubmit={handleSubmit(onSubmit)}>
			<h1>Register</h1>
			<div className='username-field'>
				<label htmlFor='username'>
					<span>Användarnamn</span>
					<input type="text" id='username' {...register('username', { required: true })} placeholder='Användarnamn' />
					{errors.username && <span>This field is required</span>}
				</label>
			</div>
			<div className='email-field'>
				<label htmlFor='email'>
					<span>E-post</span>
					<input type="email" id='email' {...register('email', { required: true })} placeholder='E-post' />
					{errors.email && <span>This field is required</span>}
				</label>
			</div>
			<div className='name-fields'>
				<label htmlFor='firstname'>
					<span>Förnamn</span>
					<input type="text" id='firstname' {...register('firstname', { required: true })} placeholder='Förnamn' />
					{errors.firstname && <span>This field is required</span>}
				</label>
				<label htmlFor='lastname'>
					<span>Efternamn</span>
					<input type="text" id='lastname' {...register('lastname', { required: true })} placeholder='Efternamn' />
					{errors.lastname && <span>This field is required</span>}
				</label>
			</div>
			<div className='password-fields'>
				<label htmlFor='password'>
					<span>Lösenord</span>
					<input type="password" id='password' {...register('password', { required: true })} placeholder='Lösenord' />
					{errors.password && <span>This field is required</span>}
				</label>
				<label htmlFor='confirm-password'>
					<span>Bekräfta lösenord</span>
					<input type="password" id='confirm-password' {...register('confirmPassword', {
						required: true, validate: {
							//Tittar igenom om lösenord stämmer med varandra! 
							//(vart checkPasswordConfirmation kommer ifrån vet jag inte!)
							checkPasswordConfirmation: (value) => {
								const { password } = getValues()
								return password === value;
							}
						}
					})} placeholder='Bekräfta lösenord' />
					{errors.confirmPassword && <span>Lösenord stämmer inte med varandra</span>}
				</label>
			</div>
			<button type="submit" className='btn submit'>Submit</button>
		</form>
	);
};

export default RegisterField;