import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./Resume.scss";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: "5%",
    marginLeft: "5%",
    height: "87%",
    display: "flex",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0",
      marginRight: "0",
    },
  },
  leftSide: {
    backgroundColor: "#3051B0",
    width: "43%",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("xs")]: {
      width: "45%",
    },
  },
  rightSide: {
    width: "57%",
    margin: " 0 1vh",
    padding: "0",
    overflow: "scroll",
    [theme.breakpoints.down("xs")]: {
      width: "55%",
      margin: "0 0.5vh",
    },
  },

  name: {
    margin: "1vh",
    fontFamily: "serif",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.4vh",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "3.5vh",
    },
  },

  normal: {
    fontSize: "2vh",
    marginLeft: "1vh",
    fontFamily: "serif",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.7vh",
    },
  },
  normalRightSide: {
    fontSize: "2vh",
    marginLeft: "1vh",
    color: "black",
    fontFamily: "serif",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.7vh",
    },
  },

  normal1: {
    fontSize: "2.5vh",
    marginLeft: "1vh",
    marginBottom: "1vh",
    fontFamily: "serif",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8vh",
    },
  },

  normal1RightSide: {
    fontSize: "2.2vh",
    marginLeft: "1vh",
    color: "black",
    fontFamily: "serif",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "1.7vh",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "1.9vh",
    },
  },
  spaceSubTitle: {
    marginLeft: "1vh",
  },

  email: {
    fontSize: "2.2vh",
    marginLeft: "1vh",
    marginBottom: "1.5vh",
    fontFamily: "serif",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.7vh",
    },
  },

  subTitle: {
    fontSize: "2.3vh",
    marginTop: "1vh",
    marginBottom: "1vh",
    fontFamily: "serif",
    backgroundColor: "#092E97",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.9vh",
    },
  },

  bold: {
    fontSize: "2vh",
    marginLeft: "1vh",
    fontWeight: "bold",
    fontFamily: "serif",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "2vh",
    },
  },
  boldRightSide: {
    fontSize: "2.6vh",
    fontWeight: "bold",
    fontFamily: "serif",
    color: "#3051B0",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "2.5vh",
    },
  },

  button1: {
    color: "white",
    border: "2px solid white",
    padding: "0.4vh 3.6vh",
    fontSize: "1.5vh",
    marginBottom: "1vh",
    fontFamily: "serif",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "1vh",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "1.4vh",
    },
  },
  button2: {
    color: "white",
    border: "2px solid white",
    padding: "0.4vh 4.3vh",
    fontSize: "1.5vh",
    fontFamily: "serif",
    marginBottom: "1vh",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "1vh",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "1.4vh",
    },
  },

  horizontalLine: {
    borderTop: "4px solid black",
    width: "100%",
    marginBottom: "1vh",
    marginTop: "1vh",
    opacity: ".6",
  },
  datesSeparation: {
    margin: " 0 0.5vh",
    [theme.breakpoints.down("xs")]: {
      margin: " 0 0.3vh",
    },
  },

  jobTittle: {
    fontWeight: "bold",
    marginLeft: '-1%',
    fontSize: "2.7vh",
    fontFamily: "serif",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "2.4vh",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "2.5vh",
    },
  },
  jobSubTittle: {
    fontSize: "2.3vh",
    fontFamily: "serif",
    color: "black",
    // marginLeft: "1vh",
    fontWeight: "bold",

    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "2.1vh",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "2.2vh",
    },
  },
  index: {
    fontFamily: "serif",
    marginLeft: ".5vh",
    fontSize: '2.2vh',
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "2vh",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "2.1vh",
    },
  },
}));

