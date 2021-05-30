import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#3C3C3C",
    fontFamily: "serif",

    [theme.breakpoints.down("xs")]: {
      maxWidth: "450px",
      // marginBottom: '3%'
    },
    // controls the whole card sizes
    [theme.breakpoints.between("sm", "lg")]: {
      maxWidth: "570px",
      // marginBottom: '0'
    },
  },

  media: {
    height: "53vh",
    [theme.breakpoints.down("xs")]: {
      height: "36vh",
    },
    [theme.breakpoints.down("sm")]: {
      height: "46vh",
    },
    [theme.breakpoints.between("sm", "md")]: {
      height: "53vh",
    },
  },
  fontTittle: {
    padding: "0 2vh",
    lineHeight: "1.3",
    fontSize: "3vh",
    color: "#B9CB22",
    textAlign: "center",
    fontFamily: "serif",
  },

  font: {
    textAlign: "justify",
    textIndent: "5vh",
    lineHeight: "1.5",
    padding: "0 1vh",
    color: "white",
    fontFamily: "serif",
    fontSize: "2.6vh",
    [theme.breakpoints.between("xs","sm")]:{
      fontSize: '2.4vh'
    }
  },

  fontExpand: {
    marginBottom: "1vh",
    marginLeft: "1vh",
    marginRight: "1vh",
    textIndent: "5vh",
    lineHeight: "1.6",
    textAlign: "justify",
    padding: "0 1vh",
    color: "white",
    fontFamily: "serif",
    fontSize: "2.6vh",
    [theme.breakpoints.between('xs','sm')]:{
      fontSize: '2.4vh'
    }
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  moreIcon: {
    color: "#B9CB22",
    fontSize: "6vh",
  },

  scrollDown: {
    textAlign: "right",
    marginRight: "5vh",
    marginBottom: "2vh",
    color: "#B9CB22",
    fontFamily: "serif",
    fontSize: "2vh",
  },
}));

// -----------------------------------------------

const AboutCard = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandedClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        component="img"
        src={props.img}
        tittle="photo"
      />
      <CardContent>
        <Typography className={classes.fontTittle}>Short Bio</Typography>
        <Typography className={classes.font}>{props.bio1}</Typography>
      </CardContent>
      <Typography className={classes.scrollDown} style={{marginRight: '1vh', marginBottom: '0'}}>Read More</Typography>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandedClick}
          aria-expanded={expanded}
        >
          
          <ExpandMoreIcon className={classes.moreIcon} style={{marginTop: '-2.5vh'}} />
          
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Typography className={classes.scrollDown} style={{marginRight: '1vh', marginTop: '-1vh'}}>scroll down</Typography>
        <Typography className={classes.fontExpand}>{props.bio2}</Typography>
        <Typography className={classes.fontExpand}>{props.bio3}</Typography>
        <Typography className={classes.fontExpand}>{props.bio4}</Typography>
        <Typography style={{marginTop: '6vh'}}></Typography>
      </Collapse>
    </Card>
  );
};
export default AboutCard;
