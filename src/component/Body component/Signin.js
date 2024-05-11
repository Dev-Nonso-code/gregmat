<<<<<<< HEAD
import React from 'react'
import { useState } from "react";
import axios from "axios";
// import { Nav } from "../Navbar component/Nav"
import './Signin.css'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'

function Signin() {
    const [email, setemail] = useState("email");
    const [password, setpassword] = useState("password");
    const [message, setmessage] = useState("");

    const values = {
        email: email,
        password: password,
    }
    const endpoint = "https://node-e2r3.onrender.com/log/signin";
    let navigate = useNavigate()

    const Login = (e) => {
        e.preventDefault();
        console.log(values);
        axios
            .post(endpoint, values)
            .then((response) => {
                console.log(response.data);
                alert("Login went throung")
                alert(response.data.message);
                setmessage(response.data.message)
                if (response.data.status) {
                    localStorage.token = response.data.token
                    localStorage.firstname = response.data.firstname
                    localStorage.setItem('firstname', response.data.firstname);
                    navigate("/dashboard")
                }
                

            })
            .catch((err) => {
                console.log(err);
                // alert(values);
                alert(err);
                // alert("login faild");
                alert(message);

            }); if (message === false) {
                console.log(message);
                alert(message)
            } else {
            console.log(message);
        }


    };

    return (
        <>
            {/* <Nav /> */}

            <div id='all' className=" border border-2 
           border-primary box-shadow mt-2 text-center">
            <h2 className='text-info'>Login Here</h2>

                <div className={message === "" ? "" : "alert-alert-info"}>{message}</div>

                <form method="POST" typeof="submit" >
                    <div className='form-group'>
                        <div id='input' className='mt-2'>

                            <input
                            // onBlur={formik.handleBlur}
                                onChange={(e) => setemail(e.target.value)}
                                type="text"
                                className="form-control w-50 m-2 m-auto"
                                placeholder="Email"
                            />
                            {/* {formik.touched.email && <small className="text-light">{formik.errors.email}</small>} */}
                        </div>

                        <div className='mt-3'>

                            <input
                                onChange={(e) => setpassword(e.target.value)}
                                type="password"
                                className="form-control w-50 m-auto"
                                placeholder="Password"
                            />
                            

                        </div>

                        <button onClick={Login} className="btn btn-primary mt-2 w-25">
                            Login
                        </button>

                        <p className='mt-5 text-warning'>Don't have account with us, Signup
                            <strong><Link className='text-danger fw-bolder fs-3' to='/signup'>Here</Link></strong> </p>
                    </div>
                </form>
<h4>{message}</h4>

            </div>
        </>
    )
};

// export default Signin;
=======
import React from 'react'
import { useState } from "react";
import axios from "axios";
// import { Nav } from "../Navbar component/Nav"
import './Signin.css'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'

function Signin() {
    const [email, setemail] = useState("email");
    const [password, setpassword] = useState("password");
    const [message, setmessage] = useState("");

    const values = {
        email: email,
        password: password,
    }
    const endpoint = "https://node-e2r3.onrender.com/log/signin";
    let navigate = useNavigate()

    const Login = (e) => {
        e.preventDefault();
        console.log(values);
        axios
            .post(endpoint, values)
            .then((response) => {
                console.log(response.data);
                alert("Login went throung")
                alert(response.data.message);
                setmessage(response.data.message)
                if (response.data.status) {
                    localStorage.token = response.data.token
                    localStorage.firstname = response.data.firstname
                    localStorage.setItem('firstname', response.data.firstname);
                    navigate("/dashboard")
                }
                

            })
            .catch((err) => {
                console.log(err);
                // alert(values);
                alert(err);
                // alert("login faild");
                alert(message);

            }); if (message === false) {
                console.log(message);
                alert(message)
            } else {
            console.log(message);
        }


    };

    return (
        <>
            {/* <Nav /> */}

            <div id='all' className=" border border-2 
           border-primary box-shadow mt-2 text-center">
            <h2 className='text-info'>Login Here</h2>

                <div className={message === "" ? "" : "alert-alert-info"}>{message}</div>

                <form method="POST" typeof="submit" >
                    <div className='form-group'>
                        <div id='input' className='mt-2'>

                            <input
                            // onBlur={formik.handleBlur}
                                onChange={(e) => setemail(e.target.value)}
                                type="text"
                                className="form-control w-50 m-2 m-auto"
                                placeholder="Email"
                            />
                            {/* {formik.touched.email && <small className="text-light">{formik.errors.email}</small>} */}
                        </div>

                        <div className='mt-3'>

                            <input
                                onChange={(e) => setpassword(e.target.value)}
                                type="password"
                                className="form-control w-50 m-auto"
                                placeholder="Password"
                            />
                            

                        </div>

                        <button onClick={Login} className="btn btn-primary mt-2 w-25">
                            Login
                        </button>

                        <p className='mt-5 text-warning'>Don't have account with us, Signup
                            <strong><Link className='text-danger fw-bolder fs-3' to='/signup'>Here</Link></strong> </p>
                    </div>
                </form>
<h4>{message}</h4>

            </div>
        </>
    )
};

// export default Signin;
>>>>>>> b3f96a0ef6476e5841931a470a6ee9d672ff2eac
export default Signin;