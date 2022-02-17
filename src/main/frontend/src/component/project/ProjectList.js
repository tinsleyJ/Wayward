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

  handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/project/deleteById/${id}`)
      .then((res) => {
        axios
          .get(`http://localhost:8080/project/getAllProjects`)
          .then((res) => {
            const project = res.data;
            this.setState({ project });
          });
      });
  };

  getBase64 = () => {
    return axios
      .get(`http://localhost:8080/project/getAllProjects`, {
        responseType: "arraybuffer",
      })
      .then((response) =>
        ArrayBuffer.from(response.data, "binary").toString("base64")
      );
  };

  render() {
    localStorage.getItem("loggedIn");
    return (
      <div className="container custom-table-div">
        <h2 className="inline-header">Your Projects</h2>
        <Link to="/add-project" className="fancy-button bg-gradient3">
          Add Project
        </Link>
        <table class="table table-responsive table-bordered table-striped table-hover custom-table">
          <thead className="table-dark">
            <tr>
              <th>Project</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>Deadline</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.project.map((project) => (
              <tr key={project.id}>
                <td>
                  <Link
                    to={{
                      pathname: `/project/${project.id}`,
                      state: project,
                    }}
                    className="btn"
                  >
                    {project.projectName}
                  </Link>
                </td>
                <td>{project.projectDescription}</td>
                <td>{project.startDate}</td>
                <td>{project.deadline}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => this.handleDelete(project.id)}
                  >
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash3-fill"
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
