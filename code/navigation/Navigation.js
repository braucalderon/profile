import React, { useState } from "react";
import "./Navigation.scss";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import ResumeIcon from "@material-ui/icons/Note";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-scroll";


const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leaveScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  pad: {
    padding: "2vh",
  },

  title: {
    flexGrow: 1,
    
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 1,
  },
  drawerPaper: {
    width: drawerWidth,
    
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1, 0),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leaveScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },


}));

const Navigation = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  
  const handleDrawerOpen = () => {
    setOpen(true);
    
  };
  const handleDrawerClose = (event) => {
    setOpen(false);
  };

  // console.log(props);

  return (

      <div className="Navigation" >
        <CssBaseline />
        <AppBar
          style={{
            backgroundColor: "transparent",
            position: "absolute",
          }}
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <Typography noWrap className={classes.title}></Typography>
            <IconButton
              style={{ fontWeight: "bold", color: "black", fontSize: "20vh" }}
              color="inherit"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon style={{fontSize: '7vh', marginRight: '1vh', }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={() => handleDrawerClose(null)}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>

          <List>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              delay={500}
            >
              <ListItem
                button
                key="About"
                onClick={handleDrawerClose}
                className={classes.pad}
              >
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={"About"} />
              </ListItem>
              <Divider />
            </Link>

            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              delay={500}
            >
              <ListItem
                button
                key="Projects"
                onClick={handleDrawerClose}
                className={classes.pad}
              >
                <ListItemIcon>
                  <AccountTreeIcon />
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItem>
              <Divider />
            </Link>

            <Link
              to="resume"
              spy={true}
              smooth={true}
              duration={500}
              delay={500}
            >
              <ListItem
                button
                key="Resume"
                onClick={handleDrawerClose}
                className={classes.pad}
              >
                <ListItemIcon>
                  <ResumeIcon />
                </ListItemIcon>
                <ListItemText primary="Resume" />
              </ListItem>
              <Divider />
            </Link>
          </List>
        </Drawer>
      </div>
    
  );
};
export default Navigation;
