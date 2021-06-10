import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Skills, Contact, Projects, Projects2 } from 'Components/landing'
import { ThemeProvider } from 'styled-components'
import lightTheme from '../themes/lightTheme'

console.log('env', process.env.NODE_ENV)

export default () => (
  <ThemeProvider theme={lightTheme}>
    <Layout>
      <SEO />
      <Intro />
      <Skills />
      <Projects />
      <Projects2 />
      <Contact />
    </Layout>
  </ThemeProvider>
)
