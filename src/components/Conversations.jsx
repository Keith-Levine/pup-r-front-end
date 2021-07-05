import React from 'react'
import Chat from './Chat'
import './Conversations.css'

function Conversations() {
    return (
        <div className='conversations'>
            <Chat 
                name='Mark'
                message='Yo'
                timestamp='just now'
                profilePic='https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'
            />
            <Chat 
                name='Keith'
                message='Yo'
                timestamp='just now'
                profilePic='https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'
            />
            <Chat 
                name='Mark'
                message='Yo'
                timestamp='just now'
                profilePic='https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'
            />
            <Chat 
                name='Mark'
                message='Yo'
                timestamp='just now'
                profilePic='https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'
            />
            <Chat 
                name='Mark'
                message='Yo'
                timestamp='just now'
                profilePic='https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'
            />
        </div>
    )
}

export default Conversations
