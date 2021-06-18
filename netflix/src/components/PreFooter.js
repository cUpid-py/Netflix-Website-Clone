import React from "react";
import "./PreFooter.css";
// import Plus from "../Assets/plus.svg"

const PreFooter = () => {
  return (
    <div>
      <div>
        <div className="c5">
          <h1>Frequently Asked Questions</h1>

          <div className="faqs">
            <div className="question">
              <a href="#">
                <p>What is Netflix?</p>
              </a>
            </div>
            <div className="question">
              <a href="#">
                <p>How much does Netflix cost?</p>
              </a>
            </div>
            <div className="question">
              <a href="#">
                <p>Where can I watch?</p>
              </a>
            </div>
            <div className="question">
              <a href="#">
                <p>How do I cancel?</p>
              </a>
            </div>
            <div className="question">
              <a href="#">
                <p>What can I watch on Netflix?</p>
              </a>
            </div>
            <div className="question">
              <a href="#">
                <p>Is Netflix good for kids?</p>
              </a>
            </div>
          </div>
          <div className="r1">
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
          <div className="mail-but">
            <input
              className="email-box"
              type="email"
              placeholder="Email Address"
            ></input>
            <button className="gs-button">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
