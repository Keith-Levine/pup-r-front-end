import React from 'react';
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import DogCards from './components/DogCards';
import Buttons from './components/Buttons';
import Home from './components/Home';
import HomeHeader from './components/HomeHeader';
import Register from './components/Register'
import LogIn from './components/LogIn';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/demo'>
            <Header />
            <DogCards />
            <Buttons />
          </Route>
          <Route path='/chat'>
            <Header backButton='/'/>
            <h1>chat page</h1>
          </Route>
          <Route path='/register'>
            <HomeHeader />
            <Register />
          </Route>
          <Route path='/logIn'>
            <HomeHeader />
            <LogIn />
          </Route>
          <Route path='/'>
            <HomeHeader />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

<Header />