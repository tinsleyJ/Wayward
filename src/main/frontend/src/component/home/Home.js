import { Link } from "react-router-dom";

const Home = () => {
  if (!localStorage.getItem("loggedIn")) {
    return (
      <div className="container">
        <h1>Welcome to Wayward</h1>
        <h6>Get started on your path forward.</h6>
        <p> Get organized, stay motivated.</p>
        <h4>
          Lets get going, it's<em> FREE!</em>
        </h4>
        <a href="/register">
          <button className="big-button">Register</button>
        </a>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h3>Hi {localStorage.getItem("loggedIn")}</h3>
        <p> It's time to get organized and stay motivated.</p>{" "}
        <Link to="/project" className="fancy-button bg-gradient3">
          See your project library
        </Link>
      </div>
    );
  }
};
export default Home;
