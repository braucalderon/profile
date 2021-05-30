import React from "react";
import "./Floatingbutton.scss";
import { makeStyles } from "@material-ui/core/styles";
import { Link as LinkPage } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  sizeButton: {
    fontSize: "8vh",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "7vh",
    },
  },
}));
const CloseButton = (props) => {
  const classes = useStyles();

  return (
    <div className="FloatingCloseButton">
      <LinkPage to={props.to} className="FloatingLinkPage">
        <CloseIcon className={classes.sizeButton} />
      </LinkPage>
    </div>
  );
};
export default CloseButton;
