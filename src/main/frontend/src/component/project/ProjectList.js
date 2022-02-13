import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ProjectList extends React.Component {
  state = {
    project: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/project/getAllProjects`).then((res) => {
      const project = res.data;
      this.setState({ project });
    });
  }

  render() {
    return (
      <div class="container">
        <h1 class="inline-header">Your Projects</h1>
        <Link
          to="/add-project"
          class="btn btn-outline-success project-add-button"
        >
          Add Project
        </Link>

        <table class="table custom-table  table-striped">
          <thead class="table-dark">
            <tr>
              <th>Image</th>
              <th>Project</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>Deadline</th>
              <th>Current Stage</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.project.map((project) => (
              <tr key={project.id}>
                <td class="project-list-image card">
                  <div class="project-list-image">
                    <Link
                      to={{
                        pathname: `/project/${project.id}`,
                        state: project,
                      }}
                    >
                      {project.image}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-image"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                      </svg>
                    </Link>
                  </div>
                </td>
                <td>{project.projectName}</td>
                <td>{project.projectDescription}</td>
                <td>{project.startDate}</td>
                <td>{project.deadline}</td>
                <td>{project.stage}</td>
                <td>
                  <button className="btn btn-outline-danger">
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash3-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
