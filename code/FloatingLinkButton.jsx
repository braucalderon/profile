import React from 'react';
import './Floatingbutton.css';
import { Link as LinkPage } from 'react-router-dom';

const LinkButton = (props => {

    return(
        <LinkPage  to={props.page}
        className="FloatingLinkButton">
                {props.tittle}
        </LinkPage>
    )
});
export default LinkButton;