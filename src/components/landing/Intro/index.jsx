import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from '../../theme'
import { Container, Button } from '../../common'
import dev from 'Static/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'
import * as data from '../../../../data/config';

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hi!</h1>
				<h4>{data.defaultDescription}</h4>
				<Button as={AnchorLink} href="#contact">
					Hire me
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt="I’m Troy and I’m a fullstack engineer" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
