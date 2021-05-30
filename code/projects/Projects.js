import React from "react";
import "./Projects.scss";
import FloatingButton from "../floatingbutton/Floatingbutton";
import LinkButton from "../floatingbutton/LinkButton";

const Projects = (props) => {
  return (
    <div className="ProjectsSettings" id="projects">
      <div className="ProjectsTittle">
        <FloatingButton
          to1={"about"}
          to2={"resume"}
          tittle1={"About"}
          tittle2={"Resume"}
        />
        Projects
        <div></div>
      </div>

      <div className="ProjectFlexButton">
        <LinkButton
          page={"/projectsshow"}
          tittle={<div className="ProjectFlexButtonHover">Go to Portfolio</div>}
        />
      </div>
      <div className="ProjectSubTittle">
        <div className="ProjectsMarginLeftBottom">FrontEnd</div>
        <div className="ProjectsVerticalLine"></div>
        <div className="ProjectsMarginRightBottom">BackEnd</div>
      </div>
    </div>
  );
};
export default Projects;
