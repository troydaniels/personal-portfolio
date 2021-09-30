import React from 'react';
import { Link } from 'gatsby';

import Wrapper from './styles';
import NavbarLinks from '../NavbarLinks';
import Container from '../../../common/Container';

const Navbar = () => (
    <Wrapper as={Container}>
        <Link to="/">Troy Daniels</Link>
        <NavbarLinks desktop />
    </Wrapper>
);

export default Navbar;
