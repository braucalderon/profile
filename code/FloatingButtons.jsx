import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ReorderIcon from '@material-ui/icons/Reorder';
import './Floatingbutton.css';
import { animateScroll as scroll, Link } from 'react-scroll';

const useStyles = makeStyles((theme) => ({

    root: {
        opacity: '.6',
        marginLeft: '8vh'

    },
    menuTittle: {
        fontSize: '2.2vh',
        color: 'white',
        marginLeft: '1vh',
        fontFamily: 'serif'
    },
    menuItem: {
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'serif',
        padding: '.5vh 3vh'
    },
    reorderIcon: {
        fontSize: '5vh'
    }

}));

const ArrowHome = (props => {

    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();

    const handleClicked = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }


    return (
        <React.Fragment>

            {/* reusable button component from Material UI */}
         
            <Button onClick={handleClicked}
                className={classes.menuTittle}>
                <ReorderIcon className={classes.reorderIcon} />
            </Button>
            <Menu
                className={classes.root}
                id='menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>

                <MenuItem onClick={handleClose}
                    className={classes.menuItem}>
                    <div onClick={scroll.scrollToTop}>Home</div>
                </MenuItem>

                <Link to={props.to1} spy={true}
                    smooth={true} delay={0}>
                    <MenuItem onClick={handleClose}
                        className={classes.menuItem}>{props.tittle1}</MenuItem>
                    
                </Link>

                <Link to={props.to2} spy={true}
                    smooth={true} delay={0}>
                    <MenuItem onClick={handleClose}
                        className={classes.menuItem}>{props.tittle2}</MenuItem>
                    
                </Link>
            </Menu>
        </React.Fragment>
    )

})
export default ArrowHome;
