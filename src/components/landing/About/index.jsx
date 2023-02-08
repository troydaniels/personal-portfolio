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
                        href="https://www.atlassian.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Drawboard"
                    >
                        Atlassian
                    </a>
                    , as a full stack software engineer on the Jira Advanced
                    Roadmaps team.
                    <br />
                    I&apos;m passionate about learning, mentoring & problem
                    solving.
                    <br />
                    <br />
                    I&apos;ve come to realise that software development
                    isn&apos;t really about writing code.
                    <br />
                    It&apos;s about effectively communicating complex and
                    abstract ideas to others. To a machine, to customers, to
                    your peers, to stakeholders, and (often hardest of all) your
                    future self.
                </p>
                <Button as={AnchorLink} href="#contact">
                    Get In Touch
                </Button>
            </Details>
        </SkillsWrapper>
    </Wrapper>
);

export default About;
