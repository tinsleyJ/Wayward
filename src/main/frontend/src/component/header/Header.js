import React from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  let history = useHistory();

  const logout = () => {
    localStorage.removeItem("loggedIn");
    history.push("/success");
  };

  const isLoggedIn = localStorage.getItem("loggedIn");
  return (
    <div>
      <header>
        <Navbar className="navbar navbar-expand-md fixed-top custom-header navbar-custom">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              WAYWARD
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
                  <Link className="nav-link" to="/project">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <div className="dropdown custom-header-button">
                  <Dropdown>
                    <Dropdown.Toggle>Test Links</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="/todo">Todo</Dropdown.Item>
                      <Dropdown.Item href="/user-list">User List</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </ul>
              {isLoggedIn ? (
                <span>
                  <h3 className="custom-h3">
                    Welcome {localStorage.getItem("loggedIn")}
                  </h3>
                  <button
                    className="logout-button btn btn-success"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </span>
              ) : (
                <Nav>
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                  <Link to={"/register"} className="nav-link">
                    Register
                  </Link>
                </Nav>
              )}
            </div>
          </div>
        </Navbar>
      </header>
    </div>
  );
};
export default withRouter(Header);
