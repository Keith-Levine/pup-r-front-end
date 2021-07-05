import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import ReplayIcon from '@material-ui/icons/Replay';
import IconButton from '@material-ui/core/IconButton';

import './Buttons.css'

function Buttons() {
    return (
        <div className='buttons'>
            <IconButton className='buttons__replay'>
                <ReplayIcon 
                    fontSize='large' 
                /> 
            </IconButton>
            <IconButton className='buttons__favorite'>
                <FavoriteIcon 
                    fontSize='large' 
                />
            </IconButton>
            <IconButton className='buttons__notInterested'>
                <NotInterestedIcon 
                    fontSize='large' 
                />
            </IconButton>
        </div>
    )
}

export default Buttons
