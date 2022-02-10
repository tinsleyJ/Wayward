import React from "react";
import axios from "axios";

export default class ProjectList extends React.Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/project/getAllProjects`).then((res) => {
      const projects = res.data;
      this.setState({ projects });
    });
  }

  render() {
    return (
      <ul>
        {this.state.projects.map((project) => (
          <li key={project.id}>
            {project.projectName} {project.projectDescription}
          </li>
        ))}
      </ul>
    );
  }
}
