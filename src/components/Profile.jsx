import React, { useState, useEffect } from 'react';
import database from './firebase';
import './AllUsers.css'

function Profile() {
    const [user] = useState([]);

    useEffect(() => {
        const unsubscribe = database
            .doc(`${user.personName}`)

        return () => {
            unsubscribe();
        }
    });

    return (
            <div className="userCards__cardContainer">
                    <div 
                        style={{ backgroundImage: `url(${user.profileURL})`}}
                        className='card'
                    >
                        <h3>{user.personName}</h3>
                    </div>
            </div>
    )
}

export default Profile