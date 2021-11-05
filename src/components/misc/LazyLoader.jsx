import React from 'react';
import '../../scss/components/misc/_lazy-loader.scss';
const LazyLoader = () => {
  return (
    <div className="lazyLoader pulse">
      <img src="img/logo.svg" alt="lindab" />
    </div>
  );
};

export default LazyLoader;