import React, { useEffect, useState } from 'react';
import Headline from './Headline';
import Gallery from './Gallery';
import { useQuery, gql } from '@apollo/client'
import { LOAD_ABOUT_PAGE } from '../../GraphQL/Queries';
const AboutSection = () => {
	const [aboutPage, updateAboutPage] = useState(null);
	const { error, loading, data } = useQuery(LOAD_ABOUT_PAGE);

	const fetchData = () => {
		!loading && updateAboutPage(data.about.data.attributes)
	}

	const galleryMap = () => {
		console.log()
		aboutPage.gallery.map((d, key) => <div key={key} className='box'>
			<h2>{d.name}</h2>
			<p>{d.info}</p>
			<img src={`${import.meta.env.VITE_APP_DOMAIN}${d.image.data.attributes.formats.small.url}`} alt={d.image.data.attributes.caption} />
		</div>)
	}



	useEffect(() => {
		fetchData()
	}, [data])
	return (
		<section>
			{loading && <b>Fetching...</b>}
			{!loading && aboutPage !== null &&
				<>
					<Headline title={aboutPage.title.headline} />
					<Gallery gallery={aboutPage.gallery} />
				</>
			}
		</section>
	);
};

export default AboutSection;