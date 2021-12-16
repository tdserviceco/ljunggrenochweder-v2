import React from 'react';

const Gallery = ({ gallery }) => {
  return (
    <div className='gallery container mosaic'>
      {gallery.map((d, key) => <div key={key} className='box'>
        <h2>{d.name}</h2>
        <p>{d.info}</p>
        <img src={`${import.meta.env.VITE_APP_DOMAIN}${d.image.data.attributes.formats.small.url}`} alt={d.image.data.attributes.caption} />
      </div>)}
    </div>
  );
};

export default Gallery;