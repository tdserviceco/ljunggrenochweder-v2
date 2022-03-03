import React from 'react';

const Register = () => {
  return (
    <form>
      <label htmlFor='firstname'>
        <span>#1</span>
        <input name="firstname" id="firstname" type="text" placeholder='' />
      </label>
      <label htmlFor='lastname'>
        <span>#2</span>
        <input name="lastname" id="lastname" type="text" placeholder='' />
      </label>
      <label htmlFor='email'>
        <span>#3</span>
        <input name="email" id="email" type="email" placeholder='' />
      </label>
    </form>
  );
};

export default Register;