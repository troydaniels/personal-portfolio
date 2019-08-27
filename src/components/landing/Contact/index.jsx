import React from 'react';
import contact from '../../../../static/illustrations/contact.svg';
import Container from '../../common/Container';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

const Contact = () => (
    <Wrapper as={Container} id="contact">
        <Details>
            <ContactForm />
        </Details>
        <Thumbnail>
            <img
                src={contact}
                alt="I’m Troy and I’m a full stack engineer!"
            />
        </Thumbnail>
    </Wrapper>
);

export default Contact;
