import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

import './Home.css'

function Home() {
    return (
        <div>
        <div className='home__buttons'>
            <Link to='/demo'>
                <Button 
                    variant="contained" 
                    color="primary"
                    size="large"
                >Demo</Button>
            </Link>
            <Link to='/registerUser'>
                <Button 
                    variant="contained" 
                    color="primary"
                    size="large"
                >Register User</Button>
            </Link>
            <Link to='/logIn'>
                <Button 
                    variant="contained" 
                    color="primary"
                    size="large"
                >Login</Button>
            </Link>
        </div>
        {/* <div>
            <img src='https://i.imgur.com/dre7Pnj.png' alt='showPage' className='show__page'></img>
        </div> */}
        </div>
    )
}

export default Home
