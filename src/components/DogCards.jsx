import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';
import './DogCards.css'

function DogCards() {
    const [dogs, setDogs] = useState([
        {
            name: 'Keith',
            url: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg'
        },
        {
            name: 'cami',
            url: 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/puppy-410265.jpg?h=0c7c9985&itok=ZQixcJRY'
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
