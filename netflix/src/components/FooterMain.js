import React from "react";
import "./FooterMain.css";

const FooterMain = () => {
  return (
    <div>
      <div className="footer-1">
        <a href=""> Questions? Contact Us</a>
      </div>

      <div className="footer">
        {/* <div className="footer-sub" > */}
        <div className="f1">
          {" "}
          FAQ <br /> Investor Relations <br /> Privacy <br /> Speed Test{" "}
        </div>
        <div className="f2">
          {" "}
          Help Center <br /> Jobs <br /> Cookie Preferences <br /> Legal Notices{" "}
        </div>
        <div className="f3">
          {" "}
          Account <br /> Ways to Watch <br /> Corporate Information <br />{" "}
          Netflix Originals{" "}
        </div>
        <div className="f4">
          {" "}
          Media Center <br /> Terms of Use <br /> Contact Us{" "}
        </div>
        {/* </div> */}
      </div>

      <div className="footer-2">
        <a href="#">Netflix Ghana</a>
      </div>
    </div>
  );
};

export default FooterMain;
