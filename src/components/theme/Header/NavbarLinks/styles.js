import styled, { keyframes } from 'styled-components'

// Create the keyframes
const slideDown = keyframes`s
  0% {
    top: -30px;
  }
  100% {
  	opacity: 1;
    top: 0;
		color: yellow;
  }`

export const Wrapper = styled.div`
	a {
		opacity: 0;
		position: relative;
		// color: red;
		color: #03542e;
		text-decoration: none;
		animation: ${slideDown} 0.7s ease-in 1s forwards;
	}
	a:hover {
		box-shadow: inset 0 -1px 0 red;
		transition: 0.5s ease-in-out;
	}

	${({ desktop }) =>
		desktop
			? `
			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
			: `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`
