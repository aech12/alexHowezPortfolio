import React from 'react'
import { Header, Footer } from 'Theme'
import { Global } from './styles'
import './fonts.css'

export const Layout = ({ children }) => (
  <>
    <Global />
    <Header />
    {children}
    <Footer />
  </>
)
