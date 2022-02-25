import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  localStorage.getItem("UserLogin");
  const [user, setSignInUser] = useState({
    email: "",
    password: "",
    error: "",
  });

  const history = useHistory();

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const LoginChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const tempSignIn = { ...user };
    tempSignIn[name] = value;
    setSignInUser(tempSignIn);
  };

  const signInSubmitHandler = () => {
    if (!user.email || !user.password) {
      user.error = "Please fill in all fields";
      history.push("/login");
    } else {
      axios
        .post("http://localhost:8080/user/login", user, axiosConfig)
        .then((res) => {
          if (res.data.password !== user.password) {
            user.error = "Password is incorrect, or account does not exist";
            history.push("/login");
          } else {
            localStorage.setItem("loggedIn", res.data.username);
            history.push("/");
          }
        });
    }
  };
  if (localStorage.getItem("loggedIn")) {
    return (
      <div className="container">
        <em>{localStorage.getItem("loggedIn")} </em>is logged in
      </div>
    );
  } else {
    return (
      <div className="container">
        <form className="row g-3">
          <h3> Sign in below</h3> <p className="simple-error">{user.error}</p>
          <div className="col-md-6">
            <label for="inputEmail" className="form-label">
              Email
            </label>
            <input
              type="text"
              onChange={LoginChangeHandler}
              name="email"
              className="form-control"
              id="inputEmail"
              autoComplete="email"
            />
          </div>
          <div className="col-md-6">
            <label for="inputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              onChange={LoginChangeHandler}
              name="password"
              className="form-control"
              id="inputPassword"
              autoComplete="password"
            />
          </div>
          <button
            className="fancy-button2"
            type="button"
            onClick={signInSubmitHandler}
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
};
export default Login;
