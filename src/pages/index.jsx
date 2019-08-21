import React from 'react';
import Layout from '../components/common/Layout';
import SEO from '../components/common/SEO';
import Intro from '../components/landing/Intro';
import About from '../components/landing/About';
import Contact from '../components/landing/Contact';
import Projects from '../components/landing/Projects';

export default () => (
    <Layout>
        <SEO />
        <Intro />
        <Projects />
        <About />
        <Contact />
    </Layout>
);
