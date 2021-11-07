import React from 'react';

const AdminLogin = () => {
  return (
    <div>
      <form>
        <label htmlFor="email">
          <input id="email" type="email" placeholder="Email" />
        </label>

        <label htmlFor="password">
          <input id="password" type="password" placeholder="Password" />
        </label>
      </form>
    </div>
  );
};

export default AdminLogin;