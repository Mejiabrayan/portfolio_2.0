import React from 'react';
import { Suspense } from 'react';
import Container from 'components/Container';
import ContactForm from 'components/Contact';

export default function Contact() {
    return (
        <Suspense fallback={null}>
            <Container>
               <ContactForm />
            </Container>
        </Suspense>
    );
}