import React from 'react';

const AboutSection = ({ status }) => {
  const domain = import.meta.env.VITE_APP_DOMAIN;
  const gallery = () =>
    status.gallery.map((data, key) =>
      <div className="container mosaic" key={data.id}>
        <img src={`${domain}${data.image.data.attributes.formats.large.url}`} />
        <h2 className='name'>{data.name}</h2>
        <p className="info">{data.info}</p>
      </div>
    )

  return (
    <section>
      <h1>{status.title.headline}</h1>
      <div className="gallery">
        {gallery()}
      </div>
    </section>
  );
};

export default AboutSection;