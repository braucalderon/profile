import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Resume.css';

const useStyles = makeStyles((theme) => ({

    root: {
        marginRight: '5%',
        marginLeft: '5%',
        height: '87%',
        display: 'flex',
        color: 'white',
        [theme.breakpoints.down("xs")]: {
            marginLeft: '0',
            marginRight: '0'
        }
    },
    leftSide: {
        backgroundColor: '#3051B0',
        width: '43%',
        margin: '0',
        padding: '0',
        [theme.breakpoints.down("xs")]: {
            width: '45%'
        },
    },
    rightSide: {
        width: '57%',
        margin: ' 0 1vh',
        padding: '0',
        overflow: 'scroll',
        [theme.breakpoints.down("xs")]: {
            width: '55%',
            margin: '0 0.5vh'
        }

    },

    name: {
        margin: '1vh',
        [theme.breakpoints.down("xs")]: {
            fontSize: '2.4vh'
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: '3.5vh'
        },
    },

    normal: {
        fontSize: '2vh',
        marginLeft: '1vh',
        [theme.breakpoints.down("xs")]: {
            fontSize: '1.6vh'
        }
    },
    normalRightSide: {
        fontSize: '2vh',
        marginLeft: '1vh',
        color: 'black',
        [theme.breakpoints.down("xs")]: {
            fontSize: '1.7vh'
        }
    },

    normal1: {
        fontSize: '2.5vh',
        marginLeft: '1vh',
        marginBottom: '1vh',
        [theme.breakpoints.down("xs")]: {
            fontSize: '1.8vh'
        }

    },

    normal1RightSide: {
        fontSize: '2vh',
        marginLeft: '1vh',
        color: 'black',
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '1vh',
            
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '1.5vh',
            
        }

    },
    spaceSubTitle: {
        marginLeft: '1vh',

    },

    email: {
        fontSize: '2vh',
        marginLeft: '1vh',
        marginBottom: '1.5vh',
        [theme.breakpoints.down("xs")]: {
            fontSize: '1.5vh'
        }
    },

    subTitle: {
        fontSize: '2.3vh',
        marginTop: '1vh',
        marginBottom: '1vh',
        backgroundColor: '#092E97',
        width: '100%',
        [theme.breakpoints.down("xs")]: {
            fontSize: '1.8vh'
        }
    },

    bold: {
        fontSize: '2vh',
        marginLeft: '1vh',
        fontWeight: 'bold',
        [theme.breakpoints.between("xs", 'sm')]: {
            fontSize: '1.6vh'
        }

    },
    boldRightSide: {
        fontSize: '2.6vh',
        fontWeight: 'bold',
        color: '#3051B0',
        [theme.breakpoints.between("xs", 'sm')]: {
            fontSize: '1.5vh'
        }
    },

    button1: {
        color: 'white',
        border: '2px solid white',
        padding: '0.4vh 4vh',
        fontSize: '1.5vh',
        marginBottom: '1vh',
        [theme.breakpoints.between("xs", "sm")]: {
            fontSize: '0.7vh'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '1.2vh'

        }

    },
    button2: {
        color: 'white',
        border: '2px solid white',
        padding: '0.4vh 4.3vh',
        fontSize: '1.5vh',
        marginBottom: '1vh',
        [theme.breakpoints.between("xs", "sm")]: {
            fontSize: '0.7vh'
        },
        [theme.breakpoints.between("sm", "md")]: {
            fontSize: '1.2vh'
        }
    },

    horizontalLine: {
        borderTop: '4px solid black',
        width: '100%',
        marginBottom: '1vh',
        marginTop: '1vh',
        opacity: '.6'
    },
    datesSeparation: {
        margin: ' 0 0.5vh',
        [theme.breakpoints.down('xs')]: {
            margin: ' 0 0.3vh',

        }
    },

    jobTittle: {
        fontWeight: 'bold',
        fontSize: '2.5vh',
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '1.2vh',

        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '1.8vh',

        }
    },
    jobSubTittle: {
        fontSize: '1.8vh',
        color: 'black',
        marginLeft: '1vh',
        fontWeight: 'bold',
        
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '1vh',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '1.4vh',

        }
    },
    space: {
        marginTop: '1.5vh'
    },

}));

