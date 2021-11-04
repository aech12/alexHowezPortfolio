import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 2rem 0;
`

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 2fr;
  gap: 1.2rem 1.2rem;
  padding-top: 25px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h4 {
    color: #212121;
  }

  p {
    color: #707070;
  }
`

export const Content = styled.div`
  padding: 1rem 0;
`

export const OverlayMenuOld = styled.div`
  p {
    color: black;
    weight: bold;
  }
  opacity: 1;
  background: rgb(0, 255, 193, 0.9);
  position: absolute;
  top: 0;
  left: 35%;
  height: 100%;
  width: 61%;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const OverlayMenu = styled.div`
  p {
    color: black;
    weight: bold;
  }
  height: 100%;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .stack {
    padding-bottom: 5px;
  }
`

export const ProjectCard = styled.div`
  position: relative;
  background: rgb(101, 235, 181, 0.9);
  box-shadow: 1px 2px 3px 3px #ccc;
  overflow: hidden;
  // max-height: 75%;
  img {
    margin: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    margin: 0;
  }
  &:hover img {
    transform: scale(1.05);
    transition: 0.3s;
  }
`

export const GridWide = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 2fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`
export const ProjectCardLong = styled.div`
  position: flex;
  background: rgb(101, 235, 181, 0.9);
  box-shadow: 1px 2px 3px 3px #ccc;
  overflow: hidden;
  // max-height: 75%;
  img {
    margin: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    margin: 0;
  }
`
export const ImageGallery = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Icon = styled.div`
  margin: none;
`
export const Item2 = styled.div``
