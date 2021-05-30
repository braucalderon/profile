import React from "react";
import ArrowForward from "@material-ui/icons/ArrowForwardIos";
import "./Floatingbutton.scss";

const FloatingLeftButton = (props) => {
  return (
    <div className="FloatingForwardButton">
      <div className="FloatingLeftButton">Open</div>
      <ArrowForward
        style={{
          marginLeft: "0",
          fontSize: "10vh",
        }}
      />
    </div>
  );
};
export default FloatingLeftButton;
