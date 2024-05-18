import React from 'react'
// import First from './First'
import { Link } from 'react-router-dom'
// import Homenav from '../Navbar component/Homenav'

function Notfound() {
    return (
        <>
            <div className='text-center bg-primary h-100'>
                <h1>ERROR 404</h1>
                <h1>PAGE NOT FOUND</h1>
                <h3>Please Go To</h3>
                <div>
                    <Link className='text-info fw-bolder fs-3' to='/home'>Home</Link>
                    {/* <First /> */}
                </div>
            </div>
            {/* <Homenav /> */}
        </>

    )
}

export default Notfound