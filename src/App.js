import React from 'react';
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import DogCards from './components/DogCards';
import Buttons from './components/Buttons'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/chat'>
            <Header />
            <h1>chat page</h1>
          </Route>
          <Route path='/'>
            <Header />
            <DogCards />
            <Buttons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

<Header />