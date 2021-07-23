import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import firebaseApp from '../firebase';
import './DogCards.css'
<<<<<<< HEAD:src/components/DogCards/DogCards.jsx
import FavoriteIcon from '@material-ui/icons/Favorite';
// import NotInterestedIcon from '@material-ui/icons/NotInterested';
// import ReplayIcon from '@material-ui/icons/Replay';
import IconButton from '@material-ui/core/IconButton';
=======
>>>>>>> 2cdd4c5c4212c90cdcad376156d2f4f2926f29e1:src/components/DogCards.jsx

const database = firebaseApp.firestore()

function DogCards() {
<<<<<<< HEAD:src/components/DogCards/DogCards.jsx
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
=======
    const [dogs, setDogs] = useState([]);
>>>>>>> 2cdd4c5c4212c90cdcad376156d2f4f2926f29e1:src/components/DogCards.jsx

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
<<<<<<< HEAD:src/components/DogCards/DogCards.jsx
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
=======
>>>>>>> 2cdd4c5c4212c90cdcad376156d2f4f2926f29e1:src/components/DogCards.jsx
        </div>
    )
}

export default DogCards
