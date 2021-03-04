import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';



const useStyles = makeStyles((theme) => ({

    root: {
        backgroundColor: '#3C3C3C',
        marginRight: '10%',
        marginLeft: '10%',
        
        [theme.breakpoints.down( 'xs')]:{
            marginRight: '5%',
            marginLeft: '5%',
            maxWidth: '450px',
            // marginBottom: '3%'
           
        },
        [theme.breakpoints.between( 'sm','lg')]:{
            marginRight: '20%',
            marginLeft: '20%',
            maxWidth: '550px',
            // marginBottom: '0'
        }
    },

    media: {
        height: '42vh',
        [theme.breakpoints.between('xs', 'sm')]: {
            height: '32vh'
        }
        
    },
   
    font: {
        textAlign: 'justify',
        textIndent: '5vh',
        lineHeight: '1.7',
        padding:'0 3vh',
        color: 'white',
        [theme.breakpoints.between('xs', 'lg')]: {
            fontSize: '2vh'
        },
        
    },
    fontExpand:{
        marginBottom: '1vh',
        marginLeft: '2vh',
        marginRight: '2vh',
        textIndent: '5vh',
        lineHeight: '1.7',
        textAlign: 'justify',
        padding:'0 3vh',
        color:'white',
        [theme.breakpoints.between('xs', 'md')]: {
            fontSize: '2vh'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            fontSize: '2.2vh'
        },

    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    },
    moreIcon: {
        color: '#B9CB22',
        fontSize: '6vh'
    },
    avatar: {
        color: 'black',
        backgroundColor: '#B9CB22',
        fontSize: '3vh'
        
    },
    scrollDown: {
        textAlign: 'right',
        marginRight: '2vh',
        marginBottom: '2vh',
        color: '#B9CB22'
    }


}));

// -----------------------------------------------

const AboutCard = (props => {

    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandedClick = () => {
        setExpanded(!expanded);
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={<Avatar className={classes.avatar}>Bio</Avatar>}
                tittle='Biography'
            />
            <CardMedia
                className={classes.media}
                component='img'
                src={props.img}
                tittle='photo'
            />
            <CardContent>
                <Typography className={classes.font}>{props.bio1}</Typography>

            </CardContent>
            <CardActions disableSpacing>
            <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandedClick}
                aria-expanded={expanded}>
            <ExpandMoreIcon className={classes.moreIcon} />
            </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Typography className={classes.scrollDown}>scroll down</Typography>
            <Typography className={classes.fontExpand}>{props.bio2}</Typography>
            <Typography className={classes.fontExpand}>{props.bio3}</Typography>
            <Typography className={classes.fontExpand}>{props.bio4}</Typography>

            </Collapse>

        </Card>

    )
})
export default AboutCard;