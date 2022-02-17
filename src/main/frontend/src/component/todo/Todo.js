import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "./List";
import { useParams } from "react-router-dom";

function Todo() {
  const { params } = useParams();

  const [items, setItems] = useState([]);
  const [inputItem, setInputItem] = useState("");

  const add = () => {
    const tempItems = [...items];
    const item = { name: inputItem, isStrike: false };
    tempItems.push(item);
    setItems(tempItems);
    setInputItem("");
    // axios.post("http://localhost:8080/project/submitProjectTodo", {
    //   item: item.name,
    //   date: new Date(),
    //   projectId: params,
    // });
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
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
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
      <table className="table">
        <thead className="navbar-custom">
          <tr>
            <th>To-Do</th>
          </tr>
        </thead>

        <tr>
          <td>
            <List items={items} remove={remove} strike={strike} />
          </td>
        </tr>
      </table>
    </div>
  );
}
export default Todo;
