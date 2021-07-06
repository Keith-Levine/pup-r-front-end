import React from 'react'
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'

import './ChatDemo.css'

function Chat({ name, message, profilePic, dogPic, timestamp}) {
    return (
        <Link to={`/chatDemo/${name}`}>
        <div className='chat'>
            <Avatar 
                className='chat__image' 
                src={profilePic}
            />
            <Avatar 
                className='chat__image' 
                src={dogPic}
            />
            <div className='chat__details'>
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            <p className='chat__timestamp'>{timestamp}</p>
        </div>
        </Link>
    )
}

export default Chat
