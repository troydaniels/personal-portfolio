import React from 'react';
import { Icon } from '@iconify/react';
import gatsbyIcon from '@iconify/icons-logos/gatsby';
import reactIcon from '@iconify/icons-fa-brands/react';
import Container from '../../common/Container';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './social.json';

const Footer = () => (
    <Wrapper>
        <Flex as={Container}>
            <Details>
                <h2>Troy Daniels</h2>
                <span>
                    <p>© All rights reserved {new Date().getFullYear()} </p>
                    <p>
                        Made with{' '}
                        <a
                            href="https://reactjs.org/"
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label="React"
                        >
                            <Icon icon={reactIcon} />
                        </a>{' '}
                        and{' '}
                        <a
                            href="https://www.gatsbyjs.org"
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label="Gatsby"
                        >
                            <Icon icon={gatsbyIcon} />
                        </a>
                    </p>
                </span>
            </Details>
            <Links>
                {social.map(({ id, name, link, icon }) => (
                    <a
                        key={id}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow me on ${name}`}
                    >
                        <img width="24" src={icon}/>
                    </a>
                ))}
            </Links>
        </Flex>
    </Wrapper>
);

export default Footer;
