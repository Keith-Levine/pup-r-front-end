import React, { Component } from "react";
import database from "./firebase";
import 'firebase/firestore';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Register.css'

class Register extends Component {
    constructor(props) {
      super(props)
      this.state = {
        personName: '',
        profileURL: '',
        dogName: '',
        dogImageURL: '',
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e) {
      this.setState({ [e.currentTarget.id]: e.currentTarget.value})
    }
  
    handleSubmit(e) {
      e.preventDefault();
      
      let data = {
        personName: this.state.personName,
        profileURL: this.state.profileURL,
        dogName: this.state.dogName,
        dogImageURL: this.state.dogImageURL,
      };
  
      database.collection('users').add(data)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  
      this.setState({
        personName: '',
        profileURL: '',
        dogName: '',
        dogImageURL: '',
      })
    }
  
    render() {
      return (
        <div className="registerInputs">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="personName">
              <TextField  
                label="Name" 
                variant="outlined"
                type="text"
                id="personName"
                value={this.state.personName}
                onChange={(e) => this.handleChange(e)}
              />
            </label>
            <label htmlFor="profileURL">
              <TextField 
                label="Profile Image URL" 
                variant="outlined"
                type="text"
                id="profileURL"
                value={this.state.profileURL}
                onChange={(e) => this.handleChange(e)}
              />
            </label>
            <label htmlFor="dogName">
              <TextField 
                label="Dog Name" 
                variant="outlined"
                type="text"
                id="dogName"
                value={this.state.dogName}
                onChange={(e) => this.handleChange(e)}
              />
            </label>
            <label htmlFor="dogImageURL">
              <TextField 
                label="Dog Image URL" 
                variant="outlined"
                type="text"
                id="dogImageURL"
                value={this.state.dogImageURL}
                onChange={(e) => this.handleChange(e)}
              />
            </label>
            <Button 
                variant="contained" 
                color="secondary"
                type="submit">
                    Submit
            </Button>
          </form>
        </div>
      )
    }
  }
  
  
  export default Register;
