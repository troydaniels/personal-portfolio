import React from 'react';
import * as PropTypes from 'prop-types';

import { Wrapper, Bar } from './styles';

const Hamburger = ({ sidebar, toggle }) => (
    <Wrapper sidebar={sidebar} onClick={() => toggle(!sidebar)}>
        <Bar top sidebar={sidebar} />
        <Bar mid sidebar={sidebar} />
        <Bar bottom sidebar={sidebar} />
    </Wrapper>
);

Hamburger.propTypes = {
    sidebar: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
};

export default Hamburger;
