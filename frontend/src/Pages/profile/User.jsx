import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
const User = () => {
  const [cookies, setCookies, removeCookies] = useCookies('userProfile');
  return (
    <section className="user" id={cookies.userProfile.id}>
      <h1>Välkommen {cookies.userProfile.username}</h1>
      {/* Lista av bokning */}
      <button type="button" onClick={() => removeUser()}>Ta bort mig</button>
    </section>
  );
};

export default User;