import React from "react";
import "./Floatingbutton.scss";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

const LinkButton = (props) => {
  const history = useHistory();

  const handleClicked = () => {
    history.push(props.page);
  };

  return (
    <Button className="FloatingLinkButton" onClick={handleClicked}>
      {props.tittle}
    </Button>
  );
};
export default LinkButton;
