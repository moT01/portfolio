// package utilities
import React from 'react'

// stylesheets
import './footer.css'
import 'font-awesome/css/font-awesome.min.css'

// component
const Footer = () => (
  <footer className='footer'>
    <div>© {new Date().getFullYear()} Tom Mondloch</div>
    <div className='footer-icons'>
      <a
        aria-label='github'
        href='https://www.github.com/mot01/'
        target='_blank'
        rel='noreferrer noopener'
        className='footer-icon fa fa-github-alt'
      >
        {null}
      </a>
      <a
        aria-label='freecodecamp'
        href='https://www.freecodecamp.org/mot01'
        target='_blank'
        rel='noreferrer noopener'
        className='footer-icon fa fa-free-code-camp'
      >
        {null}
      </a>
      <a
        aria-label='linkedin'
        href='https://www.linkedin.com/in/mot01/'
        target='_blank'
        rel='noreferrer noopener'
        className='footer-icon fa fa-linkedin'
      >
        {null}
      </a>
      <a
        aria-label='codepen'
        href='https://codepen.io/mot01'
        target='_blank'
        rel='noreferrer noopener'
        className='footer-icon fa fa-codepen'
      >
        {null}
      </a>
    </div>
  </footer>
)

export default Footer
