import React, { useState, useEffect, useMemo } from 'react';
import TinderCard from 'react-tinder-card';
import firebaseApp from '../firebase';
import './DogCards.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
// import NotInterestedIcon from '@material-ui/icons/NotInterested';
// import ReplayIcon from '@material-ui/icons/Replay';
import IconButton from '@material-ui/core/IconButton';

const database = firebaseApp.firestore()

function DogCards() {
    const alreadyVotedOnDogs = []
    const [allDogs, setallDogs] = useState([]);
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
        console.log(direction)
    }

    // const outOfFrame = (name) => {
    //     console.log(name + ' left the screen!')
    // }

    const childRefs = useMemo(() => Array(allDogs.length).fill(0).map(i => React.createRef()), [allDogs.length])

    const swipe = (dir) => {
        const remainingDogs = allDogs.filter(dog => !alreadyVotedOnDogs.includes(dog.name))
        if (remainingDogs.length) {
          const currentDog = remainingDogs[remainingDogs.length - 1] 
            // Find the card object to be removed
        console.log('voting on dog: ', currentDog.name)
        //   const index = allDogs.map(dog => dog.name).indexOf(currentDog) 
            // Find the index of which to make the reference to
            // console.log(index)
          alreadyVotedOnDogs.push(currentDog) 
        //     // Make sure the next card gets removed next time if this card do not have time to exit the screen

        console.log(currentDog.current)
        currentDog.swipe(dir) 
           
        }
      }

    useEffect(() => {
        const unsubscribe = database
            .collection('dogs')
            .onSnapshot(snapshot => (
                setallDogs(snapshot.docs.map(doc => doc.data()))
            ));

        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <div>
            <div className="dogCards__cardContainer">
            {allDogs.map(dog => (
                <TinderCard
                    className='swipe'
                    key={dog.name}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir) => swiped(dir, dog.name)} 
                    onCardLeftScreen={() => swipe('right')}
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
            {/* <IconButton className='buttons__replay'>
                <ReplayIcon 
                    fontSize='large' 
                /> 
            </IconButton> */}
            {/* <IconButton className='buttons__notInterested'>
                <NotInterestedIcon 
                    fontSize='large' 
                />
            </IconButton> */}
            <IconButton 
                className='buttons__favorite'
                onClick={() => swipe('right')}
                onCardLeftScreen={(e) => swipe(e)}
            >
                <FavoriteIcon 
                    fontSize='large' 
                />
            </IconButton>
        </div>
        </div>
    )
}

export default DogCards
