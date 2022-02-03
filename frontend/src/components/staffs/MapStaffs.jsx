import React, { useState } from 'react';
const MapStaffs = ({ staff }) => {
  const image = staff.attributes.profile.data.attributes;

  const [displayContainer, setDisplayContainer] = useState(false);

  const noScrollBody = () => {
    const body = document.body;
    setDisplayContainer(true)
    return body.classList.add("no-scroll");
  }

  return (
    <div className='container' onClick={() => noScrollBody()}>
      <picture>
        <img loading='lazy'
          src={`${import.meta.env.VITE_APP_DOMAIN}/uploads/${image.formats.small.hash}${image.formats.small.ext}`}
          srcSet={`${import.meta.env.VITE_APP_DOMAIN}/uploads/${image.formats.medium.hash}${image.formats.medium.ext} 920w,
             ${import.meta.env.VITE_APP_DOMAIN}/uploads/${image.formats.large.hash}${image.formats.large.ext} 1366w,
             ${import.meta.env.VITE_APP_DOMAIN}/uploads/${image.hash}${image.ext} 1920w
            `}
          sizes="(min-width: 920px) 920px,
        (min-width: 1366px) 1366px, 
        (min-width: 1920px) 1920px" alt={image.alternativeText} />
      </picture>
      <div className={`display-container ${displayContainer ? 'active' : ''}`}>
        <picture>
          <img loading='lazy'
            src={`${import.meta.env.VITE_APP_DOMAIN}/uploads/${image.formats.small.hash}${image.formats.small.ext}`}
            srcSet={`${import.meta.env.VITE_APP_DOMAIN}/uploads/${image.formats.medium.hash}${image.formats.medium.ext} 920w,
             ${import.meta.env.VITE_APP_DOMAIN}/uploads/${image.formats.large.hash}${image.formats.large.ext} 1366w,
             ${import.meta.env.VITE_APP_DOMAIN}/uploads/${image.hash}${image.ext} 1920w
            `}
            sizes="(min-width: 920px) 920px,
        (min-width: 1366px) 1366px, 
        (min-width: 1920px) 1920px" alt={image.alternativeText} />
        </picture>
        <div className='info'>
          <h2>Namn: {staff.attributes.name}</h2>
          <h3>Erfarenhet: {staff.attributes.experience}år</h3>
          <p>Info: {staff.attributes.biograph}</p>
        </div>
      </div>
    </div>

  );
};

export default MapStaffs;