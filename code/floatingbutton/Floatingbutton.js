import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ReorderIcon from "@material-ui/icons/Reorder";
import "./Floatingbutton.scss";
import { animateScroll as scroll, Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    height: "50%",
    opacity: ".6",
    marginLeft: "6vh",
    marginTop: "2vh",
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: ".9vh",
      marginTop: "6vh",
    },
  },
  menuTittle: {
    fontSize: "2.2vh",
    color: "white",
    marginLeft: "1vh",
    fontFamily: "serif",
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: "0",
    },
  },
  menuItem: {
    color: "black",
    fontWeight: "bold",
    fontFamily: "serif",
    padding: ".5vh 3vh",
    [theme.breakpoints.between("xs", "sm")]: {
      padding: ".5vh 2vh",
    },
  },
  reorderIcon: {
    fontSize: "6.5vh",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "5.5vh",
    },
  },
}));

const FloatingButton = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleClicked = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClicked} className={classes.menuTittle}>
        <ReorderIcon className={classes.reorderIcon} />
      </Button>
      <Menu
        className={classes.root}
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} className={classes.menuItem}>
          <div onClick={scroll.scrollToTop}>Home</div>
        </MenuItem>

        <Link to={props.to1} spy={true} smooth={true} delay={0}>
          <MenuItem onClick={handleClose} className={classes.menuItem}>
            {props.tittle1}
          </MenuItem>
        </Link>

        <Link to={props.to2} spy={true} smooth={true} delay={0}>
          <MenuItem onClick={handleClose} className={classes.menuItem}>
            {props.tittle2}
          </MenuItem>
        </Link>
      </Menu>
    </React.Fragment>
  );
};
export default FloatingButton;
// yarn add react-scroll
