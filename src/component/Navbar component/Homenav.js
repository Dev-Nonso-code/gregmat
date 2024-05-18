// /* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Link } from "react-router-dom";
// import { useEffect } from 'react'
import "./Homenav.css";

const Homenav = () => {
  // const navigate = useNavigate

  // useEffect(() => {
  //   boy()
  // },);

  return (
    <>
      {/* <div id="jojo"></div> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid justify-content-between text-center">
          <Link to="/home" id="disable">
            <img className="w-25 h-25" href="###" src="data:image/jpeg;base64,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" alt="" />
            <a className="navbar-brand" href="#">
              GREGMAT
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            {/* // eslint-disable-next-line react/style-prop-object */}
            <ul className="navbar-nav me-auto my-2 my-lg-3 navbar-nav-scroll">
              <li className="nav-item">
                <Link to="/home" id="disable">
                  <a className="nav-link active" aria-current="page" href="##">
                    Home
                  </a>
                </Link>
              </li>
              {/* // first dropdown */}
              <li className="nav-item dropdown" id="show">
                <a
                  className="nav-link dropdown-toggle"
                  href="##"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </a>

                <ul className="dropdown-menu" id="cont">
                  <Link to="" id="disable">
                    <li>
                      <a className="dropdown-item" href="##">
                        TOFEL
                      </a>
                    </li>
                  </Link>
                  <Link to="" id="disable">
                    <li>
                      <a className="dropdown-item" href="##">
                        SAT
                      </a>
                    </li>
                  </Link>
                  <Link to="/dash" id="disable">
                    <li>
                      <a className="dropdown-item" href="##">
                        GRE
                      </a>
                    </li>
                  </Link>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <Link to="/dash" id="disable">
                    <li>
                      <a className="dropdown-item" href="##">
                        IELT
                      </a>
                    </li>
                  </Link>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <Link to="/dash" id="disable">
                    <li>
                      <a className="dropdown-item" href="##">
                        GMAT
                      </a>
                    </li>
                  </Link>
                </ul>
              </li>

              {/* // second dropdown */}

              <li className="nav-item dropdown" id="show">
                <a
                  className="nav-link dropdown-toggle"
                  href="##"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Portal
                </a>
                <ul className="dropdown-menu" id="cont">
                  <Link to="/student/login" id="disable">
                    <li>
                      <a className="dropdown-item" href="##">
                        Student
                      </a>
                    </li>
                  </Link>
                  <Link to="/dash" id="disable">
                    <li>
                      <a className="dropdown-item" href="##">
                        Staff
                      </a>
                    </li>
                  </Link>

                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="##">
                      Something else here
                    </a>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item">
                {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link to="/dash" id="disable">
                  <a id="disable" className="nav-link disabled" aria-disabled="true">
                    For Kids
                  </a>
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Homenav;
