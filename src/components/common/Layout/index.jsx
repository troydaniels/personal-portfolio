import React from 'react';
import * as PropTypes from 'prop-types';
import Footer from '../../theme/Footer';
import Global from './styles';
import './fonts.css';

const Layout = ({ children }) => (
    <>
        <Global />
        {children}
        <Footer />
    </>
);

Layout.propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
};

export default Layout;
