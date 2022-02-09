const Todo = () => {
  return (
    <div className="container">
      <form>
        <h4>To-Do</h4>
        <li style={{ textDecorationLine: "line-through" }}>Navbar</li>
        <li style={{ textDecorationLine: "line-through" }}>Clock</li>
        <li>
          Registration -{" "}
          <em>Simple Registration complete. Implement checks and errors.</em>
        </li>
        <li>Login</li>
        <li>
          Add Project - <em>Backend Complete</em>
        </li>
        <li>Delete Project</li>
        <li>Edit Project</li>
      </form>
    </div>
  );
};
export default Todo;
