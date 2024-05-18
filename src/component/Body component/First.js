/* eslint-disable jsx-a11y/no-distracting-elements */
// import React, { useEffect } from 'react'
// import './First.css'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

// const First = () => {
//   const navigate = useNavigate()
//   let token = localStorage.token
//   const endpoint2 = "https://api.github.com/users"

//   const jook = () => {
//     console.log(token);
//   }

//   useEffect(() => {
//     jook()
//     console.log(jook);
//   },);

//   useEffect(() => {
//     axios.get(endpoint2, {
//       headers: {
//         "Authorization": `Bearer ${token}`,
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       }
//     })
//       .then((res) => {
//         console.log(res);
//       }).catch((err) => {
//         if (err) {
//           // localStorage.removeItem("token")
//           localStorage.clear("token")
//           navigate("/login")
//           console.log(err);
//         }
//       })
//   }, [navigate, token]);

//   return (
//     <>
//       <h5 onClick={jook} className='d-none'>mumu</h5>
//       <div>
//         <img src={require("../Img component/nav1.png")} alt="https://images.gregmat.com/media/misc/Group_26.png" />
//       </div>
//     </>

//   )
// }

// export default First

import React from "react";
import Homenav from "../Navbar component/Homenav";
import Dashfoot from "../Footer component/Dashfoot";
import { useNavigate } from "react-router-dom";
import 'animate.css';
import "./First.css";

const First = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/student/login");
  };
  const logout = () => {
    navigate("/student/Signup");
  };
  return (
    <div id="also">
      <marquee behavior="alternate" className="text-primary">Welcome To GREGMAT International</marquee>
      <div className="sticky-top">
        <Homenav />
      </div>
      <main>
        <div id="wh" className="d-flex justify-content-around mt-2">
          <div className="mt-4" id="h4">
            <h4 className="text-info">GREGMAT INTERNATIONAL</h4>
            <h4>Elevate Learning - Maths Mastery</h4>
            <h4>- Past Questions - Academic</h4>
            <h4>Excellence Await!</h4>
            <div className="d-flex mt-5">
              <button onClick={login} className="btn btn-primary w-50 p-3 ">
                Login
              </button>
              <button
                onClick={logout}
                className="btn btn-secondary w-50 p-3"
                id="btn"
              >
                Register
              </button>

            </div>
            <p className="mt-3">Empower Your Academic Journey with <strong>GREGMAT</strong>__Unleash</p>
            <p id="oom">Your Potential through Knowledge Mastery!</p>
          </div>
          <div className="d-flex" class="animate__animated animate__bounceInLeft animate__delay-3s">
            <img src={require("..//Img component/hero-CedOdwlH.png")} alt="" />
          </div>
        </div>
      </main>
      <biafra type="div" className="d-flex">
        <div id="bia" className="p-5" class="animate__animated animate__bounce animate__delay-1s">
          <p className="fs-2 fw-2 text-center">Students</p>

          <p>
            Embark on a journey of knowledge mastery with
            <strong className="p-2 fw-bolder">GREGMAT</strong>
            As
          </p>
          <p>a student, you're about to unlock a world of personalized</p>
          <p>learning, interactive quizzes, and a treasure trove of past</p>
          <p>questions. Prepare to take control of your academic destiny—</p>
          <p>sign up now and let the learning adventure begin!</p>
          <button className="btn btn-warning p-2 w-25" onClick={logout}>Enroll Now</button>
        </div>
        <div id="fra" className="" class="animate__animated animate__bounce animate__repeat-2">
          <p className="fs-2 fw-5 text-center">Managements</p>
          <p>Embark on a journey of knowledge mastery with <strong className="p-2">GREMAT</strong>___As</p>
          <p>a student, you're about to unlock a world of personalized</p>
          <p>learning, interactive quizzes, and a treasure trove of past</p>
          <p>questions. Prepare to take control of your academic destiny—</p>
          <p>sign up now and let the learning adventure begin!</p>
          <button className="btn btn-warning p-2 w-25 m-auto">Enroll Now</button>
        </div>
        <div id="bi" className="d-flex text-center">
          <div>
            <p className="fs-2 fw-5 text-center">Mentorship</p>
            <p>As a tutor, you play a pivotal role in shaping the future of</p>
            <p>education, and <strong>Lauhub</strong>is here to amplify your impact. Join our</p>
            <p>community of educators dedicated to innovation and</p>
            <p>excellence. Experience a platform designed to make teaching</p>
            <p>seamless, interactive, and rewarding.</p>
            <button className="btn btn-warning p-2 w-25 m-auto">Enroll Now</button>
          </div>
          <div class='animate__animated animate__flipInY animate__repeat-2'>
            <img src={require('..//Img component/improve.webp')} alt="" />
          </div>
        </div>
      </biafra>
      <marquee behavior="alternate" className="text-primary">Life began with waking up and loving my mother's face.</marquee>
      <div className='text-center' id="usa">
        <h3>Learn. Practice. Exam-ready</h3>
        <p>Embark on a seamless learning experience designed just for you. Dive into interactive quizzes, explore a rich</p>
        <p>database of past questions. Join us today and make learning a personalized, rewarding journey</p>
      </div>
      <div id="aba">
        <div className="d-block text-center">
          <img src={require("..//Img component/gremat.png")} alt="" />
          <h3 className="mt-4">Learn Wherever You Are</h3>
          <p className="mt-3">Learn from anywhere in the world with</p>
          <p>our online learning platform. All you</p>
          <p>need is a computer and an internet</p>
          <p>connection to get started!</p>
        </div>
        <div id="doof" className="d-block text-center">
          <img src={require('..//Img component/worldp.webp')} alt="" />
          <h3 className="mt-4">Tutor Mentorship</h3>
          <p className="mt-3">Get access to a community of tutors</p>
          <p>dedicated to your success. Our tutors are</p>
          <p>available to answer your questions and</p>
          <p>guide you on your learning journey.</p>
        </div>
        <div className="text-center">
          <img src={require('..//Img component/productive.webp')} alt="" />
          <h3 className="mt-4">Collaborative Learning Hub</h3>
          <p className="mt-3">Join a community of learners dedicated</p>
          <p>to excellence. Collaborate with your</p>
          <p>peers, share ideas, and learn together.</p>
        </div>
      </div>
      <div id="mu" className="d-flex justify-content-around mt-5 ">
        <div id="mumu">
          <img id="mumu" src={require('..//Img component/4key.webp')} alt="" />
        </div>
        <div>
          <h2>Words of Wisdom: Inspiring Quotes on the Power of Education</h2>
          <p>Education is the passport to the future, for tomorrow
            belongs to those who prepare for it today -</p>
          <h4>Malcolm X</h4>
          <p>Technology is just a tool. In terms of getting the kids
            working together and motivating them, the</p>
          <p>teacher is the most important. <strong>- Bill Gates</strong></p>
          <p>intensively and to think critically. Intelligence plus character –
            that is the goal of true education. -</p>
          <h4>Martin Luther King Jr</h4>
        </div>
      </div>

      <footer id="foot">
        <Dashfoot />
      </footer>

    </div>
  );
};

export default First;
