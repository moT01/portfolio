// package utilities
import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import React from 'react'

// stylesheets
import './footer.css'
import 'font-awesome/css/font-awesome.min.css'

// component
const Footer = () => (
  <footer className='footer'>
    <div>© {new Date().getFullYear()}</div>
    <div className='footer-icons'>
      <a
        href='https://www.github.com/mot01/'
        target='_blank'
        rel='noreferrer noopener'
        className='footer-icon fa fa-github-alt'
      ></a>
      <a
        href='https://www.freecodecamp.org/mot01'
        target='_blank'
        rel='noreferrer noopener'
        className='footer-icon fa fa-free-code-camp'
      ></a>
      <a
        href='https://www.linkedin.com/in/mot01/'
        target='_blank'
        rel='noreferrer noopener'
        className='footer-icon fa fa-linkedin'
      ></a>
      <a
        href='https://codepen.io/mot01'
        target='_blank'
        rel='noreferrer noopener'
        className='footer-icon fa fa-codepen'
      ></a>
    </div>
  </footer>
)

export default Footer
