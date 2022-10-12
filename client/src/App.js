import React, { useState } from "react";
import Axios from "axios";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [descript, setDescript] = useState("");

  const [userList, setUserList] = useState([]);

  const addUser = () => {
    Axios.post("http://localhost:4000/create", {
      name: name,
      mail: mail,
      descript: descript
    }).then(() => {
      setUserList([
        ...userList,
        {
          name: name,
          mail: mail,
          descript: descript
        }
      ]);
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br />
        <label>Email:</label>
        <input
          type="text"
          onChange={(event) => {
            setMail(event.target.value);
          }}
        />
        <br />
        <label>Description:</label>
        <input
          type="text"
          onChange={(event) => {
            setDescript(event.target.value);
          }}
        />
        <br />
        <button onClick={addUser}>Add Employee</button>
      </div>
    </div>
  );
}

export default App;
