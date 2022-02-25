import React from "react";

const Logo = () => {
  var axios = require("axios").default;

  var options = {
    method: "POST",
    url: "https://motivational-quotes1.p.rapidapi.com/motivation",
    headers: {
      "content-type": "application/json",
      "x-rapidapi-host": "motivational-quotes1.p.rapidapi.com",
      "x-rapidapi-key": "d30043b865msh36b4730d7c25cd3p1784c5jsn73a6cad31a12",
    },
    data: { key1: "value", key2: "value" },
  };

  axios
    .request(options)
    .then(function (response) {
      localStorage.setItem("quote", response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div>
      <img
        src={require("../../resources/WaywardLogo.png")}
        alt="Wayward"
        className="logo-home"
      ></img>
      <div className="quote-footer">
        <p>{localStorage.getItem("quote")}</p>
      </div>
    </div>
  );
};
export default Logo;
