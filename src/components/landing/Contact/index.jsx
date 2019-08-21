import React from 'react'
import contact from 'Static/illustrations/contact.svg'
import { Container } from '../../common'
import { Wrapper, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
	<Wrapper as={Container} id="contact">
		<Details>
			<ContactForm />
		</Details>
		<Thumbnail>
			<img src={contact} alt="I’m John and I’m a Backend & Devops engineer!" />
		</Thumbnail>
	</Wrapper>
)
