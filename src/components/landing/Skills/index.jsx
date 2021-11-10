import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/skills.svg'
import {
  Wrapper,
  SkillsWrapper,
  Details,
  Thumbnail,
  SkillIcon,
  IconsWrapper,
  StackText,
} from './styles'

export const Skills = () => {
  const [showStack, slide] = useState(false)
  const slideStack = () => {
    console.log('done', showStack)
    slide(!showStack)
  }

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <IconsWrapper>
          <img
            title="React"
            width="100px"
            height="100px"
            src="/icons/portfolio/react.svg"
            alt="React"
          />
          <img
            title="Redux"
            height="100px"
            width="100px"
            src="https://api.iconify.design/logos:redux.svg"
            alt="Redux"
          />
          <img
            title="Jest"
            width="100px"
            height="100px"
            src="https://api.iconify.design/logos:jest.svg"
            alt="Jest"
          />
          <img
            title="Node.js"
            width="100px"
            height="100px"
            src="https://api.iconify.design/logos:nodejs-icon.svg"
            alt="Node.js"
          />
          <img
            title="GraphQL"
            width="100px"
            height="100px"
            src="https://api.iconify.design/logos:graphql.svg"
            alt="GraphQL"
          />
        </IconsWrapper>
        <Details>
          <h1>Hi! I'm a Computer Science student based in Argentina</h1>
          <p>
            I believe consistency, minimalism and innovative technologies, and
            my prefered development{' '}
            <span onClick={() => slideStack()}>stack</span> reflects just that.
          </p>
        </Details>
      </SkillsWrapper>
      <Container>
        <StackText showStack={showStack}>
          <div>
            <p>Front End</p>
            <h3>React, Redux, Gatsby, ES6 Javascript, Sass, Bulma CSS</h3>
          </div>
          <div>
            <p>Back End</p>
            <h3>Node, Express</h3>
          </div>
          <div>
            <p>Others</p>
            <h3>MongoDB, Mongoose, Jest, react-testing-library</h3>
          </div>
        </StackText>
      </Container>
    </Wrapper>
  )
}
