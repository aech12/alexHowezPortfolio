import styled from 'styled-components'

export const Wrapper = styled.div`
	padding-bottom: 4rem;
	height: 100vh;
	// background-image: url('../images/rem3.jpg');
	// background-size: cover;
	// background-position: center center;
	// background-repeat: no-repeat;
	// height: 92vh;
	overflow: hidden;
`
export const IntroWrapper = styled.div`
	padding: 4rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	top: 70px;

	@media (max-width: 960px) {
		flex-direction: column;
	}
`

export const Details = styled.div`
	flex: 1;
	text-align: center;

	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 2rem;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 70pt;
		color: #f3f0f0;

		@media (max-width: 680px) {
			font-size: 50pt;
		}
	}

	h4 {
		margin-bottom: 2.5rem;
		font-size: 32pt;
		font-weight: normal;
		color: #a3bd37;
		background: hsla(0, 15%, 1%, 0.63);

		@media (max-width: 680px) {
			font-size: 26pt;
		}
	}
`

export const Thumbnail = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		width: 100%;
	}

	img {
		width: 100%;
	}
`
