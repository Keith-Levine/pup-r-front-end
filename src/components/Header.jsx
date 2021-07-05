import React from 'react'
import "./Header.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PetsIcon from '@material-ui/icons/Pets';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='header'>
            <IconButton>
            <AccountCircleIcon 
                fontSize='large' 
                className='header__icon'
            />
            </IconButton>
            <Link to='/'>
            <img 
                className='header__logo'
                src='https://www.clipartmax.com/png/full/314-3140606_puppy-labrador-retriever-french-bulldog-silhouette-dog-logos-transparent.png' 
                alt='dog' 
            />
            </Link>
            <Link to='/chat'>
            <IconButton>
            <PetsIcon 
                fontSize='large'
                className='header__icon'
            />
            </IconButton>
            </Link>
        </div>
    )
}
