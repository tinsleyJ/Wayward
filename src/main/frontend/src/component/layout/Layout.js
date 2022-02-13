import { Route, withRouter } from "react-router-dom";
import Home from "../home/Home";
import Header from "../header/Header";
import Todo from "../todo/Todo";
import Signup from "../signup/Signup";
import About from "../about/About";
import ThankYou from "../thankYou/ThankYou";
import Clock from "../clock/Clock";
import UserList from "../user/Userlist";
import ProjectList from "../project/ProjectList";
import ProjectPage from "../project/ProjectPage";
import AddProject from "../project/AddProject";

const Layout = () => {
  return (
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/todo" component={Todo} />
      <Route path="/about" component={About} />
      <Route path="/sign-up" component={Signup} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/user-list" component={UserList} />
      <Route path="/project" component={ProjectList} />
      <Route path="/project/:id" component={ProjectPage} />
      <Route path="/add-project" component={AddProject} />
      <Clock />
    </div>
  );
};

export default withRouter(Layout);
