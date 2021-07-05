import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';
import './DogCards.css'

function DogCards() {
    const [dogs, setDogs] = useState([
        {
            name: 'Keith',
            url: 'https://www.clipartmax.com/png/full/314-3140606_puppy-labrador-retriever-french-bulldog-silhouette-dog-logos-transparent.png'
        },
        {
            name: 'cami',
            url: 'https://www.clipartmax.com/png/full/314-3140606_puppy-labrador-retriever-french-bulldog-silhouette-dog-logos-transparent.png'
        }
    ]);

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
        </div>
    )
}

export default DogCards
