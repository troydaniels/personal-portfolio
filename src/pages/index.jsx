import React from 'react';
import Layout from '../components/common/Layout';
import SEO from '../components/common/SEO';
import Intro from '../components/landing/Intro';
import About from '../components/landing/About';
import Contact from '../components/landing/Contact';
import CommercialProjects from '../components/landing/CommercialProjects';
import PersonalProjects from '../components/landing/PersonalProjects';

export default () => (
    <Layout>
        <SEO />
        <Intro />
        <CommercialProjects />
        <PersonalProjects />
        <About />
        <Contact />
    </Layout>
);
