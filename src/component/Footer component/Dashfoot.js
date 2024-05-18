/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import './Dashfoot.css'

function Dashfoot() {

  return (
    <>
      <main id='main' className='d-flex'>
        <div>
          <h3>For Student</h3>
          <p>Become A Student</p>
          <p>Courses</p>
          <p>Learning Experience</p>
          <p>Student Blog</p>
        </div>
        <div>
          <h3>FOR TUTORS</h3>
          <p>Become a tutor</p>
          <p>Tutor Blog</p>
          <p>Tutor Mentorship</p>
          <p>Quote Of The Day</p>
          <p>About Us</p>
        </div>
        <div>
          <h3>GREGMAT</h3>
          <p>Who We Are</p>
          <p>What We Do</p>
          <p>Our Granductions</p>
          <p>Become A Student</p>
          <p>API</p>
        </div>
        <div id='you'>
          <h3>SOCIAL MEDIA</h3>
          <div>
            <a href="##">WhatsApp</a>
          </div>
          <div>
            <a href="##">FaceBook</a>
          </div>
          <div>
            <a href="##">Lidin</a>
          </div>
          <div>
            <a href="##">Twiter</a>
          </div>
          <div>
            <a href="##">IG</a>
          </div>
        </div>
        <div>
          <h3>KIDs/SUPPORT</h3>
          <p>Build Your Kid</p>
          <p>Train Your Kid</p>
          <p>Support The Kids</p>
          <p>Support The Dev</p>
        </div>
      </main>
      <div>
        <h4>GREGMAT</h4>
        <div id='hr'>
        <hr />
        </div>
        <dd className='d-flex'>Legal Information
Terms of use
Privacy Policy
Cookies
Accessibility</dd>
      </div>
    </>
  )
}

export default Dashfoot