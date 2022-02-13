import React from "react";
import axios from "axios";
import Todo from "../todo/Todo";

export default class ProjectPage extends React.Component {
  state = {
    project: [],
  };

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
              <th></th>
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
              <th>Current Stage</th>
            </tr>
            <tr>
              <td>{state.stage}</td>
            </tr>
          </tbody>
        </table>
        <Todo></Todo>
      </div>
    );
  }
}
