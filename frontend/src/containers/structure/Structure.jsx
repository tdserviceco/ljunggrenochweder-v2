import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client'
import { BACKGROUND_IMAGE } from '../../GraphQL/Queries';
import { Loader } from '../../components';

const Structure = () => {
  const { loading, data, error } = useQuery(BACKGROUND_IMAGE, {
    variables: {
      id: 1
    }
  });
  const [mediaData, setMediaData] = useState(undefined)

  const getMedia = () => {
    if (error) {
      console.log(error)
      return;
    }
    !loading && setMediaData(data.uploadFile.data.attributes)
  }

  useEffect(() => {
    document.title = 'Struktur av sidan!'
    getMedia()
  }, [data])
  return (
    <section className='demo'>
      <h1>This is the main heading</h1>
      <h2>This is the second level heading</h2>
      <h3>This is the third level heading</h3>
      <p>This is a paragraph with a few words.</p>

      <p>This is a new paragraph. Its contents will start on a new line after the previous one. Again there is no limit to how many sentences this paragraph can contain. Note that the browser will ignore blank spaces        that         you        place        in       between        words       like this.
        It will also ignore anything you start on a new line like this sentence.
        And this one…
        And also spaces you put before lines like with this one.
      </p>
      <p>But it will start this on a new line!</p>
      <blockquote>
        <p>Indents done like this will work instead. Note that you still need to use the paragraph tag to start it on a new line.</p>
        <p>This is the next paragraph, and is also indented. Neat!</p>
        <p>Remember, use the blockquote to indent something only if you can't use CSS. The true purpose of the blockquote element is to mark text that is a long quote!</p>
      </blockquote>


      <ul role="list">
        UL with role of list
        <li>
          List item
        </li>
        <li>
          <Link to="#">List item with a Link</Link>
        </li>
      </ul>
      {loading && <Loader />}
      {
        !loading && mediaData !== undefined &&
        <div style={{ height: '400px', width: '600px' }}>
          <img
            loading='lazy'
            src={`${import.meta.env.VITE_APP_DOMAIN}/uploads/${mediaData.formats.small.hash}${mediaData.formats.small.ext}`}
            srcSet={`${import.meta.env.VITE_APP_DOMAIN}/uploads/${mediaData.formats.medium.hash}${mediaData.formats.medium.ext} 920w,
              ${import.meta.env.VITE_APP_DOMAIN}/uploads/${mediaData.formats.large.hash}${mediaData.formats.large.ext} 1366w,
            `}
            sizes="(min-width: 920px) 920px,
        (min-width: 1366px) 1366px"
            alt={`${mediaData.caption}`}
          />
        </div>
      }

      <ul role="list">
        UL with role of list 2
        <li>
          List item 2
        </li>
        <li>
          <Link to="#">List item with a Link 2</Link>
        </li>
      </ul>


    </section >
  );
};

export default Structure;