import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";
import AboutSection from '../components/about/AboutSection';
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [aboutSectionTitle, updateAboutSectionTitle] = useState(null)
  const { t, i18n } = useTranslation();
  const aboutApi = import.meta.env.VITE_APP_ABOUTSECTION;

  const getAboutSection = async () => {
    setLoading(true);
    const result = await axios.get(aboutApi);
    updateAboutSectionTitle(result.data.data.attributes);
    setLoading(false);
  }



  useEffect(() => {
    console.log('home')
    getAboutSection()
  }, [])
  return (
    <main className="home" role="main">
      {!loading && aboutSectionTitle !== null &&
        <AboutSection status={aboutSectionTitle} />
      }
    </main>
  );
};

export default Home;