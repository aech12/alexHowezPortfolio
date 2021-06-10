import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'Common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper, LogoImg } from './styles'
import logoA from '../Logo/a11.png'
import logoB from '../Logo/a12.png'

const Navbar = ({ logo }) => (
  <Wrapper as={Container}>
    <Link to="/">
      <LogoImg>
        <img src={logo === 'logoA' ? `${logoA}` : `${logoB}`} width="48px" />
      </LogoImg>
    </Link>
    <NavbarLinks desktop />
  </Wrapper>
)

export default Navbar
