import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./Projects.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#3C3C3C",
    
  },
  style: {
    color: "white",
    margin: "1vh",
    padding: "0 2vh",
    textDecoration: "none",
    fontSize: "2vh",
    fontFamily: "serif",
  },
  styleTittle: {
    color: "white",
    margin: "1vh",
    padding: "0 2vh",
    textDecoration: "none",
    fontSize: "2.6vh",
    fontFamily: "serif",
  },

  styleNote: {
    color: "#9ecb22",
    marginLeft: "1vh",
    padding: "0 2vh",
    textDecoration: "none",
    fontSize: "2vh",
    fontFamily: "serif",
  },
  media: {
    height: "auto",
    width: "100%",
  },
}));

const CardProjects = (props) => {
  const classes = useStyles();

  return (
    <div className="CardProjectsSetting">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            src={props.img}
          />
          <Typography className={classes.styleTittle}>
            {props.tittle}
          </Typography>
          <Typography className={classes.style}>{props.description}</Typography>
          <Typography className={classes.styleNote}>{props.noteLink}</Typography>
          <CardContent></CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
export default CardProjects;
