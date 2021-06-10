import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'Common'
import starIcon from 'Static/icons/star.svg'
import forkIcon from 'Static/icons/fork.svg'
import projImg1 from 'Static/images/projects/scTictactoe.jpg'
import projImg2 from 'Static/images/projects/scToges.jpg'
import projImg3 from 'Static/images/projects/scSmartbrain.jpg'
import projImg4 from 'Static/images/projects/scChat.jpg'
import ghIcon from 'Static/icons/githubWhite.svg'
import {
  Wrapper,
  Grid,
  Content,
  Thumbnail,
  Overlay,
  OverlayMenu,
  ProjectCard,
  Icon,
} from './styles'
import Img from 'gatsby-image'

export const Projects2 = () => {
  // const {
  //  github: {
  //    repositoryOwner: {
  //      repositories: { edges },
  //    },
  //  },
  // } = useStaticQuery(graphql`
  //  {
  //    github {
  //      repositoryOwner(login: "aech12") {
  //        repositories(
  //          first: 8
  //          orderBy: { field: STARGAZERS, direction: DESC }
  //        ) {
  //          edges {
  //            node {
  //              name
  //              url
  //              stargazers {
  //                totalCount
  //              }
  //            }
  //          }
  //        }
  //      }
  //    }
  //  }
  // `)
  return (
    <Wrapper as={Container} id="projects">
      <h2>My Practice Projects </h2>
      <Grid>
        <a
          href="https://aech12.github.io/tictactoe/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard>
            <Thumbnail>
              <img src={projImg1} alt="Project 1" />
            </Thumbnail>
            <Overlay>
              <OverlayMenu>
                <p>Tictactoe</p>
                <p>
                  Human vs Human mode and vs Computer mode as well. The computer
                  will always make the best possible move and can't be beaten.
                </p>
                <Icon>
                  <img src={ghIcon} width="30px" alt="Github icon" />
                </Icon>
              </OverlayMenu>
            </Overlay>
          </ProjectCard>
        </a>
        <a
          href="https://aech12.github.io/togesChess/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard>
            <Thumbnail>
              <img src={projImg2} alt="Project 2" />
            </Thumbnail>
            <Overlay>
              <OverlayMenu>
                <p>Toges Chess</p>
                <p>Landing page made with Bulma CSS and minimal Javascript.</p>
                <Icon>
                  <img src={ghIcon} width="30px" alt="Github icon" />
                </Icon>
              </OverlayMenu>
            </Overlay>
          </ProjectCard>
        </a>
        <a
          href="https://smart-brain-aech12.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard>
            <Thumbnail>
              <img src={projImg3} alt="Project 3" />
            </Thumbnail>
            <Overlay>
              <OverlayMenu>
                <p>Smart Brain</p>
                <p>
                  Face recognition app, you need to make an account to use it.
                </p>
                <Icon>
                  <img src={ghIcon} width="30px" alt="Github icon" />
                </Icon>
              </OverlayMenu>
            </Overlay>
          </ProjectCard>
        </a>
      </Grid>
    </Wrapper>
  )
}
