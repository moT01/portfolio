// package utilities
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

// assets
import TmLogo from '../assets/images/tm-logo'

// stylesheets
import './header.css'

// component
const Header = ({ displayLogo = true, siteTitle }) => (
  <header className='header'>
    {displayLogo ? (
      <Link className='header-logo' to='/'>
        <TmLogo color={'var(--white-2)'} />
      </Link>
    ) : (
      <span></span>
    )}

    <input type='checkbox' id='header-checkbox' aria-hidden='true' />
    <label for='header-checkbox' className='header-hamburger'>
      <div className='header-hamburger-line header-hamburger-line-top'></div>
      <div className='header-hamburger-line header-hamburger-line-middle'></div>
      <div className='header-hamburger-line header-hamburger-line-bottom'></div>
    </label>

    <div className='header-overlay'></div>
    <nav className='header-nav'>
      <Link className='header-nav-link' to='/about'>
        about
      </Link>
      <Link className='header-nav-link' to='/services'>
        services
      </Link>
      <Link className='header-nav-link' to='/projects'>
        projects
      </Link>
      <Link className='header-nav-link' to='/contact'>
        contact
      </Link>
    </nav>
  </header>
)

// proptypes
Header.propTypes = {
  siteTitle: PropTypes.string,
  displayLogo: PropTypes.bool,
}

// default props
Header.defaultProps = {
  siteTitle: ``,
  displayLogo: true,
}

export default Header
