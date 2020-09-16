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
                    I currently work in Melbourne at{' '}
                    <a
                        href="https://coreplus.com.au/"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="coreplus"
                    >
                        coreplus
                    </a>
                    , as a software engineer.
                    <br />
                    I&apos;m passionate about learning, mentoring & problem
                    solving, as well as delivering well written, considered and
                    extensible code.
                </p>
                <Button as={AnchorLink} href="#contact">
                    Get In Touch
                </Button>
            </Details>
        </SkillsWrapper>
    </Wrapper>
);

export default About;
