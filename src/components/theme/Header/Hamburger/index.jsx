import React from 'react'
import { Wrapper, Bar } from './styles'

const Hamburger = ({ sidebar, toggle, logo }) => (
  <Wrapper sidebar={sidebar} onClick={() => toggle(!sidebar)}>
    <Bar top sidebar={sidebar} logo={logo} />
    <Bar mid sidebar={sidebar} />
    <Bar bottom sidebar={sidebar} />
  </Wrapper>
)

export default Hamburger
