import React from 'react'
import { Container } from 'Common'
import contact from 'Static/illustrations/contact.svg'
import { Wrapper, Details, Thumbnail, FreelanceLink } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <div>
        <h2>Hire me on:</h2>
        <FreelanceLink>
          <a
            href="https://www.freelancer.com/u/aech12"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freelance.com
          </a>
        </FreelanceLink>
        <FreelanceLink>
          <a
            href="https://www.guru.com/freelancers/alexhowez"
            target="_blank"
            rel="noopener noreferrer"
          >
            Guru.com
          </a>
        </FreelanceLink>
      </div>
      <h2 style={{ marginTop: '20px' }}>Contact Me</h2>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m John and I’m a Backend & Devops engineer!" />
    </Thumbnail>
  </Wrapper>
)
