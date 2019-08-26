import React from 'react';
import Layout from '../components/common/Layout';
import SEO from '../components/common/SEO';
import Header from '../components/theme/Header';

export default () => (
    <Layout>
        <Header/>
        <SEO title="404: Not found" />
        <div style={{'text-align': 'center'}}>
            <h1>404 NOT FOUND</h1>
            <p>There's nothing here...</p>
        </div>
    </Layout>
);
