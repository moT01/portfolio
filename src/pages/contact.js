// package utilities
import React from 'react'

// components
import Layout from '../components/layout'
import SEO from '../components/seo'

// stylesheets
import './contact.css'

// component
const Contact = () => (
  <Layout>
    <SEO title='Contact' />
    <section className='contact'>
      <p>send me a message.</p>
      <form className='contact-form'>
        <input
          className='contact-field'
          type='text'
          name='name'
          placeholder='name'
        />
        <input
          className='contact-field'
          type='email'
          name='email'
          placeholder='email'
        />
        <input
          className='contact-field'
          type='text'
          name='subject'
          placeholder='subject'
        />
        <textarea
          className='contact-field contact-textarea'
          rows='15'
          placeholder='message'
        />
        <input
          className='contact-field contact-submit'
          type='submit'
          value='send'
        />
      </form>
    </section>
  </Layout>
)

export default Contact
