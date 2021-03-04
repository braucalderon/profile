import React from 'react';
import './About.css';
import Link from '../floatingbutton/LinkButton';
import FloatingButton from '../floatingbutton/Floatingbutton';


const About = (props => {


      
    return (
        <React.Fragment>
            <div className="AboutMeSettings" id="about">
                <div className="AboutMeTitle">About</div>
                <div className='AboutFloatingButton'>
                    <FloatingButton to1={'projects'}
                                    to2={'resume'}
                                    tittle1={'Projects'}
                                    tittle2={'Resume'}
                    />
                </div>
                <div className="AboutGoButton">
                        <Link page={'/aboutmeshow'} 
                                tittle= {<div className="AboutBio">Go to Biography</div>}
                        />
                </div>
                


            </div>

        </React.Fragment>


    )

});
export default About;