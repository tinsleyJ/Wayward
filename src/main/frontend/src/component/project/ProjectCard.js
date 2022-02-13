import React from "react";
import axios from "axios";
import Todo from "../todo/Todo";
import { Link } from "react-router-dom";

export default class ProjectPage extends React.Component {
  componentDidMount() {
    axios
      .get(`http://localhost:8080/project/findById/{id}`)
      .then((response) => {
        const projects = response.data;
        this.setState({ projects });
      });
  }

  render() {
    const { state } = this.props.location;
    return (
      <div class="container">
        <script src="popper.js"></script>

        <table class="table custom-table">
          <thead class="table-dark">
            <tr>
              <th>Project Name: {state.projectName}</th>
              <th></th>
              <th>
                Edit Project{" "}
                <Link
                  to={{
                    pathname: `/project/${state.id}/edit-details`,
                    state: state,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg>
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={state.image} alt="yolo" />
              </td>
            </tr>
            <tr>{state.projectDescription}</tr>
            <th>Start Date</th>
            <th>Deadline</th>

            <tr>
              <td>{state.startDate}</td>
              <td>{state.deadline}</td>
            </tr>
            <tr>
              <th>
                Timeline - <em> setup function to grab step creation time</em>
              </th>
            </tr>
            <tr>
              <Todo></Todo>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
