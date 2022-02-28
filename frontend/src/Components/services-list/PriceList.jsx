import React from 'react';
const PriceList = ({ allServices }) => {

  const mapServices = () => {
    return allServices.map((service, key) => {
      return (
        <>
          <h3 className='service-name' key={key}>{service.attributes.name}</h3>
          <p className='service-price'>{service.attributes.price}kr</p>
        </>
      )
    })
  }

  return (
    <div className='service-container'>
      <h2 className='service-title'>Lista av tjänster</h2>
      <div className='service-info' role="list">
        {mapServices()}
      </div>
    </div>
  );
};

export default PriceList;