import React, { useState} from 'react'
import "./ProfileDemo.css"
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

function ChatScreen() {
    const [profile, setProfile] = useState(
        {
            name: 'Keith',
            image: 'https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70',
            location: 'Chicaco, IL',
            dogName: 'Chico',
            dogImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/smartest-dog-breeds-1553287693.jpg?crop=0.673xw:1.00xh;0.167xw,0&resize=640:*'
        }
    )

    return (
        <div className='profileScreen'>
            <div className='profilePerson'>
                <TextField id="outlined-basic" variant="outlined" />
                <h2>{profile.name}</h2>
                <img
                    className='profilePerson__image'
                    alt={profile.name}
                    src={profile.image}
                />
            </div>
            <div className='profileDog'>
            <h2>{profile.dogName}</h2>
                <img
                    className='profileDog__image'
                    alt={profile.dogName}
                    src={profile.dogImage}
                />
            </div>
        </div>
    )
}

export default ChatScreen