import React, { useEffect, useState } from "react";
import "../backdrop/Backdrop.scss";
import "./Resume.scss";
import FloatingCloseButton from "../floatingbutton/Floatingclosebutton";
import SimpleCard from "./Simplecard";
import axios from "axios";
import Progress from "../Progress";

const ResumeShow = (props) => {
  const [infoResume, setInfoResume] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/braucalderon/jsonFiles/main/resume/resume.json";
    async function fetchData() {
      try {
        const request = await axios.get(url);
        setInfoResume(request.data);
        setError(true);
        return request;
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  // console.log(infoResume);
  let post = <Progress />;
  if (error) {
    post = infoResume.map((res, index) => {
      if (res.id === index) {
        return (
          <SimpleCard
            key={res.id}
            personalInfo={res.personalInfo}
            skills={res.skills}
            email={res.email}
            experience={res.experience}
            education={res.education}
            interests={res.interests}
            educationTittle1={res.educationTittle1}
            educationTittle2={res.educationTittle2}
            educationSubTittle1={res.educationSubTittle1}
            educationSubTittle2={res.educationSubTittle2}
            gpa={res.gpa}
            interestsSubTittle1={res.interestsSubTittle1}
            graduationFrom1={res.graduationFrom1}
            graduationFrom2={res.graduationFrom2}
            graduationTo1={res.graduationTo1}
            graduationTo2={res.graduationTo2}
          />
        );
      } else {
        return null;
      }
    });
  }

  return (
    <React.Fragment>
      <div className="Backdrop">
        <FloatingCloseButton to={"/"} />
        <div className="ResumeScrollDown">scroll down</div>
        <div className="ResumeCard">{post}</div>
      </div>
    </React.Fragment>
  );
};
export default ResumeShow;
