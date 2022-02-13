import React, { useState } from "react";
import List from "./List";

function Todo() {
  const [items, setItems] = useState([]);
  const [inputItem, setInputItem] = useState("");

  const add = () => {
    const tempItems = [...items];
    const item = { name: inputItem, isStrike: false };
    tempItems.push(item);
    setItems(tempItems);
    setInputItem("");
  };

  const strike = (index) => {
    const tempItems = [...items];
    tempItems[index].isStrike = !tempItems[index].isStrike;
    setItems(tempItems);
  };

  const remove = (index) => {
    const tempItems = [...items];
    tempItems.splice(index, 1);
    setItems(tempItems);
  };

  const changeHandler = (event) => {
    const value = event.target.value;
    setInputItem(value);
  };

  return (
    <div className="container">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="What's next?"
          value={inputItem}
          onChange={changeHandler}
        />
        <label for="floatingInput">What's Next?</label>
      </div>
      <button className="btn btn-outline-success h4" onClick={add}>
        Add
      </button>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">To-do List</th>
          </tr>
        </thead>
        <tr>
          <List items={items} remove={remove} strike={strike} />
        </tr>
      </table>
      {/* <li style={{ textDecorationLine: "line-through" }}>Navbar</li>
      <li style={{ textDecorationLine: "line-through" }}>Clock</li>
      <li>
        Registration -{" "}
        <em>Simple Registration complete. Checks and errors need revisited.</em>
      </li>
      <li>Login</li>
      <li style={{ textDecorationLine: "line-through" }}>To-Do list</li>
      <li>
        Add Project - <em>Backend Complete</em>
      </li>
      <li>
        Delete Project - <em>Backend Complete</em>
      </li>
      <li>
        Edit Project - <em>Backend Complete</em>
      </li>
      <li>
        View Project Page - <em>Backend Complete</em>
      </li>
      <li>Timestamp stages</li>
      <li>Notifications</li>
      <li>Motivational Polish</li> */}
    </div>
  );
}
export default Todo;
