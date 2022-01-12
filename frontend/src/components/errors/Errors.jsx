import React from 'react';
import { NoMatch, AccessDenied } from '..';
const Errors = ({ status }) => {
  return (
    <section className='errors'>
      {status === 404 && <NoMatch />}
      {status === 403 && <AccessDenied />}
    </section>
  );
};

export default Errors;