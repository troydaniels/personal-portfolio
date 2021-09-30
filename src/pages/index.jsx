import React from 'react';

import SEO from '../components/common/SEO';
import Intro from '../components/landing/Intro';
import About from '../components/landing/About';
import Layout from '../components/common/Layout';
import Contact from '../components/landing/Contact';
import PersonalProjects from '../components/landing/PersonalProjects';
import CommercialProjects from '../components/landing/CommercialProjects';

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
