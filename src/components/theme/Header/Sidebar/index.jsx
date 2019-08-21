import React from 'react';
import * as PropTypes from 'prop-types';
import NavbarLinks from '../NavbarLinks';
import Wrapper from './styles';

const Sidebar = ({ sidebar, toggle }) => (
    <Wrapper active={sidebar} onClick={toggle}>
        <NavbarLinks />
    </Wrapper>
);

Sidebar.propTypes = {
    sidebar: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
};

export default Sidebar;
