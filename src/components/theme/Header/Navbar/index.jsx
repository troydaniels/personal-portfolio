import React from 'react';
import { Link } from 'gatsby';
import Container from '../../../common/Container';
import NavbarLinks from '../NavbarLinks';
import Wrapper from './styles';

const Navbar = () => (
    <Wrapper as={Container}>
        <Link to="/">Troy Daniels</Link>
        <NavbarLinks desktop/>
    </Wrapper>
);
export default Navbar;
