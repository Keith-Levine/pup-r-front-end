import React, { Component } from "react";
import database from "./firebase";
import 'firebase/firestore';

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
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="personName">
              Person Name
              <input 
                type="text"
                id="personName"
                value={this.state.personName}
                onChange={(e) => this.handleChange(e)}
              />
            </label>
            <label htmlFor="profileURL">
              Person Image URL
              <input 
                type="text"
                id="profileURL"
                value={this.state.profileURL}
                onChange={(e) => this.handleChange(e)}
              />
            </label>
            <label htmlFor="dogName">
              Dog Name
              <input 
                type="text"
                id="dogName"
                value={this.state.dogName}
                onChange={(e) => this.handleChange(e)}
              />
            </label>
            <label htmlFor="dogImageURL">
              Dog Image URL
              <input 
                type="text"
                id="dogImageURL"
                value={this.state.dogImageURL}
                onChange={(e) => this.handleChange(e)}
              />
            </label>
            <input type="submit" />
          </form>
        </div>
      )
    }
  }
  
  
  export default Register;
