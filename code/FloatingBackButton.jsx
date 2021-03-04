import React from 'react';
import './Floatingbutton.css';
import { Link as LinkPage } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

const CloseButton = (props => {

    return (
        <div className="CloseButton">
            <LinkPage to="/">
                <div className="CloseButtonHover">
                    <CloseIcon style={{
                        fontSize: '8vh',
                    }} />
                </div>

            </LinkPage>
        </div>

    )
});
export default CloseButton;