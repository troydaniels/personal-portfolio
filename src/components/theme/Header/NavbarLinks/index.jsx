import React from 'react';
import * as PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Wrapper from './styles';
import Resume from '../../../../../static/documents/DANIELStroy.pdf';

const NavbarLinks = ({ desktop }) => (
    <Wrapper desktop={desktop}>
        <AnchorLink href="#about">About</AnchorLink>
        <AnchorLink href="#projects">Projects</AnchorLink>
        <a href={Resume} target = "_blank">Resume</a>
        <AnchorLink href="#contact">Contact</AnchorLink>
    </Wrapper>
);

NavbarLinks.propTypes = {
    desktop: PropTypes.bool,
};

NavbarLinks.defaultProps = {
    desktop: false,
};

export default NavbarLinks;
