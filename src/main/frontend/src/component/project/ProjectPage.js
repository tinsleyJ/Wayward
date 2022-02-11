import React from "react";
import axios from "axios";
import Todo from "../todo/Todo";

export default class ProjectList extends React.Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    // eslint-disable-next-line array-callback-return
    this.props.projects.map((projects) => {
      const apiLink = `http://localhost:8080/project/findById/`;
      const key = projects.id;
      const url = apiLink + key;
      this.getData = () => {
        axios.get(url).then((res) => {
          const newProject = {
            id: projects._id,
            name: projects.projectName,
            description: projects.projectDescription,
            startDate: projects.startDate,
            deadline: projects.deadline,
            stage: projects.stage,
          };
          this.setState({
            projects: [...this.state.projects, newProject],
          });
        });
      };
    });
  }

  render() {
    return this.state.projects.map((project) => {
      return (
        <div>
          <p>some text testing</p>
          {this.state.projects.map((projects) => (
            <table key={projects.id}>
              <thead>
                <td>Name</td>
              </thead>
              <li>
                {projects.projectName} {projects.projectDescription}
              </li>
            </table>
          ))}
          <Todo></Todo>
        </div>
      );
    });
  }
}
