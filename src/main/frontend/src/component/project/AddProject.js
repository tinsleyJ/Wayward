import React from "react";
import axios from "axios";
import { useState } from "react";

const AddProject = () => {
  const [project, setProject] = useState({
    projectName: "",
    projectDescription: "",
    startDate: "",
    deadline: "",
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
    axios.post("http://localhost:8080/project/submitProjectDetails", project);
    window.location = "/project";
  };

  return (
    <div className="container">
      <form>
        <h3>Add Project</h3>
        <div>
          <form>
            <div className="col-md-6">
              <label className="form-check-label">Project Name: </label>
              <input
                type="text"
                onChange={projectChangeHandler}
                name="projectName"
                value={project.name}
                className="form-control"
                id="inputProjectName"
              />
            </div>
            <div className="col-md-6">
              <label className="form-check-label col-lg ">Desciption: </label>
              <textarea
                onChange={projectChangeHandler}
                name="projectDescription"
                value={project.projectDescription}
                className="form-control"
                id="inputProjectDescription"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-check-label">Start Date: </label>
              <input
                type="date"
                onChange={projectChangeHandler}
                name="startDate"
                value={project.startDate}
                className="form-control"
                id="inputStartDate"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-check-label">Projected Deadline: </label>
              <input
                type="date"
                onChange={projectChangeHandler}
                name="deadline"
                value={project.deadline}
                className="form-control"
                id="inputDeadline"
              />
            </div>
            <div className="col-md-6">
              <div className="form-group files color">
                <div>
                  <img src={project.image} />
                </div>
                <label>Image</label>
                <input
                  type="file"
                  onChange={projectChangeHandler}
                  name="file"
                  value={project.image}
                  className="form-control-file"
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
