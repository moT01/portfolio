// package utilities
import React from 'react'

// local components
import Layout from '../components/layout'
import SEO from '../components/seo'

// assets
import TmLogo from '../assets/images/tm-logo'

// stylesheets
import './index.css'

// component
const IndexPage = () => (
  <Layout displayLogo={false}>
    <SEO title='Home' />
    <section className='index'>
      <TmLogo color='var(--white-2)' className='index-logo' />
      <h1 className='index-description'>full stack web developer</h1>
    </section>
  </Layout>
)

export default IndexPage
