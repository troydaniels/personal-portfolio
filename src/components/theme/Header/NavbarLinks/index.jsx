import React from 'react';
import * as PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Wrapper from './styles';

const NavbarLinks = ({ desktop }) => (
    <Wrapper desktop={desktop}>
        <AnchorLink href="#about">About</AnchorLink>
        <AnchorLink href="#projects">Projects</AnchorLink>
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
