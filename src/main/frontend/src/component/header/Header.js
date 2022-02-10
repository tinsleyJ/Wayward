import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [signInUser, setSignInUser] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const tempSignIn = { ...signInUser };
    tempSignIn[name] = value;
    setSignInUser(tempSignIn);
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark fixed-header">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Wayward
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/sign-up">
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about-us">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/todo">
                    Todo
                  </Link>
                </li>
                <div></div>
                <li className="nav-item">
                  <Link className="nav-link" to="/user-list">
                    User List
                  </Link>
                </li>{" "}
                <li className="nav-item">
                  <Link className="nav-link" to="/project-list">
                    Project List
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  onChange={changeHandler}
                  name="email"
                  value={signInUser.email}
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                />
                <input
                  className="form-control me-2"
                  onChange={changeHandler}
                  name="password"
                  value={signInUser.password}
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                />
                <button className="btn btn-outline-success" type="button">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Header;
