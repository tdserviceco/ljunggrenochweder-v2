import React from 'react';

const Loader = () => {
  return (
    <div className='lds-ripple'>
      <div className='lds-ripple__container'>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;