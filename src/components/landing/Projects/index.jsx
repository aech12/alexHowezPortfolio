import React from 'react'
import { Container, Card } from 'Common'
import starIcon from 'Static/icons/star.svg'
import forkIcon from 'Static/icons/fork.svg'
import projImg1 from 'Static/images/projects/LACastings.png'
import projImg2a from 'Static/images/projects/Openly1.png'
import projImg2b from 'Static/images/projects/Openly2.png'
import projImg2c from 'Static/images/projects/Openly3.png'
import ghIcon from 'Static/icons/githubWhite.svg'
import {
  Wrapper,
  Grid,
  GridWide,
  Content,
  OverlayMenu,
  ProjectCard,
  ProjectCardLong,
  ImageGallery,
  Icon,
} from './styles'
import Img from 'gatsby-image'

const projects = [
  {
    href: 'https://video-sells-65s9pcu1p-aech12.vercel.app/',
    alt: 'Project 1',
    src: projImg1,
    title: 'LA Castings',
    stack: 'React',
    description: `Cancelled +18 "Castings" website, I was was particularly interested in this project to learn about the
added difficulties of making and deploying an adult website.`,
  },
]
const projects2 = [
  {
    href: 'https://openlyprivate.com/',
    alt: 'Project 2',
    // src: [projImg2a, projImg2b, projImg2c],
    title: 'Openly Private',
    stack: 'React, Nextjs, Nodejs, Express, Mongodb, AWS',
    description: `Trello-like app with a priority on privacy, users must specify the name (and opcional birth date) of people they want to see their boards/posts`,
  },
]

export const Projects = () => {
  return (
    <Wrapper as={Container} id="projects">
      <h2>My Projects 2021</h2>
      <GridWide>
        <ProjectCardLong>
          {projects2.map(project => (
            <>
              <div style={{ width: '100%' }}> </div>

              <ImageGallery>
                <a
                  style={{ cursor: 'pointer' }}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{ maxHeight: '209px' }}
                    src={projImg2a}
                    alt={projImg2a}
                  />
                </a>
                <a
                  style={{ cursor: 'pointer' }}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{ maxHeight: '209px' }}
                    src={projImg2b}
                    alt={projImg2b}
                  />
                </a>
                <a
                  style={{ cursor: 'pointer' }}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{ maxHeight: '209px' }}
                    src={projImg2c}
                    alt={projImg2c}
                  />
                </a>
              </ImageGallery>
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
            </>
          ))}
        </ProjectCardLong>
      </GridWide>

      <Grid>
        <ProjectCard>
          {projects.map(project => (
            <>
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
            </>
          ))}
        </ProjectCard>
      </Grid>
    </Wrapper>
  )
}
