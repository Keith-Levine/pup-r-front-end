import React, { useState} from 'react'
import { Avatar } from '@material-ui/core';
import './ChatScreen.css';

function ChatScreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: 'Haley & Cooper',
            dogPic: 'https://i.imgur.com/NofaRy8.jpg',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbtnTcfzD1zMtyOuNPMRTGPNZcFbHOD5VhMQ&usqp=CAU',
            message: `Hey!`
        },
        {
            name: 'Mark',
            dogPic: 'https://i.imgur.com/NofaRy8.jpg',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbtnTcfzD1zMtyOuNPMRTGPNZcFbHOD5VhMQ&usqp=CAU',
            message: `How's it going`
        },
        {
            message: `You're dog is too cute!`
        }
    ]) 

    const handleSend = e => {
        e.preventDefault()

        setMessages([...messages, { message:input }]);
        setInput('');
    }

    return (
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>You matched with Haley & Atlas on 07/14/22</p>
            {messages.map(message => (
                message.name ? (
                <div className='chatScreen__message'>
                <Avatar
                    className='chatScreen__image'
                    alt={message.name}
                    src={message.image}
                />
                <Avatar
                    className='chatScreen__image'
                    alt={message.name}
                    src={message.dogPic}
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
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className='chatScreen__inputField'
                        type='text' 
                        placeholder='Type message here...'
                    />
                    <button 
                    type='submit'
                    onClick={handleSend}
                    className='chatScreen__inputButton'>Send</button>
                </form>

        </div>
    )
}

export default ChatScreen

