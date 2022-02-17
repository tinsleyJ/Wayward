import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
    error: "",
  });

  const history = useHistory();

  const userChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const tempUser = { ...user };
    tempUser[name] = value;
    setUser(tempUser);
  };

  const isValidHandler = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (
      !user.email ||
      !user.username ||
      !user.password ||
      !user.passwordConfirm
    ) {
      user.error = "Please fill in all fields";
      history.push("/register");
    } else {
      if (reg.test(user.email) === false) {
        user.error = "Please enter a valid email address";
        history.push("/register");
      } else {
        if (user.password !== user.passwordConfirm) {
          user.error = "Passwords do not match";
          history.push("/register");
        } else {
          signupSubmitHandler();
        }
      }
    }
  };

  const signupSubmitHandler = () => {
    axios.post("http://localhost:8080/user/register", user).then(() => {
      history.push("/thank-you");
    });
  };

  return (
    <div className="container">
      <form className="row g-3">
        <h3>Sign up below</h3> <p className="simple-error">{user.error}</p>
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
            autoComplete="email"
            required
          />
        </div>
        <div className="col-md-6">
          <label for="inputFirstName" className="form-label">
            Username
          </label>
          <input
            type="text"
            onChange={userChangeHandler}
            name="username"
            value={user.username}
            className="form-control"
            id="inputUsername"
            autoComplete="username"
            required
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
            required
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
            required
          />
        </div>
        <div className="d-grid gap-2 ">
          <button
            className="fancy-button2"
            type="button"
            onClick={isValidHandler}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};
export default Register;
