import React from "react";

export const InputDescript = ({ setDescript }) => {
  return (
    <textarea
      onChange={(event) => {
        setDescript(event.target.value);
      }}
      placeholder="Your message*"
    />
  );
};
