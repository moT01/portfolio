// package utilities
import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

// components
import Footer from './footer'
import Header from './header'

// stylesheets
import './fonts.css'
import './layout.css'
import './variables.css'

// component
const Layout = ({ children, displayLogo = true }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        displayLogo={displayLogo}
        siteTitle={data.site.siteMetadata.title}
      />
      <main className='layout'>{children}</main>
      <Footer />
    </>
  )
}

// proptypes
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
