import React from "react";

export const InputMail = ({ setMail }) => {
  return (
    <input
      type="mail"
      onChange={(event) => {
        setMail(event.target.value);
      }}
      placeholder="Your e-mail*"
    />
  );
};
