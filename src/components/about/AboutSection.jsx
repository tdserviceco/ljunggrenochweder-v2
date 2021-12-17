import React, { useEffect, useState } from 'react';
import Headline from './Headline';
import Gallery from './Gallery';
import { useQuery } from '@apollo/client'
import { LOAD_ABOUT_PAGE } from '../../GraphQL/Queries';
const AboutSection = () => {
	const [aboutPage, updateAboutPage] = useState(null);
	const { error, loading, data } = useQuery(LOAD_ABOUT_PAGE);

	const fetchData = () => {
		!loading && updateAboutPage(data.about.data.attributes)
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