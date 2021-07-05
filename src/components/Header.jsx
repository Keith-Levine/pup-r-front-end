import React from 'react'
import "./Header.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PetsIcon from '@material-ui/icons/Pets';
import IconButton from '@material-ui/core/IconButton';

export default function Header() {
    return (
        <div className='header'>
            <IconButton>
            <AccountCircleIcon 
                fontSize='large' 
                className='header__icon'
            />
            </IconButton>
            <img 
                className='header__logo'
                src='https://www.clipartmax.com/png/full/314-3140606_puppy-labrador-retriever-french-bulldog-silhouette-dog-logos-transparent.png' 
                alt='dog' />
            <IconButton>
            <PetsIcon 
                fontSize='large'
                className='header__icon'
            />
            </IconButton>
        </div>
    )
}
