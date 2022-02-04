import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
const MapStaffs = ({ staff, position, id }) => {
  const image = staff.attributes.profile.data.attributes;

  const [displayContainer, setDisplayContainer] = useState(false);

  useEffect(() => {
    return document.body.classList.toggle('no-scroll', displayContainer);
  }, [displayContainer])

  return (
    <>
      <div className={`container container-${id} ${displayContainer ? 'active' : ''} ${position}`} onClick={() => setDisplayContainer(!displayContainer)}>
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
      </div>
      {displayContainer &&
        <div className={`display-container ${displayContainer ? 'active' : ''}`}>
          <button type="button" onClick={() => setDisplayContainer(!displayContainer)}>
            <Icon icon="bytesize:close" />
          </button>
          <div className='display-container-content'>
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
      }
    </>
  );
};

export default MapStaffs;