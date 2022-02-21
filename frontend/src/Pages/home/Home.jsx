import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import { BACKGROUND_IMAGE } from '../../GraphQL/Queries';
import { ServiceList, Staffs, Jumbotron } from '../../Components';
import { defaultBackground } from '../../Redux/actions';

const Home = () => {
  const backgroundImage = useQuery(BACKGROUND_IMAGE, {
    variables: {
      id: 1
    }
  });

  const dispatch = useDispatch();
  const bg = useSelector(state => state.defaultBackground);

  const small = useMediaQuery({ query: '(max-width: 599px)' });
  const medium = useMediaQuery({ query: '(min-width: 600px) and (max-width: 1023px)' });
  const large = useMediaQuery({ query: '(min-width: 1024px) and (max-width: 1439px)' });
  const HD = useMediaQuery({ query: '(min-width: 1440px)' });

  const getMedia = () => {
    if (small) {
      dispatch(defaultBackground(backgroundImage.data.uploadFile.data.attributes.formats.small.url));
    }
    if (medium && !backgroundImage.loading) {
      dispatch(defaultBackground(backgroundImage.data.uploadFile.data.attributes.formats.medium.url));
    }
    if (large && !backgroundImage.loading) {
      dispatch(defaultBackground(backgroundImage.data.uploadFile.data.attributes.formats.large.url));
    }

    if (HD && !backgroundImage.loading) {
      dispatch(defaultBackground(backgroundImage.data.uploadFile.data.attributes.url));
    }

  };

  useEffect(() => {
    if (backgroundImage.error) return console.log(backgroundImage.error)
    !backgroundImage.loading && getMedia()
  }, [backgroundImage.data, small, medium, large, HD]);

  return (
    <main className="home" role="main" style={{ background: `url(${import.meta.env.VITE_APP_DOMAIN}${bg}) center/cover fixed no-repeat` }}>
      <Jumbotron />
      <ServiceList />
      <Staffs />
    </main>
  );
};

export default Home;