import React from "react";

import yellowCartoon from "../../image/red_cartoon 4.svg";
import redCartoon from "../../image/red_cartoon 3.svg";
import yellow2Cartoon from "../../image/red_cartoon 2.svg";
import cloud from "../../image/Vector.svg";

import "./AppMainImg.css";

export const AppMainImg = () => {
  return (
    <>
      <div className="App__map">
        <img
          src={require("../../image/Captura_de_Tela.png")}
          className="map__img"
          alt="map"
        />
      </div>
      <img src={yellowCartoon} className="cartoon5" alt="cartoon" />
      <img src={redCartoon} className="cartoon6" alt="cartoon" />
      <img src={yellow2Cartoon} className="cartoon7" alt="cartoon" />
      <img src={cloud} className="cloud1" alt="cloud" />
      <img src={cloud} className="cloud2" alt="cloud" />
      <img src={cloud} className="cloud3" alt="cloud" />
    </>
  );
};
