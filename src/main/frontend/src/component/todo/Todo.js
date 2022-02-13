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
        <thead class="table-dark">
          <tr>
            <th>Step</th>
            <th>Creation Date</th>
          </tr>
        </thead>

        <tr>
          <td>
            <List items={items} remove={remove} strike={strike} />
          </td>
          <td>
            <em>Date will go here</em>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default Todo;
