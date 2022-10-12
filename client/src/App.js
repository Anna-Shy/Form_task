import React, { useState } from "react";
import Axios from "axios";

import { AppFooter } from "./AppComponent/AppFooter/AppFooter";
import { AppMain } from "./AppComponent/AppMain/AppMain";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [descript, setDescript] = useState("");

  const [userList, setUserList] = useState([]);

  const addMessage = () => {
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
      <AppMain
        setName={setName}
        setMail={setMail}
        setDescript={setDescript}
        addMessage={addMessage}
      />
      <AppFooter />
    </div>
  );
}

export default App;
