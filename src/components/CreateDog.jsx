import React, { Component } from "react";
import database from "./firebase";
import 'firebase/firestore';

class CreateDog extends Component {
    constructor(props) {
      super(props)
      this.state = {
        name: '',
        url: '',
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e) {
      this.setState({ [e.currentTarget.id]: e.currentTarget.value})
    }
  
    handleSubmit(e) {
      e.preventDefault();
      
      let data = {
        name: this.state.name,
        url: this.state.url,
      };
  
      database.collection('dogs').create(data)
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

        name: '',
        url: '',
      })
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">
              Name
              <input 
                type="text"
                id="name"
                value={this.state.name}
                onChange={(e) => this.handleChange(e)}
              />
            </label>
            <label htmlFor="url">
              URL
              <input 
                type="text"
                id="url"
                value={this.state.url}
                onChange={(e) => this.handleChange(e)}
              />
            </label>
            <input type="submit" />
          </form>
        </div>
      )
    }
  }
  
  
  export default CreateDog;


