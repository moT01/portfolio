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
        <div className='contact-name-email-wrap'>
          <input
            className='contact-field contact-name'
            type='text'
            name='name'
            placeholder='name'
          />
          <input
            className='contact-field contact-email'
            type='email'
            name='email'
            placeholder='email'
          />
        </div>
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
        <div className='contact-checkbox-submit-wrap'>
          <div className='contact-checkbox-wrap'>
            <input
              className='contact-field contact-checkbox'
              type='checkbox'
              id='sendCopy'
              name='sendCopy'
              value='sendCopy'
            />
            <label>send yourself a copy</label>
          </div>
          <input
            className='contact-field contact-submit'
            type='submit'
            value='send'
          />
        </div>
      </form>
    </section>
  </Layout>
)

export default Contact
