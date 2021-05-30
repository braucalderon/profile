import React from "react";
import "./About.scss";
import Link from "../floatingbutton/LinkButton";
import FloatingButton from "../floatingbutton/Floatingbutton";

const About = (props) => {
  return (
    <React.Fragment>
      <div className="AboutMeSettings" id="about">
        <div className="AboutMeTittle">
          <FloatingButton
            to1={"projects"}
            to2={"resume"}
            tittle1={"Projects"}
            tittle2={"Resume"}
          />
          About
          <div></div>
        </div>

        <div className="AboutGoButton">
          <Link
            page={"/aboutmeshow"}
            tittle={<div className="AboutBio">Go to Bio</div>}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default About;
