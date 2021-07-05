import React from 'react'
import "./HomeHeader.css"
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import PetsIcon from '@material-ui/icons/Pets';
// import IconButton from '@material-ui/core/IconButton';
// import { Link } from 'react-router-dom'

export default function HomeHeader() {
    return (
        <div className='home__header'>
            <img 
                className='header__logo'
                src='https://www.clipartmax.com/png/full/314-3140606_puppy-labrador-retriever-french-bulldog-silhouette-dog-logos-transparent.png' 
                alt='dog' 
            />
            <h3>Welcome to Pup-r</h3>
        </div>
    )
}