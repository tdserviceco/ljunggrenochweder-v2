import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import { BACKGROUND_IMAGE } from '../../GraphQL/Queries';
import { defaultBackground } from '../../actions';


const Home = () => {

  const { loading, data, error } = useQuery(BACKGROUND_IMAGE, {
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
    if (error) {
      console.log(error)
      return;
    }
    if (small && !loading) {
      dispatch(defaultBackground(data.uploadFile.data.attributes.formats.small.url));
    }
    if (medium && !loading) {
      dispatch(defaultBackground(data.uploadFile.data.attributes.formats.medium.url));
    }
    if (large && !loading) {
      dispatch(defaultBackground(data.uploadFile.data.attributes.formats.large.url));
    }

    if (HD && !loading) {
      dispatch(defaultBackground(data.uploadFile.data.attributes.url));
    }

    // Debug
    /* if (!loading) {
      console.log(data.uploadFile.data.attributes)
    } */
  };

  useEffect(() => {
    getMedia()
  }, [data, small, medium, large]);



  return (
    <main className="home" role="main" style={{ background: `url(${import.meta.env.VITE_APP_DOMAIN}${bg}) center/cover no-repeat` }}>
      <div className='home-container'>
        <h1>Welcome Home!</h1>
        <h3>Have a seet by the fire</h3>
      </div>    
    </main>
  );
};

export default Home;