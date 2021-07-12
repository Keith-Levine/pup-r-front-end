import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './DogCards.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import ReplayIcon from '@material-ui/icons/Replay';
import IconButton from '@material-ui/core/IconButton';



function DogCards() {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        const unsubscribe = database
            .collection('dogs')
            .onSnapshot(snapshot => (
                setDogs(snapshot.docs.map(doc => doc.data()))
            ));

        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <div>
            <div className="dogCards__cardContainer">
            {dogs.map(dog => (
                <TinderCard
                    className='swipe'
                    key={dog.name}
                    preventSwipe={['up', 'down']}
                >
                    <div 
                        style={{ backgroundImage: `url(${dog.url})`}}
                        className='card'
                    >
                        <h3>{dog.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
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
        </div>
    )
}

export default DogCards
