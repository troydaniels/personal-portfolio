import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from '../../common'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const About = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Details>
				<h1>Hi There!</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry’s standard dummy.
				</p>
				<Button as={AnchorLink} href="#contact">
					Contact Me
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