const SimpleCard = (props => {

    const classes = useStyles();
    let personalInfo = <span className={classes.spaceSubTitle}>{props.personalInfo}</span>
    let skills = <span className={classes.spaceSubTitle}>{props.skills}</span>
    let email = <span>{props.email}</span>

    // experience
    let experience = <span className={classes.spaceSubTitle}>{props.experience}</span>
    let education = <span className={classes.spaceSubTitle}>{props.education}</span>
    let interests = <span className={classes.spaceSubTitle}>{props.interests}</span>
    const datesSeparation = <span className={classes.datesSeparation}>-</span>;

    let jobTitle1 = <span className={classes.jobTittle}>{props.jobTittle1}</span>
    let jobTitle2 = <span className={classes.jobTittle}>{props.jobTittle2}</span>
    let jobTitle3 = <span className={classes.jobTittle}>{props.jobTittle3}</span>

    let jobSubTittle1 = <span className={classes.jobSubTittle}>{props.jobSubTittle1}</span>
    let jobSubTittle2 = <span className={classes.jobSubTittle}>{props.jobSubTittle2}</span>
    let jobSubTittle3 = <span className={classes.jobSubTittle}>{props.jobSubTittle3}</span>

    // Education
    let educationTittle1 = <span className={classes.jobTittle}>{props.educationTittle1}</span>
    let educationTittle2 = <span className={classes.jobTittle}>{props.educationTittle2}</span>
    let educationSubTittle1 = <span >{props.educationSubTittle1}</span>
    let educationSubTittle2 = <span >{props.educationSubTittle2}</span>
    let gpa = <span>{props.gpa}</span>
    // Interests
    let interestsSubTittle1 = <span className={classes.jobSubTittle}>{props.interestsSubTittle1}</span>





    return (
        <React.Fragment>
            <Card className={classes.root}>
                <CardContent className={classes.leftSide}>
                    <Typography className={classes.name}>
                        Braulio Calderon
                    </Typography>
                    <Typography className={classes.normal1} >
                        Full Stack Developer
                    </Typography>

                    <Typography className={classes.subTitle}>
                        {personalInfo}
                    </Typography>
                    <Typography className={classes.bold}>
                        Email
                    </Typography>
                    <Typography className={classes.email}>
                        {email}
                    </Typography>
                    <Typography className={classes.bold}>
                        LinkedIn
                    </Typography>

                    <CardActions className={classes.button}>
                        <a href="https://www.linkedin.com/public-profile/in/brauliocalderon18/"
                            rel="noopener noreferrer"
                            target="_blank"
                            style={{ textDecoration: 'none', color: 'black' }} >
                            <Button className={classes.button1}>
                                Click to open LinkedIn
                            </Button>
                        </a>
                    </CardActions>
                    <Typography className={classes.bold}>
                        GitHub
                    </Typography>

                    <CardActions className={classes.button}>
                        <a href="https://github.com/braucalderon"
                            rel="noopener noreferrer"
                            target="_blank"
                            style={{ textDecoration: 'none', color: 'black' }} >
                            <Button className={classes.button2}>
                                Click to open GitHub
                            </Button>
                        </a>
                    </CardActions>
                    <Typography className={classes.subTitle}>
                        {skills}
                    </Typography>
                    <Typography className={classes.normal}>{props.skill1}</Typography>
                    <Typography className={classes.normal}>{props.skill2}</Typography>
                    <Typography className={classes.normal}>{props.skill3}</Typography>
                    <Typography className={classes.normal}>{props.skill4}</Typography>
                    <Typography className={classes.normal}>{props.skill5}</Typography>
                    <Typography className={classes.normal}>{props.skill6}</Typography>
                    <Typography className={classes.normal}></Typography>
                </CardContent>

                <CardContent className={classes.rightSide}>
                    <Typography className={classes.horizontalLine} />
                    <Typography className={classes.boldRightSide}>{experience}</Typography>
                    <Typography className={classes.horizontalLine} />


                    <Typography className={classes.normal1RightSide}>
                        {jobTitle1}
                    </Typography>
                    <Typography className={classes.normal1RightSide}>
                        {props.dateFrom1}{datesSeparation}{props.dateTo1}
                    </Typography>
                    <Typography>{jobSubTittle1}</Typography>
                    <Typography className={classes.space}></Typography>
                    <Typography className={classes.normal1RightSide}>{props.descriptionJobSubTittle11}</Typography>
                    <Typography className={classes.normal1RightSide}>{props.descriptionJobSubTittle12}</Typography>
                    <Typography className={classes.normal1RightSide}>{props.descriptionJobSubTittle13}</Typography>
                    <Typography className={classes.normal1RightSide}>{props.descriptionJobSubTittle14}</Typography>


                    <Typography className={classes.space}></Typography>
                    <Typography className={classes.normal1RightSide}>
                        {jobTitle2}
                    </Typography>
                    <Typography className={classes.normal1RightSide}>
                        {props.dateFrom2}{datesSeparation}{props.dateTo2}
                    </Typography>
                    <Typography>{jobSubTittle2}</Typography>
                    <Typography className={classes.space}></Typography>
                    <Typography className={classes.normal1RightSide}>{props.descriptionJobSubTittle21}</Typography>
                    <Typography className={classes.normal1RightSide}>{props.descriptionJobSubTittle22}</Typography>
                    <Typography className={classes.normal1RightSide}>{props.descriptionJobSubTittle23}</Typography>

                    <Typography className={classes.space}></Typography>
                    <Typography className={classes.normal1RightSide}>
                        {jobTitle3}
                    </Typography>
                    <Typography className={classes.normal1RightSide}>
                        {props.dateFrom3}{datesSeparation}{props.dateTo3}
                    </Typography>
                    <Typography>{jobSubTittle3}</Typography>
                    <Typography className={classes.space}></Typography>
                    <Typography className={classes.normal1RightSide}>{props.descriptionJobSubTittle31}</Typography>
                    <Typography className={classes.normal1RightSide}>{props.descriptionJobSubTittle32}</Typography>
                    <Typography className={classes.normal1RightSide}>{props.descriptionJobSubTittle33}</Typography>

                    <Typography className={classes.horizontalLine} />
                    <Typography className={classes.boldRightSide}>{education}</Typography>
                    <Typography className={classes.horizontalLine} />

                    <Typography className={classes.space}></Typography>
                    <Typography className={classes.normal1RightSide}>
                        {educationTittle1}
                    </Typography>
                    <Typography className={classes.normal1RightSide}>
                        {props.graduationFrom1}{datesSeparation}{props.graduationTo1}
                    </Typography>
                    <Typography className={classes.normal1RightSide}>
                        {educationSubTittle1}
                    </Typography>
                    <Typography className={classes.normal1RightSide}>
                        {gpa}
                    </Typography>
                    <Typography className={classes.space}></Typography>
                    <Typography className={classes.normal1RightSide}>
                        {educationTittle2}
                    </Typography>
                    <Typography className={classes.normal1RightSide}>
                        {props.graduationFrom2}{datesSeparation}{props.graduationTo2}
                    </Typography>
                    <Typography className={classes.normal1RightSide}>
                        {educationSubTittle2}
                    </Typography>

                    <Typography className={classes.horizontalLine} />
                    <Typography className={classes.boldRightSide}>{interests}</Typography>
                    <Typography className={classes.horizontalLine} />
                    <Typography className={classes.normal1RightSide}>
                        {interestsSubTittle1}
                    </Typography>

                </CardContent>




            </Card>

        </React.Fragment>


    )
});
export default SimpleCard;