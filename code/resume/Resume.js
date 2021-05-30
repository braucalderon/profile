import React from "react";
import "./Resume.scss";
import Link from "../floatingbutton/LinkButton";
import FloatingButton from "../floatingbutton/Floatingbutton";

const Resume = (props) => {
  return (
    <React.Fragment>
      <div className="ResumeSettings" id="resume">
        <div className="ResumeTittle">
          <FloatingButton
            to1={"about"}
            to2={"projects"}
            tittle1={"About"}
            tittle2={"Projects"}
          />
          Resume
          <div></div>
        </div>

        <div className="ResumeButton">
          <Link
            page={"/resumeshow"}
            tittle={<div className="ResumeLinkButton">Go to Curriculum</div>}
          />
        </div>

        <div className="ResumeSubTittle">
          <div className="ResumeLeftMargin">Java Developer</div>
          <div className="ResumeVerticalLine"></div>
          <div className="ResumeRightMargin">React Developer</div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Resume;
