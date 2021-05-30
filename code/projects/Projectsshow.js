import React, { useEffect, useState } from "react";
import "../backdrop/Backdrop.scss";
import "./Projects.scss";
import FloatingCloseButton from "../floatingbutton/Floatingclosebutton";
import Card from "./Card";
import axios from "axios";
import Progress from "../Progress";

const ProjectShow = (props) => {
  const [userProjects, setUserProjects] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/braucalderon/jsonFiles/main/projects/projects.json";
    async function fetchData() {
      // waits for data to be uploaded.
      try {
        const request = await axios.get(url);
        setUserProjects(request.data);
        setError(true);
        return request;
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  
  let post = <Progress />;
  if (error) {
    post = userProjects.map((res, index) => {
      if (res.id === index) {
        return (
          <a
            key={res.id}
            className="ProjectsShowLink"
            href={res.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card
              img={res.img}
              tittle={res.tittle}
              description={res.description}
              noteLink={res.note}
            />
          </a>
        );
      } else {
        return null;
      }
    }).reverse();
  }
 

  return (
    <React.Fragment>
      <div className="Backdrop">
        <FloatingCloseButton to={"/"} />
        <div className="ProjectShowScrollDown">
          <div></div>
          <div></div>
          <div>scroll down</div>
        </div>
        <div className="ProjectShowSettings">{post}</div>
      </div>
    </React.Fragment>
  );
};
export default ProjectShow;
