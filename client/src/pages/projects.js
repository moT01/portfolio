// package utilities
import React from 'react'

// local components
import Layout from '../components/layout'
import SEO from '../components/seo'

// assets
import fishFinder from '../assets/images/projects/fish-finder.jpg'

// stylesheets
import './projects.css'

// component
const Projects = () => (
  <Layout>
    <SEO title='Projects' />
    <section className='projects'>
      <div className='project-wrap'>
        <div className='project-header'>
          <img className='project-image' src={fishFinder} alt='fish finder' />
          <div className='project-title'>fish finder</div>
        </div>

        <div className='project-details'>
          <a
            className='project-link'
            href='https://fish-finder.glitch.me/'
            target='_blank'
            rel='noreferrer noopener'
          >
            view project
          </a>
          <a
            className='project-link'
            href='https://github.com/moT01/fishFinder'
            target='_blank'
            rel='noreferrer noopener'
          >
            view source
          </a>
        </div>
      </div>
    </section>
  </Layout>
)

export default Projects
