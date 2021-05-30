import React from "react";
import "./Backdrop.scss";

const Backdrop = (props) => {
  // eslint-disable-next-line no-unused-expressions
  props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null;
};

export default Backdrop;
