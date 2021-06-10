import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { graphql } from 'gatsby'
import { Container, Button } from 'Common'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'
import dev from 'Static/illustrations/dev.svg'
import StyledBackgroundSection from '../Background/Background'

export const Intro = () => (
	<StyledBackgroundSection>
		<Wrapper>
			<IntroWrapper as={Container}>
				<Container>
					<Details>
						<h1>Alex Howez</h1>
						<h4>Fullstack Web Developer</h4>
						<Button col={'black'} as={AnchorLink} href="#contact">
							Contact Me
						</Button>
					</Details>
				</Container>
			</IntroWrapper>
		</Wrapper>
	</StyledBackgroundSection>
)

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "blog/avatars/kyle-mathews.jpeg" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `
// <Container>
// <Thumbnail>
// <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
// </Thumbnail>
// </Container>
