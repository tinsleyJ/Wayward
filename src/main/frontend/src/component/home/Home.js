import UserList from "../user/Userlist";

const Home = () => {
  // adjust once login tokens are implemented
  const isLoggedIn = false;
  // returns a different homepage if you are signed in
  if (!isLoggedIn) {
    return (
      <div class="container">
        <h1>Welcome to Wayward</h1>
        <h6>Get started on your path forward.</h6>
        <p> Get organized, stay motivated.</p>
        <h4>
          Lets get going, it's<em> FREE!</em>
        </h4>
        <a href="/sign-up">
          <button className="big-button">Register</button>
        </a>
      </div>
    );
  } else {
    return (
      <div class="container">
        <h1>Welcome to Wayward</h1>
        <h6>Get started on your path forward.</h6>
        <p> Get organized, stay motivated.</p>
      </div>
    );
  }
};
export default Home;
