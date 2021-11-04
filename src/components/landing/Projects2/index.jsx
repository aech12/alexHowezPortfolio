import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'Common'
import starIcon from 'Static/icons/star.svg'
import forkIcon from 'Static/icons/fork.svg'
import projImg1 from 'Static/images/projects/scTictactoe.jpg'
import projImg2 from './scToges2.jpg'
import projImg3 from 'Static/images/projects/scSmartbrain.jpg'
import projImg4 from 'Static/images/projects/scChat.jpg'
import ghIcon from 'Static/icons/githubWhite.svg'
import {
  Wrapper,
  Grid,
  Thumbnail,
  Overlay,
  OverlayMenu,
  ProjectCard,
} from './styles'
import Img from 'gatsby-image'

const projects = [
  {
    href: 'https://aech12.github.io/tictactoe/',
    alt: 'Project 1',
    src: projImg1,
    title: 'Tictactoe',
    stack: 'React',
    description: `Human vs Human mode and vs Computer mode as well. The computer
    will always make the best possible move and can't be beaten.`,
  },
  {
    href: 'https://aech12.github.io/tictactoe/',
    alt: 'Project 2',
    src: projImg2,
    title: 'Toges Chess',
    stack: 'React, Bulma',
    description: `Landing page made with Bulma CSS and minimal Javascript.`,
  },
  {
    href: 'https://smart-brain-aech12.herokuapp.com/',
    alt: 'Project 3',
    src: projImg3,
    title: 'Smart Brain',
    stack: 'React',
    description: `Face recognition app, you need to make an account to use it.`,
  },
]

export const Projects2 = () => {
  return (
    <Wrapper as={Container} id="projects">
      <h2>My Practice Projects </h2>
      <Grid>
        {projects.map(project => (
          <ProjectCard>
            <div style={{ width: '100%' }}> </div>

            <a
              style={{ cursor: 'pointer' }}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ maxHeight: '209px' }}
                src={project.src}
                alt={project.alt}
              />
            </a>
            <OverlayMenu>
              <p class="title">{project.title}</p>
              <p
                style={{
                  fontWeight: 600,
                  display: 'inline-block',
                  paddingTop: '5px',
                }}
              >
                Stack:
              </p>
              <p class="stack"> {project.stack}</p>
              <p style={{ fontWeight: 600, display: 'inline' }}>
                Description:
              </p>{' '}
              <p style={{ display: 'inline' }}> {project.description}</p>
            </OverlayMenu>
          </ProjectCard>
        ))}
      </Grid>
    </Wrapper>
  )
}
