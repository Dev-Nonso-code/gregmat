import React, { useState } from "react"
import { Link } from "react-router-dom"
import './header.css'

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/student/home'>Home</Link>
            </li>
            <li>
              <Link to='/student/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/student/about'>About</Link>
            </li>
            <li>
              <Link to='/student/team'>Team</Link>
            </li>
            <li>
              <Link to='/student/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/student/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/student/contact'>Contact</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
