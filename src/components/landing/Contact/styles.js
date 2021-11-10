import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Details = styled.div`
  flex: 1;
  padding-right: 2rem;

  @media (max-width: 960px) {
    padding-right: unset;
    width: 100%;
    order: 1;
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
  }
`

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;

    img {
      display: none;
    }
  }

  img {
    width: 100%;
  }
`

export const FreelanceLink = styled.div`
  display: inline;
  background-color: #ff5a5f;
  padding: 0.5rem 1rem;
  margin-right: 1rem;

  a {
    color: white;
  }

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`
