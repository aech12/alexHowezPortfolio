import styled from 'styled-components'

export const Button = styled.button`
	cursor: pointer;
	border-radius: 3px;
	padding: 0.7rem 2.5rem;
	border: none;
	-webkit-appearance: none;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	color: ${props => props.col || '#fff'};
	background: ${props => props.bg || props.theme.col};

	&:focus {
		outline: none;
	}

	&:disabled {
		background: gray;
	}

	${({ secondary }) =>
		secondary &&
		`
		background: #001F3F;
	`}
`
