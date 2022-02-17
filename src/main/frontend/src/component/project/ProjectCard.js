import React from "react";
import axios from "axios";
import Todo from "../todo/Todo";
import { Link } from "react-router-dom";
import { Modal, Table } from "reactstrap";

export default class ProjectPage extends React.Component {
  componentDidMount() {
    const { state } = this.props.location;
    axios
      .get(`http://localhost:8080/project/findById/${state.id}`)
      .then((response) => {
        const project = response.data;
        this.setState({ project });
      });
  }

  render() {
    const { state } = this.props.location;
    return (
      <Modal
        isOpen={true}
        toggle={true}
        data-keyboard="false"
        modalTransition={{ timeout: 500 }}
      >
        <div className="container">
          <h4 className="PageHeading">Project: {state.projectName}</h4>
          <div>
            <Link
              to={{
                pathname: `/update-details/${state.id}`,
                state: state,
              }}
            >
              <svg
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
            </Link>
            <Table>
              <thead>
                <h6>Description:</h6>
              </thead>
              <tbody>
                <tr>{state.projectDescription}</tr>
                <tr>
                  <td>
                    <h5>Start Date</h5>
                  </td>
                  <td>
                    <h5>Deadline</h5>
                  </td>
                </tr>
                <tr>
                  <td>{state.startDate}</td>
                  <td>{state.deadline}</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <h5>Timeline</h5>
          <Todo></Todo>
        </div>
      </Modal>
    );
  }
}
