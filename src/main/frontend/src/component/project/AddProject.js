import React from "react";
import axios from "axios";
import { useState } from "react";

const AddProject = () => {
  const [project, setProject] = useState({
    projectName: "",
    projectDescription: "",
    startDate: "",
    deadline: "",
    stage: "",
    image: "",
  });

  const projectChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const tempProject = { ...project };
    tempProject[name] = value;
    setProject(tempProject);
  };

  const projectSubmitHandler = (event) => {
    const name = event.target.name;
    let isValid = true;

    if (!name.projectName) {
      isValid = false;
      console.log("Please enter your project name");
    }

    if (!name.projectDescription) {
      isValid = false;
      console.log("Please enter your project description");
    }

    if (!name.startDate) {
      isValid = false;
      console.log("Please your project start date");
    }

    if (name.deadline) {
      isValid = false;
      console.log("Please your project deadline");
    }

    if (isValid !== true) {
      axios.post("http://localhost:8080/project/submitProjectDetails", project);
    }
  };

  return (
    <div class="container">
      <form>
        <h3>Add Project</h3>
        <div>
          <form>
            {" "}
            <div className="col-md-6">
              <label class="form-check-label">Project Name: </label>
              <input
                type="text"
                onChange={projectChangeHandler}
                name="projectName"
                value={project.name}
                className="form-control"
                id="inputProjectName"
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label class="form-check-label col-lg ">Desciption: </label>
              <textarea
                onChange={projectChangeHandler}
                name="projectDescription"
                value={project.projectDescription}
                className="form-control"
                id="inputProjectDescription"
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label class="form-check-label">Start Date: </label>
              <input
                type="date"
                onChange={projectChangeHandler}
                name="startDate"
                value={project.startDate}
                className="form-control"
                id="inputStartDate"
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label class="form-check-label">Projected Deadline: </label>
              <input
                type="date"
                onChange={projectChangeHandler}
                name="deadline"
                value={project.deadline}
                className="form-control"
                id="inputDeadline"
              />{" "}
            </div>{" "}
            <div className="col-md-6">
              <label class="form-check-label">Current Stage:</label>
              <textarea
                type="text"
                onChange={projectChangeHandler}
                name="state"
                value={project.stage}
                className="form-control"
                id="inputStage"
              />
              <div className="form-group files color">
                <label>Image</label>
                <input
                  type="file"
                  onChange={projectChangeHandler}
                  name="file"
                  value={project.image}
                  class="form-control-file"
                  id="inputImage"
                />
              </div>
              <button
                className="bg-dark btn btn-outline-success"
                type="button"
                onClick={projectSubmitHandler}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </form>
    </div>
  );
};
export default AddProject;
