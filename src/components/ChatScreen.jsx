import React, { useState} from 'react'
import { Avatar } from '@material-ui/core';
import './ChatScreen.css';

function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            name: 'Mark',
            image: 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
            message: `What's Up`
        },
        {
            name: 'Mark',
            image: 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
            message: `How's it going`
        },
        {
            message: `Good, how are you`
        }
    ]) 

    return (
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>You matched with Mark on 04/28/20</p>
            {messages.map(message => (
                message.name ? (
                <div className='chatScreen__message'>
                <Avatar
                    className='chatScreen__image'
                    alt={message.name}
                    src={message.image}
                />
                    <p className='chatScreen__text'>{message.message}</p>
                </div>  
                ) : (
                    <div className='chatScreen__message'>
                        <p className='chatScreen__textUser'>{message.message}</p>
                    </div>
                )  
            ))}


                <form className='chatScreen__input'>
                    <input 
                        className='chatScreen__inputField'
                        type='text' 
                        placeholder='Type message here...'
                    />
                    <button className='chatScreen__inputButton'>Send</button>
                </form>

        </div>
    )
}

export default ChatScreen

