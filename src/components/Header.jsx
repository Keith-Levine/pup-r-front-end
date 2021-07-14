import React from 'react'
import "./Header.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import PetsIcon from '@material-ui/icons/Pets';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Link, useHistory } from 'react-router-dom'

export default function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className='header'>
            {backButton ? (
                <IconButton 
                onClick={() => history.replace(backButton)}>
                <ArrowBackIosIcon 
                    fontSize='large' 
                    className='header__icon' 
                />
                </IconButton>
            ): (
                // <Link to='/profileDemo'>
                <IconButton>
                    <AccountCircleIcon 
                        fontSize='large' 
                        className='header__icon'
                    />
                </IconButton>
                // </Link>
            )}
            
            <Link to='/'>
            <img 
                className='header__logo'
                src='https://www.clipartmax.com/png/full/314-3140606_puppy-labrador-retriever-french-bulldog-silhouette-dog-logos-transparent.png' 
                alt='dog' 
            />
            </Link>
            <Link to='/chatDemo'>
            <IconButton>
            <ForumIcon 
                fontSize='large'
                className='header__icon'
            />
            </IconButton>
            </Link>
        </div>
    )
}
