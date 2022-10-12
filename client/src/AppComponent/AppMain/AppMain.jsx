import React from "react";
import { AppMainImg } from "./AppMainImg";

import { InputName } from "./AppFormInput/InputName";
import { InputMail } from "./AppFormInput/InputMail";
import { InputDescript } from "./AppFormInput/setDescript";

import "./AppMain.css";

export const AppMain = ({ setName, setMail, setDescript, addMessage }) => {
  return (
    <main>
      <form className="App__form">
        <h2 className="title">Reach out to us!</h2>

        <InputName setName={setName} />
        <InputMail setMail={setMail} />
        <InputDescript setDescript={setDescript} />

        <button onClick={addMessage}>Send message</button>
      </form>

      <AppMainImg />
    </main>
  );
};
