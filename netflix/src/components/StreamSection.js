import React from "react";
import "./StreamSection.css";
import Stream from "../Assets/Stream.PNG";

const StreamSection = () => {
  return (
    <div className="c3">
      <div className="c3-text">
        <h1>Watch everywhere.</h1>
        <p>
          Stream unlimited movies and TV shows on <br /> your phone, tablet,
          laptop, and TV without <br /> paying more.
        </p>
      </div>

      <div className="c3-img">
        <img className="StreamSection" src={Stream} alt="Stream"></img>
      </div>
    </div>
  );
};

export default StreamSection;
