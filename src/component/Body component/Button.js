<<<<<<< HEAD
// import React from 'react'


const Button = ({ name, color, sayHellos }) => {
  console.log(color)

  

  return (
    <>
      <button onClick={() => sayHellos(666)} className={color} >{name}</button>
    </>
  )
}

=======
// import React from 'react'


const Button = ({ name, color, sayHellos }) => {
  console.log(color)

  

  return (
    <>
      <button onClick={() => sayHellos(666)} className={color} >{name}</button>
    </>
  )
}

>>>>>>> b3f96a0ef6476e5841931a470a6ee9d672ff2eac
export default Button