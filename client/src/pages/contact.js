// package utilities
import React, { Component } from 'react'
import axios from 'axios'

// components
import Layout from '../components/layout'
import SEO from '../components/seo'

// stylesheets
import './contact.css'

// component
class Contact extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    sendCopy: false,
  }

  onChange = e => {
    if (e.target.type === 'checkbox') {
      this.setState({ [e.target.name]: e.target.checked })
    } else {
      this.setState({ [e.target.name]: e.target.checked || e.target.value })
    }
  }

  onSubmit = e => {
    e.preventDefault()
    // get form data out of state
    const { name, email, subject, message, sendCopy } = this.state
    console.log('submit')
    console.log(name, email, subject, message, sendCopy)

    axios
      .post('/api/contact', {
        name: name,
        email: email,
        subject: subject,
        message: message,
        sendCopy: sendCopy,
      })
      .then(function(response) {
        console.log('response')
        console.log(response)
      })
      .catch(function(error) {
        console.log('error')
        console.log(error)
      })
  }

  render() {
    return (
      <Layout>
        <SEO title='Contact' />
        <section className='contact'>
          <p>send me a message.</p>
          <form className='contact-form' onSubmit={this.onSubmit}>
            <div className='contact-name-email-wrap'>
              <input
                className='contact-field contact-name'
                name='name'
                onChange={this.onChange}
                placeholder='name'
                type='text'
              />
              <input
                className='contact-field contact-email'
                name='email'
                onChange={this.onChange}
                placeholder='email'
                type='email'
              />
            </div>
            <input
              className='contact-field'
              name='subject'
              onChange={this.onChange}
              placeholder='subject'
              type='text'
            />
            <textarea
              className='contact-field contact-textarea'
              name='message'
              onChange={this.onChange}
              placeholder='message'
              rows='15'
            />
            <div className='contact-checkbox-submit-wrap'>
              <div className='contact-checkbox-wrap'>
                <input
                  className='contact-field contact-checkbox'
                  id='sendCopy'
                  name='sendCopy'
                  onChange={this.onChange}
                  type='checkbox'
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
  }
}

export default Contact
