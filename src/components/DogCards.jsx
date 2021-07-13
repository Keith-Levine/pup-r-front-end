import React, { useState, useEffect, useMemo } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './DogCards.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
// import ReplayIcon from '@material-ui/icons/Replay';
import IconButton from '@material-ui/core/IconButton';



function DogCards() {
    const alreadyRemoved = []
    const [dogs, setDogs] = useState([]);
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
        console.log(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    // const childRefs = useMemo(() => Array(dogs.length).fill(0).map(i => React.createRef()), [dogs.length])

    const swipe = (dir) => {
        const cardsLeft = dogs.filter(person => !alreadyRemoved.includes(person.name))
        if (cardsLeft.length) {
          const toBeRemoved = cardsLeft[cardsLeft.length - 1].name 
            // Find the card object to be removed
        console.log(toBeRemoved)
        //   const index = dogs.map(dog => dog.name).indexOf(toBeRemoved) 
            // Find the index of which to make the reference to
            // console.log(index)
          alreadyRemoved.push(toBeRemoved) 
        //     // Make sure the next card gets removed next time if this card do not have time to exit the screen

        //   toBeRemoved.current.swipe(dir) 
            // Swipe the card
        }
      }

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
                    onSwipe={(dir) => swiped(dir, dog.name)} 
                    onCardLeftScreen={() => outOfFrame(dog.name)}
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
            <IconButton className='buttons__notInterested'>
                <NotInterestedIcon 
                    fontSize='large' 
                />
            </IconButton>
            <IconButton 
                className='buttons__favorite'
                onClick={() => swipe('right')}
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