const SimpleCard = (props) => {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/braucalderon/jsonFiles/main/resume/skills.json";
    async function fetchData() {
      try {
        const request = await axios.get(url);
        setData(request.data);
        return request;
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  let personalInfo = (
    <span className={classes.spaceSubTitle}>{props.personalInfo}</span>
  );
  let skills = <span className={classes.spaceSubTitle}>{props.skills}</span>;
  let email = <span>{props.email}</span>;

  // experience
  let experience = (
    <span className={classes.spaceSubTitle}>{props.experience}</span>
  );
  let education = (
    <span className={classes.spaceSubTitle}>{props.education}</span>
  );
  let interests = (
    <span className={classes.spaceSubTitle}>{props.interests}</span>
  );
  const datesSeparation = <span className={classes.datesSeparation}>-</span>;

  // Education
  let educationTittle1 = (
    <span className={classes.jobTittle}>{props.educationTittle1}</span>
  );
  let educationSubTittle1 = <span>{props.educationSubTittle1}</span>;

  let gpa = <span>{props.gpa}</span>;
  // Interests
  let interestsSubTittle1 = (
    <span className={classes.jobSubTittle}>{props.interestsSubTittle1}</span>
  );

  const skillData = data.filter((item) => item.skill > 0);
  const experienceData = data.filter((item) => item.experience > 0);
  console.log(skillData);
  let experienceShow = experienceData
    .map((item) => {
      return (
        <Typography className={classes.normal1RightSide} key={item.experience}>
          <span className={classes.jobTittle}>{item.jobTittle}</span>
          <br />
          {item.dateFrom}
          {datesSeparation}
          {item.dateTo}
          <br />
          <span className={classes.jobSubTittle}>{item.subTittle}</span>
          <br />
          <div className={classes.index}>
            <span>{item.bullet1}</span>
            <br />
            <span>{item.bullet2}</span>
            <br />
            <span>{item.bullet3}</span>
            <br />
            <span>{item.bullet4}</span>
          </div>
          <br/>
        </Typography>
      );
    })
    .reverse();

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardContent className={classes.leftSide}>
          <Typography className={classes.name}>Braulio Calderon</Typography>
          <Typography className={classes.normal1}>
            Full Stack Developer
          </Typography>

          <Typography className={classes.subTitle}>{personalInfo}</Typography>
          <Typography className={classes.bold}>Email</Typography>
          <Typography className={classes.email}>{email}</Typography>
          <Typography className={classes.bold}>LinkedIn</Typography>

          <CardActions className={classes.button}>
            <a
              href="https://www.linkedin.com/public-profile/in/brauliocalderon18/"
              rel="noopener noreferrer"
              target="_blank"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button className={classes.button1}>
                Click to open LinkedIn
              </Button>
            </a>
          </CardActions>
          <Typography className={classes.bold}>GitHub</Typography>

          <CardActions className={classes.button}>
            <a
              href="https://github.com/braucalderon"
              rel="noopener noreferrer"
              target="_blank"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button className={classes.button2}>Click to open GitHub</Button>
            </a>
          </CardActions>
          <Typography className={classes.subTitle}>{skills}</Typography>
          {skillData.map((items) => {
            return (
              <Typography className={classes.normal} key={items.skill}>
                <span className={classes.index}>{items.skills}</span>
              </Typography>
            );
          }).reverse()}

          <Typography className={classes.normal}></Typography>
        </CardContent>

        <CardContent className={classes.rightSide}>
          <Typography className={classes.horizontalLine} />
          <Typography className={classes.boldRightSide}>
            {experience}
          </Typography>
          <Typography className={classes.horizontalLine} />
          {experienceShow}

          <Typography className={classes.horizontalLine} />
          <Typography className={classes.boldRightSide}>{education}</Typography>
          <Typography className={classes.horizontalLine} />

          <Typography className={classes.space}></Typography>
          <Typography className={classes.normal1RightSide}>
            {educationTittle1}
          </Typography>
          <Typography className={classes.normal1RightSide}>
            <div className={classes.index}>
              {props.graduationFrom1}
              {datesSeparation}
              {props.graduationTo1}
              <br/>
              {educationSubTittle1}
            </div>
          </Typography>
          <br />
          <Typography className={classes.normal1RightSide}>{gpa}</Typography>
          <Typography className={classes.space}></Typography>
          <Typography className={classes.horizontalLine} />
          <Typography className={classes.boldRightSide}>{interests}</Typography>
          <Typography className={classes.horizontalLine} />
          <Typography className={classes.normal1RightSide}>
            {interestsSubTittle1}
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
export default SimpleCard;
