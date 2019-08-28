import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import dev from '../../../../static/illustrations/dev.svg';
import Header from '../../theme/Header';
import Container from '../../common/Container';
import Button from '../../common/Button';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';
import * as data from '../../../../data/config';

const Intro = () => {
    const [sidebar, toggle] = useState(false);
    return (
        <Wrapper>
            <Header sidebar={sidebar} toggle={toggle}/>
            <IntroWrapper as={Container}>
                <Details>
                    <h1>Hi!</h1>
                    <h4>{data.defaultDescription}</h4>
                    <Button as={AnchorLink} href="#contact">
                        Contact Me
                    </Button>
                </Details>
                <Thumbnail>
                    <img src={dev} alt="I’m Troy and I’m a fullstack engineer"/>
                </Thumbnail>
            </IntroWrapper>
        </Wrapper>
    )
};

export default Intro;
