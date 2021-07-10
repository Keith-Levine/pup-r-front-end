import React, { useState, useEffect } from 'react';
// import TinderCard from 'react-tinder-card';
import database from './firebase';
import './AllUsers.css'



function AllUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const unsubscribe = database
            .collection('users')
            .onSnapshot(snapshot => (
                setUsers(snapshot.docs.map(doc => doc.data()))
            ));

        return () => {
            unsubscribe();
        }
    }, []);

    return (
            <div className="userCards__cardContainer">
            {users.map(user => (
                    <div 
                        style={{ backgroundImage: `url(${user.profileURL})`}}
                        className='card'
                    >
                        <h3>{user.personName}</h3>
                    </div>
            ))}
            </div>
    )
}

export default AllUsers