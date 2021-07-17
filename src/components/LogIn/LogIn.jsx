import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function LogIn() {
    const classes = useStyles();
    return (
        <div>
            <form 
                className={classes.root} 
                noValidate 
                autoComplete="off"
            >
                <TextField 
                    id="outlined-basic" 
                    label="username" 
                    variant="outlined" 
                />
                <TextField 
                    id="outlined-basic" 
                    label="password" 
                    variant="outlined" 
                />
                <br></br>
                <Button 
                    variant="contained" 
                    color="secondary">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default LogIn
