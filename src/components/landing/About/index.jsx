import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Container from '../../common/Container';
import Button from '../../common/Button';
import { Wrapper, SkillsWrapper, Details } from './styles';

const About = () => (
    <Wrapper id="about">
        <SkillsWrapper as={Container}>
            <Details>
                <h1>Hi There!</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy.
                </p>
                <Button as={AnchorLink} href="#contact">
                    Contact Me
                </Button>
            </Details>
        </SkillsWrapper>
    </Wrapper>
);

export default About;
