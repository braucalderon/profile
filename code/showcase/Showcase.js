import React from "react";
import "./Showcase.scss";
import Navigation from "../navigation/Navigation";
import AboutMe from "../about/About";
import Projects from "../projects/Projects";
import Resume from "../resume/Resume";

const showcase = (props) => {
  return (
    <React.Fragment>
      <div id="showcase">
        <Navigation />
        <div className="ShowCaseSetting">
          <div className="ShowCaseShowName">
            <div>Full Stack Developer</div>
            <div className="ShowCaseNameOnly">Braulio Calderon</div>
          </div>
        </div>

        <AboutMe />
        <Projects />
        <Resume />
      </div>
    </React.Fragment>
  );
};
export default showcase;
