import React from 'react'
import { Layout, SEO } from '../components/common'
import { Intro, About, Contact, Projects } from '../components/landing'

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <About />
    <Contact />
  </Layout>
)
