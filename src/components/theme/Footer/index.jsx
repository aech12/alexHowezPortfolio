import React from 'react'
import { Container } from 'Common'
import { Wrapper, Flex, Links, Details } from './styles'
import social from './social.json'

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<h2>Find Me</h2>
			</Details>
			<Links>
				{social.map(({ id, name, link, icon, title }) => (
					<a
						key={id}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`follow me on ${name}`}
					>
						<img width="24" src={icon} alt={name} title={title} />
					</a>
				))}
			</Links>
		</Flex>
	</Wrapper>
)
