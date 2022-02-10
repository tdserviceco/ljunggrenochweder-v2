import React from 'react';
import { Errors } from '../../Components';
const HTMLErrorCodes = ({ status }) => {
  return (
    <section className='errors'>
      <Errors status={status} />
    </section>
  );
};

export default HTMLErrorCodes;