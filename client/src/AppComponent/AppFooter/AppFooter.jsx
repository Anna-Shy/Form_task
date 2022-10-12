import React from "react";

import linkinIcon from "../../image/icon/LinkinIcon.svg";
import twitterIcon from "../../image/icon/TwitterIcon.svg";
import fbIcon from "../../image/icon/FBIcon.svg";
import pinterestIcon from "../../image/icon/PinterestIcon.svg";

import redCartoon from "../../image/red_cartoon 3.svg";
import greenCartoon from "../../image/red_cartoon 1.svg";
import yellowCartoon from "../../image/red_cartoon 4.svg";

import "./AppFooter.css";

export const AppFooter = () => {
  return (
    <footer className="footer">
      <img src={redCartoon} className="cartoon1" alt="cartoon" />

      <div className="social">
        <a className="social__link" href="/#">
          <img src={linkinIcon} alt="linkin" />
        </a>
        <a className="social__link" href="/#">
          <img src={twitterIcon} alt="linkin" />
        </a>
        <a className="social__link" href="/#">
          <img src={fbIcon} alt="linkin" />
        </a>
        <a className="social__link" href="/#">
          <img src={pinterestIcon} alt="linkin" />
        </a>
      </div>

      <img src={greenCartoon} className="cartoon2" alt="cartoon" />
      <img src={yellowCartoon} className="cartoon3" alt="cartoon" />
    </footer>
  );
};
