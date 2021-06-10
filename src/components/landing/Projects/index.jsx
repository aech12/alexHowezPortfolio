import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'Common'
import starIcon from 'Static/icons/star.svg'
import forkIcon from 'Static/icons/fork.svg'
import projImg1 from 'Static/images/projects/LACastings.png'
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

export const Projects = () => {
	const goToURL = url => {}
	return (
		<Wrapper as={Container} id="projects">
			<h2>My Projects 2021</h2>
			<Grid>
				<a
					href="https://video-sells-65s9pcu1p-aech12.vercel.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<ProjectCard onClick>
						<Thumbnail>
							<img src={projImg1} alt="Project 1" />
						</Thumbnail>
						<Overlay>
							<OverlayMenu>
								<p>LA Castings</p>
								<p>
									Cancelled +18 "Castings" website. I was interested in this
									project because I wanted to learn about the added difficulties
									of making an adult website.
								</p>
							</OverlayMenu>
						</Overlay>
					</ProjectCard>
				</a>
			</Grid>
		</Wrapper>
	)
}
