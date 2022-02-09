import Header from "../header/Header";
import Todo from "../todo/Todo";
import Signup from "../signup/Signup";
import About from "../about/About";
import ThankYou from "../thankYou/ThankYou";
import Clock from "../clock/Clock";
import { Route, withRouter } from "react-router-dom";
import Preferences from "../preferences/Preferences";

const Layout = () => {
  return (
    <div>
      <Header />
      <Route path="/todo" component={Todo} />
      <Route path="/about-us" component={About} />
      <Route path="/sign-up" component={Signup} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/preferences" component={Preferences} />
      <Clock />
    </div>
  );
};

export default withRouter(Layout);
