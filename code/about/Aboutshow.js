import React, { useEffect, useState } from "react";
import "../backdrop/Backdrop.scss";
import "./About.scss";
import FloatingCloseButton from "../floatingbutton/Floatingclosebutton";
import AboutCard from "./Aboutcard";
import axios from "axios";
import Progress from "../Progress";

const AboutMeShow = (props) => {
  const [bio, setBio] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/braucalderon/jsonFiles/main/bio/bio.json";
    async function fetchData() {
      try {
        const request = await axios.get(url);
        setBio(request.data);
        setError(true);
        // console.log(request);
        return request;
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  // console.log(bio);

  let post = <Progress />;

  if (error) {
    post = bio.map((res, index) => {
      return (
        <AboutCard
          key={"bio" + index}
          bio1={res.bio1}
          bio2={res.bio2}
          bio3={res.bio3}
          bio4={res.bio4}
          img={res.img}
        />
      );
    });
  }

  return (
    <React.Fragment>
      <div className="Backdrop">
        <FloatingCloseButton to={"/"} />
        <div className="AboutShow">
          <div>{post}</div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default AboutMeShow;
