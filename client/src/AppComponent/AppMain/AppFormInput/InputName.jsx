import React from "react";

export const InputName = ({ setName }) => {
  return (
    <input
      type="text"
      onChange={(event) => {
        setName(event.target.value);
      }}
      placeholder="Your name*"
    />
  );
};
