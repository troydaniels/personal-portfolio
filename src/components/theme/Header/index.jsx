import React, { useState } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Hamburger from './Hamburger';
import { Wrapper, Overlay } from './styles';

const Header = () => {
    const [sidebar, toggle] = useState(false);
    return (
        <Wrapper>
            <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
            <Navbar />
            <Hamburger sidebar={sidebar} toggle={toggle} />
            <Sidebar sidebar={sidebar} toggle={toggle} />
        </Wrapper>
    );
};

export default Header;
