import React from 'react';
const PriceList = ({ allServices }) => {

  const mapServices = () => {
    return allServices.map((service, key) => {
      return (
        <li key={key}>{service.attributes.name} - {service.attributes.price}kr</li>
      )
    })
  }

  return (
    <>
      <h2>Lista av tjänster</h2>
      <ul role="list">
        {mapServices()}
      </ul>
    </>
  );
};

export default PriceList;