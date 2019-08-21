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
                    © All rights are reserved {new Date().getFullYear()} | Made
                    with{' '}
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
                </span>
            </Details>
            <Links>
                {social.map(({ id, name, link, icon }) => (
                    <a
                        key={id}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`follow me on ${icon}`}
                    >
                        <img width="24" src={icon} alt={name} />
                    </a>
                ))}
            </Links>
        </Flex>
    </Wrapper>
);

export default Footer;
