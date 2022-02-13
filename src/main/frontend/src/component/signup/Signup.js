import { useState } from "react";
import axios from "axios";
import React from "react";

const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const userChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const tempUser = { ...user };
    tempUser[name] = value;
    setUser(tempUser);
  };

  const signupSubmitHandler = (event) => {
    const name = event.target.name;
    let isValid = true;

    if (!name.email) {
      isValid = false;
      console.log("Please enter your email");
    }

    if (!name.password) {
      isValid = false;
      console.log("Please enter your password");
    }

    if (!name.passwordConfirm) {
      isValid = false;
      console.log("Please a password confirmation");
    }

    if (name.password !== name.passwordConfirm) {
      isValid = false;
      console.log("Passwords do not match");
    }

    if (isValid !== true) {
      axios.post("http://localhost:8080/user/register", user);
    }
  };

  return (
    <div className="sign-up-container">
      <form className="row g-3">
        <h3> Sign up below</h3>
        <div className="col-md-6">
          <label for="inputFirstName" className="form-label">
            Email
          </label>
          <input
            type="text"
            onChange={userChangeHandler}
            name="email"
            value={user.email}
            className="form-control"
            id="inputEmail"
          />
        </div>
        <div className="col-md-6">
          <label for="inputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={userChangeHandler}
            name="password"
            value={user.password}
            className="form-control"
            id="inputPassword"
          />
        </div>
        <div className="col-md-6">
          <label for="inputPasswordConfirm" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            onChange={userChangeHandler}
            name="passwordConfirm"
            value={user.passwordConfirm}
            className="form-control"
            id="inputPasswordConfirm"
          />
        </div>
        <div className="d-grid gap-2 ">
          <button
            className="bg-dark btn btn-outline-success"
            type="button"
            onClick={signupSubmitHandler}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
