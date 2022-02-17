import { Route, withRouter } from "react-router-dom";
import Home from "../home/Home";
import Header from "../header/Header";
import Todo from "../todo/Todo";
import Register from "../user/Register";
import About from "../about/About";
import ThankYou from "../thankYou/ThankYou";
import Clock from "../clock/Clock";
import UserList from "../user/Userlist";
import ProjectList from "../project/ProjectList";
import ProjectCard from "../project/ProjectCard";
import AddProject from "../project/AddProject";
import UpdateProject from "../project/UpdateProject";
import Login from "../user/Login";
import Logo from "../logo/Logo";
import Success from "../thankYou/Success";

const Layout = () => {
  return (
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/todo" component={Todo} />
      <Route path="/about" component={About} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/register/thank-you" component={ThankYou} />
      <Route path="/success" component={Success} />
      <Route path="/user-list" component={UserList} />
      <Route path="/project" component={ProjectList} />
      <Route path="/project/:id" component={ProjectCard} />
      <Route path="/update-details/:id/" component={UpdateProject} />
      <Route path="/add-project" component={AddProject} />
      <Route path="/thank-you" component={ThankYou} />
      <Logo />
      <Clock />
    </div>
  );
};

export default withRouter(Layout);
