import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/common/Layout';
import SEO from '../components/common/SEO';

export default () => (
    <Layout>
        <SEO title="404: Not found" />
        <div
            style={{
                display: 'flex',
                'flex-direction': 'column',
                'justify-content': 'center',
                'align-items': 'center',
                position: 'relative',
                top: '100px',
            }}
        >
            <h1>404 NOT FOUND</h1>
            <p>There's nothing here...</p>
            <Link to="/">Click here to head home</Link>
        </div>
    </Layout>
);
