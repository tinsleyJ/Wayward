import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="container">
      <h2>You have successfully logged out.</h2>
      <p>Didn't mean to?</p>
      <Link to={"/login"} className="fancy-button2">
        Login again
      </Link>
    </div>
  );
};
export default Success;
