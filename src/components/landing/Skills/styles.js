import styled from 'styled-components'

export const Wrapper = styled.div`
	background-image: url('../illustrations/details.svg');
	background-size: contain;
	background-position: left top;
	background-repeat: no-repeat;
`

export const SkillsWrapper = styled.div`
	padding: 4rem 0 2rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 960px) {
		flex-direction: column;
	}
`

export const Details = styled.div`
	flex: 1;
	padding-left: 2rem;

	@media (max-width: 960px) {
		padding-left: unset;
		width: 100%;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 26pt;
		color: #212121;
	}

	p {
		margin-bottom: 2.5rem;
		font-size: 20pt;
		font-weight: normal;
		line-height: 1.3;
		color: #707070;
		margin: 0;
	}

	span {
		text-decoration: underline;
		color: #14c95f;
		// font-weight: bold;
		cursor: pointer;
	}
`

export const Thumbnail = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 2rem;
	}

	img {
		width: 100%;
	}
`

export const SkillIcon = styled.div`
	flex: 1;
	max-width: 48px;
	background: url('https://api.iconify.design/logos:react.svg') no-repeat center
		center / contain;

	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 2rem;
	}

	img {
		width: 100%;
	}
`

export const IconsWrapper = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;

	img {
		margin: 10px;
	}
	flex-basis: 33% 33% 33%;

	@media (min-width: 601px) {
		width: 100%;
	}

	@media (min-width: 993px) {
		width: 100%;
	}
`

export const StackText = styled.div`
	display: ${props => (props.showStack ? 'block' : 'none')};
	text-align: center;
	flex-wrap: wrap;
	flex-direction: column;
	p {
		color: purple;
		text-decoration: underline;
		font-weight: bold;
		font-size: 2em;
	}
	h3 {
		font-weight: normal;
	}

	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 2rem;
	}
`
