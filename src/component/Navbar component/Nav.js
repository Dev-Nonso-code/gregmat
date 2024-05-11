<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'
// import { useState } from "react";
import './Nav.css'

export const Nav = () => {

  return (
    <>
      <div className='d-flex text-center justify-content-around bg-primary m-auto'>
        
        <div>
          <Link className='text-danger fw-bolder fs-3' to='/'>Home</Link>
        </div>

        <div>
          <Link className='text-danger fw-bolder fs-3' to='/about'>About</Link>
        </div>

        <div>
          <Link className='text-danger fw-bolder fs-3' to='/dashboard'>API DEV</Link>
        </div>

        <div>
          <Link className='text-danger fw-bolder fs-3' to='/SingTodo'> Todo</Link>
        </div>

        <div>
          <Link className='text-danger fw-bolder fs-3' to='/Todo'>Get Todo</Link>
        </div>

        <div>
          <Link className='text-danger fw-bolder fs-3' to='/signup'>Login</Link>
        </div>

        <div>
          <Link className='text-danger fw-bolder fs-3' to='/Increase'>O&CO2</Link>
        </div>

      </div>
    </>
  )
}
=======
import React from 'react'
import { Link } from 'react-router-dom'
// import { useState } from "react";
import './Nav.css'

export const Nav = () => {

  return (
    <>
      <div className='d-flex text-center justify-content-around bg-primary m-auto'>
        
        <div>
          <Link className='text-danger fw-bolder fs-3' to='/'>Home</Link>
        </div>

        <div>
          <Link className='text-danger fw-bolder fs-3' to='/about'>About</Link>
        </div>

        <div>
          <Link className='text-danger fw-bolder fs-3' to='/dashboard'>API DEV</Link>
        </div>

        <div>
          <Link className='text-danger fw-bolder fs-3' to='/SingTodo'> Todo</Link>
        </div>

        <div>
          <Link className='text-danger fw-bolder fs-3' to='/Todo'>Get Todo</Link>
        </div>

        <div>
          <Link className='text-danger fw-bolder fs-3' to='/signup'>Login</Link>
        </div>

        <div>
          <Link className='text-danger fw-bolder fs-3' to='/Increase'>O&CO2</Link>
        </div>

      </div>
    </>
  )
}
>>>>>>> b3f96a0ef6476e5841931a470a6ee9d672ff2eac
