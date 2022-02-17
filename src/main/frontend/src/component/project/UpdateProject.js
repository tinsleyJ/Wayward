import React from "react";
import axios from "axios";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

export default class UpdateProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: "",
      projectDescription: "",
      startDate: "",
      deadline: "",
      image: "",
    };
    this.onChangeProjectName = this.onChangeProjectName.bind(this);
    this.onChangeProjectDescription =
      this.onChangeProjectDescription.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeDeadline = this.onChangeDeadline.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
  }
  componentDidMount() {
    axios
      .get(
        "http://localhost:8080/project/findById/" + this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          projectName: response.data.projectName,
          projectDescription: response.data.projectDescription,
          startDate: response.data.startDate,
          deadline: response.data.startDate,
          image: response.data.image,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeProjectName(e) {
    this.setState({ projectName: e.target.value });
  }
  onChangeProjectDescription(e) {
    this.setState({ projectDescription: e.target.value });
  }
  onChangeStartDate(e) {
    this.setState({ startDate: e.target.value });
  }
  onChangeDeadline(e) {
    this.setState({ deadline: e.target.value });
  }
  onChangeImage(e) {
    this.setState({ image: e.target.value });
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    const project = {
      Id: this.props.match.params.id,
      projectName: this.state.projectName,
      projectDescription: this.state.projectDescription,
      startDate: this.state.startDate,
      deadline: this.state.deadline,
      image: this.state.image,
    };
    console.log(project);

    axios
      .put(
        `http://localhost:8080/project/updateProjectDetailsById/${this.props.match.params.id}`,
        project
      )
      .then((res) => {
        axios
          .get(`http://localhost:8080/project/getAllProjects`)
          .then((res) => {
            const project = res.data;
            this.setState({ project });
            window.location = "/project";
          });
      });
  };

  render() {
    const { state } = this.props.location;
    return (
      <div className="container">
        <h4 className="PageHeading">
          Update Project Information for {state.projectName}
        </h4>
        <Form className="form" onSubmit={this.onSubmitHandler}>
          <Col>
            <FormGroup row>
              <Label for="name" sm={2}>
                Name
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="Name"
                  value={this.state.projectName}
                  onChange={this.onChangeProjectName}
                  placeholder="Enter Name"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="text" sm={2}>
                Description
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="Description"
                  value={this.state.projectDescription}
                  onChange={this.onChangeProjectDescription}
                  placeholder="Enter Description"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="text" sm={2}>
                Start Date
              </Label>
              <Col sm={10}>
                <Input
                  type="date"
                  name="Start Date"
                  value={this.state.startDate}
                  onChange={this.onChangeStartDate}
                  placeholder="Enter Estimated Start Date"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="text" sm={2}>
                Estimated Deadline
              </Label>
              <Col sm={10}>
                <Input
                  type="date"
                  name="Deadline"
                  value={this.state.deadline}
                  onChange={this.onChangeDeadline}
                  placeholder="Enter Estimated Completion Date"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="text" sm={2}>
                Image
              </Label>
              <Col sm={10}>
                <Input
                  type="file"
                  name="image"
                  value={this.state.Image}
                  onChange={this.onChangeImage}
                  placeholder="Select Image"
                />
              </Col>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup row>
              <Col sm={5}></Col>
              <Col sm={1}>
                <Button type="submit" color="success">
                  Submit
                </Button>
              </Col>
              <Col sm={1}>
                <Button color="danger">Cancel</Button>{" "}
              </Col>
              <Col sm={5}></Col>
            </FormGroup>
          </Col>
        </Form>
      </div>
    );
  }
}
