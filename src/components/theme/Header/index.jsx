import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Hamburger from './Hamburger'
import Sidebar from './Sidebar'
import { Wrapper, Overlay } from './styles'
import styled from 'styled-components'

export const Header = () => {
  const [sidebar, toggle] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [logo, setLogo] = useState('logoA')

  useEffect(() => {
    var prevScrollpos = window.pageYOffset
    const AboutPage = document.getElementById('about')
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos) {
        setShowNavbar(true)
        AboutPage.getBoundingClientRect().y > 0
          ? setLogo('logoA')
          : setLogo('logoB')
      } else {
        setShowNavbar(false)
      }
      prevScrollpos = currentScrollPos
    }
  })

  return (
    <Wrapper showNavbar={showNavbar}>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Navbar logo={logo} />
      <Hamburger sidebar={sidebar} toggle={toggle} logo={logo} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
    </Wrapper>
  )
}
