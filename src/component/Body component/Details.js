// to show my chat box
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const Details = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([]));
  let { nonso } = useParams()
  console.log(nonso);
  const items = (localStorage.getItem('writing'));
  // const time = new Date()
  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString());
   
}, []);
  return (
    <>
      <h1>
        welcomme to more details about
        <p>
          {nonso}
        </p>
      </h1>
      <div className='mt-2 bg-primary border border-3 border-danger'>
      <p>{currentTime}</p>
      <h3>{items}</h3>
      </div>
    </>
  )
}

export default Details